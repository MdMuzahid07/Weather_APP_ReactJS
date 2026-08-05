import { LocationItem, ProcessedWeatherData, TemperatureUnit, WmoCondition } from '../types/weather';

const GEOCODING_API_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const FORECAST_API_URL = 'https://api.open-meteo.com/v1/forecast';

/**
 * WMO Weather Code Interpreter for Animated Icons
 */
export const getWeatherCondition = (code: number): WmoCondition => {
  switch (code) {
    case 0:
      return { label: 'Sunny', iconName: 'Sun', description: 'Clear sky', color: 'text-amber-300' };
    case 1:
    case 2:
      return { label: 'Partly Cloudy', iconName: 'CloudSun', description: 'Mainly clear to partly cloudy', color: 'text-amber-200' };
    case 3:
      return { label: 'Overcast', iconName: 'Cloud', description: 'Overcast sky', color: 'text-slate-300' };
    case 45:
    case 48:
      return { label: 'Foggy', iconName: 'CloudFog', description: 'Fog and depositing rime fog', color: 'text-slate-300' };
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return { label: 'Drizzle', iconName: 'CloudDrizzle', description: 'Light to dense drizzle', color: 'text-blue-300' };
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return { label: 'Rainy', iconName: 'CloudRain', description: 'Slight to heavy rain', color: 'text-blue-400' };
    case 71:
    case 73:
    case 75:
    case 77:
      return { label: 'Snowy', iconName: 'Snowflake', description: 'Slight to heavy snow fall', color: 'text-cyan-200' };
    case 80:
    case 81:
    case 82:
      return { label: 'Showers', iconName: 'CloudRainWind', description: 'Rain showers', color: 'text-blue-400' };
    case 85:
    case 86:
      return { label: 'Snow Showers', iconName: 'CloudSnow', description: 'Snow showers', color: 'text-cyan-200' };
    case 95:
    case 96:
    case 99:
      return { label: 'Thunderstorm', iconName: 'CloudLightning', description: 'Thunderstorm with slight to heavy hail', color: 'text-yellow-400' };
    default:
      return { label: 'Clear', iconName: 'Sun', description: 'Clear sky', color: 'text-amber-300' };
  }
};

/**
 * Search cities worldwide using Open-Meteo Geocoding
 */
export const searchCities = async (query: string): Promise<LocationItem[]> => {
  if (!query || query.trim().length < 2) return [];
  const sanitizedQuery = query.trim().replace(/[<>]/g, '');
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(
      `${GEOCODING_API_URL}?name=${encodeURIComponent(sanitizedQuery)}&count=6&language=en&format=json`,
      { signal: controller.signal }
    );
    clearTimeout(timeoutId);

    if (!res.ok) throw new Error('Failed to search locations');
    const data = await res.json();
    if (!data.results) return [];

    return data.results.map((item: any) => ({
      name: item.name,
      country: item.country || '',
      latitude: item.latitude,
      longitude: item.longitude,
    }));
  } catch (err) {
    console.error('Error searching cities:', err);
    return [];
  }
};

/**
 * Fetch full weather data from Open-Meteo API
 */
export const fetchWeatherData = async (
  lat: number,
  lon: number,
  unit: TemperatureUnit = 'C'
): Promise<ProcessedWeatherData> => {
  const tempUnitParam = unit === 'F' ? '&temperature_unit=fahrenheit' : '';
  const windSpeedParam = unit === 'F' ? '&wind_speed_unit=mph' : '&wind_speed_unit=kmh';
  const precipParam = unit === 'F' ? '&precipitation_unit=inch' : '&precipitation_unit=mm';

  const url = `${FORECAST_API_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,showers,weather_code,cloud_cover,wind_speed_10m,uv_index&hourly=temperature_2m,precipitation_probability,precipitation,uv_index,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,uv_index_max&timezone=auto${tempUnitParam}${windSpeedParam}${precipParam}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  const res = await fetch(url, { signal: controller.signal });
  clearTimeout(timeoutId);

  if (!res.ok) throw new Error('Failed to fetch weather data from Open-Meteo');
  const data = await res.json();

  const current = data.current;
  const condition = getWeatherCondition(current.weather_code);

  // Format daily forecast (7 days)
  const daily: ProcessedWeatherData['daily'] = [];
  if (data.daily && data.daily.time) {
    for (let i = 0; i < data.daily.time.length; i++) {
      const dateObj = new Date(data.daily.time[i]);
      const dayName = i === 0 ? 'Today' : dateObj.toLocaleDateString('en-US', { weekday: 'short' });
      daily.push({
        date: data.daily.time[i],
        dayName,
        tempMax: Math.round(data.daily.temperature_2m_max[i]),
        tempMin: Math.round(data.daily.temperature_2m_min[i]),
        weatherCode: data.daily.weather_code[i],
        condition: getWeatherCondition(data.daily.weather_code[i]),
      });
    }
  }

  // Format hourly forecast (next 24 hours)
  const hourly: ProcessedWeatherData['hourly'] = [];
  if (data.hourly && data.hourly.time) {
    const currentHourIndex = data.hourly.time.findIndex((t: string) => new Date(t) >= new Date()) || 0;
    const sliceIndex = Math.max(0, currentHourIndex);
    const hours24 = data.hourly.time.slice(sliceIndex, sliceIndex + 24);

    hours24.forEach((timeStr: string, idx: number) => {
      const actualIdx = sliceIndex + idx;
      const hourDate = new Date(timeStr);
      hourly.push({
        time: hourDate.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }),
        temp: Math.round(data.hourly.temperature_2m[actualIdx]),
        rainChance: data.hourly.precipitation_probability[actualIdx] || 0,
        uv: Math.round(data.hourly.uv_index[actualIdx] || 0),
      });
    });
  }

  const humidityVal = current.relative_humidity_2m;
  const humidityStatus = humidityVal < 30 ? 'Dry' : humidityVal <= 65 ? 'Good' : 'High';

  const uvVal = Math.round(current.uv_index || 0);
  const uvStatus = uvVal <= 2 ? 'Low' : uvVal <= 5 ? 'Medium' : uvVal <= 7 ? 'High' : 'Very High';

  const rainChanceVal = hourly.length > 0 ? hourly[0].rainChance : 0;
  const sunriseStr = data.daily?.sunrise?.[0]
    ? new Date(data.daily.sunrise[0]).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
    : '06:00';
  const sunsetStr = data.daily?.sunset?.[0]
    ? new Date(data.daily.sunset[0]).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
    : '18:30';

  return {
    current: {
      temp: Math.round(current.temperature_2m),
      feelsLike: Math.round(current.apparent_temperature),
      humidity: current.relative_humidity_2m,
      humidityStatus,
      windSpeed: Math.round(current.wind_speed_10m),
      windUnit: unit === 'F' ? 'mph' : 'km/h',
      precipitation: current.precipitation || 0,
      precipUnit: unit === 'F' ? 'in' : 'mm',
      uvIndex: uvVal,
      uvStatus,
      rainChance: rainChanceVal,
      sunrise: sunriseStr,
      sunset: sunsetStr,
      weatherCode: current.weather_code,
      condition,
    },
    daily,
    hourly,
    fetchedAt: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
  };
};
