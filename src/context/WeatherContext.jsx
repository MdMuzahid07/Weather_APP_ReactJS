import { useWeatherStore } from '../store/useWeatherStore';

export const WeatherProvider = ({ children }) => {
  return children;
};

export const useWeather = () => {
  return useWeatherStore();
};
