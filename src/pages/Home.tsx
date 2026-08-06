import { useEffect } from 'react';
import Chart from '../components/Dashboard/Chart';
import Header from '../components/Dashboard/Header';
import TodayWeatherDetails from '../components/Dashboard/WeatherDetails/TodayWeatherDetails';
import WeatherSummaryCard from '../components/Dashboard/WeatherSummaryCard';
import ErrorBoundary from '../components/ErrorBoundary';
import SearchModal from '../components/SearchModal';
import WeatherLocation from '../components/WeatherView/WeatherLocation';
import WeatherSlider from '../components/WeatherView/WeatherSlider';
import WeatherViewHeader from '../components/WeatherView/WeatherViewHeader';
import { useWeatherStore } from '../store/useWeatherStore';

const Home = () => {
  const fetchWeather = useWeatherStore((state) => state.fetchWeather);
  const theme = useWeatherStore((state) => state.theme);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return (
    <>
      <SearchModal />
      <div
        className={`w-full max-w-6xl h-full md:h-[94vh] max-h-[920px] mx-auto flex flex-col md:flex-row glass-panel rounded-none md:rounded-3xl border-0 md:border shadow-2xl overflow-hidden transition-all duration-300 ${
          theme === 'dark' ? 'border-slate-800/80' : 'border-slate-200/80'
        }`}
      >
        <div
          className="w-full md:w-5/12 lg:w-4/12 p-6 text-white flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800/80 shrink-0 overflow-hidden shadow-xl"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.35), rgba(15, 23, 42, 0.85)), url('/hero-landscape.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <WeatherViewHeader />
          <WeatherLocation />
          <ErrorBoundary fallbackTitle="Forecast Slider Unavailable">
            <WeatherSlider />
          </ErrorBoundary>
        </div>

        <div
          className={`w-full md:w-7/12 lg:w-8/12 flex flex-col min-h-0 flex-1 overflow-hidden transition-colors ${
            theme === 'dark' ? 'bg-slate-900/40 text-slate-100' : 'bg-slate-50/90 text-slate-900'
          }`}
        >
          <Header />
          <div className="flex-1 min-h-0 overflow-y-auto px-4 md:px-5 pt-4 pb-4 md:pb-5 flex flex-col gap-4">
            <ErrorBoundary fallbackTitle="Daily Insights Unavailable">
              <WeatherSummaryCard />
            </ErrorBoundary>
            <ErrorBoundary fallbackTitle="24-Hour Forecast Chart Unavailable">
              <Chart />
            </ErrorBoundary>
            <ErrorBoundary fallbackTitle="Today's Weather Details Unavailable">
              <TodayWeatherDetails />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
