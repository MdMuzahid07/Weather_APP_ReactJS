import { create } from 'zustand';
import { fetchWeatherData, searchCities } from '../services/weatherService';
import { LocationItem, ThemeMode, WeatherStoreState } from '../types/weather';

const DEFAULT_LOCATION: LocationItem = {
  name: 'New York',
  country: 'USA',
  latitude: 40.7128,
  longitude: -74.0060,
};

const getInitialTheme = (): ThemeMode => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const stored = window.localStorage.getItem('weather_theme');
    if (stored === 'light' || stored === 'dark') return stored;
  }
  return 'dark';
};

export const useWeatherStore = create<WeatherStoreState>((set, get) => ({
  location: DEFAULT_LOCATION,
  unit: 'C',
  theme: getInitialTheme(),
  weatherData: null,
  loading: true,
  error: null,
  isSearchOpen: false,
  isOffline: typeof navigator !== 'undefined' ? !navigator.onLine : false,

  setIsSearchOpen: (open: boolean) => set({ isSearchOpen: open }),

  toggleUnit: () => {
    const newUnit = get().unit === 'C' ? 'F' : 'C';
    set({ unit: newUnit });
    get().fetchWeather();
  },

  toggleTheme: () => {
    const newTheme = get().theme === 'dark' ? 'light' : 'dark';
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('weather_theme', newTheme);
    }
    set({ theme: newTheme });
  },

  selectLocation: (newLoc: LocationItem) => {
    set({ location: newLoc, isSearchOpen: false });
    get().fetchWeather();
  },

  fetchWeather: async () => {
    const { location, unit } = get();
    set({ loading: true, error: null });
    try {
      const data = await fetchWeatherData(location.latitude, location.longitude, unit);
      set({ weatherData: data, loading: false, isOffline: !navigator.onLine });
    } catch (err: unknown) {
      console.error('Error fetching weather data:', err);
      set({
        error: 'Failed to fetch weather data. Showing cached results if available.',
        loading: false,
        isOffline: !navigator.onLine,
      });
    }
  },

  fetchUserLocation: () => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    set({ loading: true });
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const userLoc: LocationItem = {
          name: 'Your Location',
          country: '',
          latitude,
          longitude,
        };
        set({ location: userLoc, isSearchOpen: false });
        get().fetchWeather();
      },
      (err) => {
        console.error('Geolocation error:', err);
        set({ loading: false });
        alert('Could not retrieve your location. Please check browser permissions.');
      }
    );
  },

  searchCities,
}));

// Listen for network status changes
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    useWeatherStore.setState({ isOffline: false });
    useWeatherStore.getState().fetchWeather();
  });
  window.addEventListener('offline', () => {
    useWeatherStore.setState({ isOffline: true });
  });
}
