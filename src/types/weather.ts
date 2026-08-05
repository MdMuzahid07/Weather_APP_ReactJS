export interface LocationItem {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface WmoCondition {
  label: string;
  iconName: string;
  description: string;
  color: string;
}

export interface CurrentWeatherData {
  temp: number;
  feelsLike: number;
  humidity: number;
  humidityStatus: string;
  windSpeed: number;
  windUnit: string;
  precipitation: number;
  precipUnit: string;
  uvIndex: number;
  uvStatus: string;
  rainChance: number;
  sunrise: string;
  sunset: string;
  weatherCode: number;
  condition: WmoCondition;
}

export interface HourlyForecastItem {
  time: string;
  temp: number;
  rainChance: number;
  uv: number;
}

export interface DailyForecastItem {
  date: string;
  dayName: string;
  tempMax: number;
  tempMin: number;
  weatherCode: number;
  condition: WmoCondition;
}

export interface ProcessedWeatherData {
  current: CurrentWeatherData;
  hourly: HourlyForecastItem[];
  daily: DailyForecastItem[];
  fetchedAt: string;
}

export interface InsightCardData {
  title: string;
  text: string;
  badge: string;
}

export interface WeatherInsights {
  clothing: InsightCardData;
  outdoor: {
    score: number;
    text: string;
  };
  rainAlert: {
    needed: boolean;
    badge: string;
    text: string;
  };
  sunCare: InsightCardData;
}

export type TemperatureUnit = 'C' | 'F';
export type ThemeMode = 'dark' | 'light';

export interface WeatherStoreState {
  location: LocationItem;
  unit: TemperatureUnit;
  theme: ThemeMode;
  weatherData: ProcessedWeatherData | null;
  loading: boolean;
  error: string | null;
  isSearchOpen: boolean;
  isOffline: boolean;

  // Actions
  setIsSearchOpen: (open: boolean) => void;
  toggleUnit: () => void;
  toggleTheme: () => void;
  selectLocation: (loc: LocationItem) => void;
  fetchWeather: () => Promise<void>;
  fetchUserLocation: () => void;
  searchCities: (query: string) => Promise<LocationItem[]>;
}
