import { create } from 'zustand';
import { fetchWeatherData, searchCities } from '../services/weatherService';

const DEFAULT_LOCATION = {
  name: 'New York',
  country: 'USA',
  latitude: 40.7128,
  longitude: -74.0060,
};

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const stored = window.localStorage.getItem('weather_theme');
    if (stored === 'light' || stored === 'dark') return stored;
  }
  return 'dark';
};

export const useWeatherStore = create((set, get) => ({
  location: DEFAULT_LOCATION,
  unit: 'C', // 'C' or 'F'
  theme: getInitialTheme(), // 'dark' or 'light'
  weatherData: null,
  loading: true,
  error: null,
  isSearchOpen: false,

  // Actions
  setIsSearchOpen: (open) => set({ isSearchOpen: open }),

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

  selectLocation: (newLoc) => {
    set({ location: newLoc, isSearchOpen: false });
    get().fetchWeather();
  },

  fetchWeather: async () => {
    const { location, unit } = get();
    set({ loading: true, error: null });
    try {
      const data = await fetchWeatherData(location.latitude, location.longitude, unit);
      set({ weatherData: data, loading: false });
    } catch (err) {
      console.error(err);
      set({ error: 'Failed to fetch weather data.', loading: false });
    }
  },

  fetchUserLocation: () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    set({ loading: true });
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const userLoc = {
          name: 'Your Location',
          country: '',
          latitude,
          longitude,
        };
        set({ location: userLoc, isSearchOpen: false });
        get().fetchWeather();
      },
      (err) => {
        console.error(err);
        set({ loading: false });
        alert('Could not retrieve your location. Please check browser permissions.');
      }
    );
  },

  searchCities,
}));
