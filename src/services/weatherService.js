/**
 * Open-Meteo Weather Service
 * 100% Free, Public, No API Key Required
 */

const GEOCODING_API_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const FORECAST_API_URL = 'https://api.open-meteo.com/v1/forecast';

/**
 * WMO Weather Code Interpreter for Lucide Animated Icons
 */
export const getWeatherCondition = (code) => {
  switch (code) {
    case 0:
      return { label: 'Sunny', iconName: 'Sun', color: 'text-amber-300', animation: 'animate-spin-slow', emoji: '☀️' };
    case 1:
    case 2:
      return { label: 'Partly Cloudy', iconName: 'CloudSun', color: 'text-amber-200', animation: 'animate-float', emoji: '⛅' };
    case 3:
      return { label: 'Overcast', icon: 'Cloud', iconName: 'Cloud', color: 'text-slate-300', animation: 'animate-float', emoji: '☁️' };
    case 45:
    case 48:
      return { label: 'Foggy', iconName: 'CloudFog', color: 'text-slate-300', animation: 'animate-pulse', emoji: '🌫️' };
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return { label: 'Drizzle', iconName: 'CloudDrizzle', color: 'text-blue-300', animation: 'animate-rain', emoji: '🌧️' };
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return { label: 'Rainy', iconName: 'CloudRain', color: 'text-blue-400', animation: 'animate-rain', emoji: '🌧️' };
    case 71:
    case 73:
    case 75:
    case 77:
      return { label: 'Snowy', iconName: 'Snowflake', color: 'text-cyan-200', animation: 'animate-spin-slow', emoji: '❄️' };
    case 80:
    case 81:
    case 82:
      return { label: 'Showers', iconName: 'CloudRainWind', color: 'text-blue-400', animation: 'animate-rain', emoji: '🌦️' };
    case 85:
    case 86:
      return { label: 'Snow Showers', iconName: 'CloudSnow', color: 'text-cyan-200', animation: 'animate-float', emoji: '🌨️' };
    case 95:
    case 96:
    case 99:
      return { label: 'Thunderstorm', iconName: 'CloudLightning', color: 'text-yellow-400', animation: 'animate-bounce', emoji: '⛈️' };
    default:
      return { label: 'Clear', iconName: 'Sun', color: 'text-amber-300', animation: 'animate-spin-slow', emoji: '🌤️' };
  }
};

/**
 * Search cities worldwide using Open-Meteo Geocoding
 */
export const searchCities = async (query) => {
  if (!query || query.trim().length < 2) return [];
  try {
    const res = await fetch(`${GEOCODING_API_URL}?name=${encodeURIComponent(query)}&count=6&language=en&format=json`);
    if (!res.ok) throw new Error('Failed to search locations');
    const data = await res.json();
    if (!data.results) return [];
    return data.results.map((item) => ({
      id: `${item.latitude}-${item.longitude}-${item.name}`,
      name: item.name,
      country: item.country || '',
      admin1: item.admin1 || '',
      latitude: item.latitude,
      longitude: item.longitude,
      timezone: item.timezone || 'auto',
    }));
  } catch (err) {
    console.error('Error searching cities:', err);
    return [];
  }
};

/**
 * Fetch full weather data from Open-Meteo
 */
export const fetchWeatherData = async (lat, lon, unit = 'C') => {
  const tempUnitParam = unit === 'F' ? '&temperature_unit=fahrenheit' : '';
  const windSpeedParam = unit === 'F' ? '&wind_speed_unit=mph' : '&wind_speed_unit=kmh';
  const precipParam = unit === 'F' ? '&precipitation_unit=inch' : '&precipitation_unit=mm';

  const url = `${FORECAST_API_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,showers,weather_code,cloud_cover,wind_speed_10m,uv_index&hourly=temperature_2m,precipitation_probability,precipitation,uv_index,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,uv_index_max&timezone=auto${tempUnitParam}${windSpeedParam}${precipParam}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch weather data');
  const data = await res.json();

  // Format current weather
  const current = data.current;
  const condition = getWeatherCondition(current.weather_code);

  // Format daily forecast (7 days)
  const daily = [];
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
        sunrise: data.daily.sunrise[i] ? new Date(data.daily.sunrise[i]).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) : '--:--',
        sunset: data.daily.sunset[i] ? new Date(data.daily.sunset[i]).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) : '--:--',
      });
    }
  }

  // Format hourly forecast (next 24 hours for chart)
  const hourly = [];
  if (data.hourly && data.hourly.time) {
    const currentHourIndex = data.hourly.time.findIndex(t => new Date(t) >= new Date()) || 0;
    const sliceIndex = Math.max(0, currentHourIndex);
    const hours24 = data.hourly.time.slice(sliceIndex, sliceIndex + 24);

    hours24.forEach((timeStr, idx) => {
      const actualIdx = sliceIndex + idx;
      const hourDate = new Date(timeStr);
      hourly.push({
        time: hourDate.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }),
        rawTime: timeStr,
        temp: Math.round(data.hourly.temperature_2m[actualIdx]),
        rainChance: data.hourly.precipitation_probability[actualIdx] || 0,
        precip: data.hourly.precipitation[actualIdx] || 0,
        uv: data.hourly.uv_index[actualIdx] || 0,
        condition: getWeatherCondition(data.hourly.weather_code[actualIdx]),
      });
    });
  }

  // Determine status levels for metric cards
  const humidityVal = current.relative_humidity_2m;
  const humidityStatus = humidityVal < 30 ? 'Dry' : humidityVal <= 65 ? 'Good' : 'High';

  const uvVal = Math.round(current.uv_index || 0);
  const uvStatus = uvVal <= 2 ? 'Low' : uvVal <= 5 ? 'Medium' : uvVal <= 7 ? 'High' : 'Very High';

  const rainChanceVal = hourly.length > 0 ? hourly[0].rainChance : 0;

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
      condition,
      sunrise: daily[0]?.sunrise || '06:00',
      sunset: daily[0]?.sunset || '18:30',
    },
    daily,
    hourly,
    timezone: data.timezone,
  };
};
