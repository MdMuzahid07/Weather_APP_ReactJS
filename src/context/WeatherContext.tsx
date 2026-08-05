import { useWeatherStore } from '../store/useWeatherStore';

export const useWeather = () => {
  return useWeatherStore();
};
