import React, { useEffect } from 'react';
import Header from '../components/Dashboard/Header';
import WeatherLocation from '../components/WeatherView/WeatherLocation';
import WeatherViewHeader from '../components/WeatherView/WeatherViewHeader';
import WeatherSlider from '../components/WeatherView/WeatherSlider';
import WeatherSummaryCard from '../components/Dashboard/WeatherSummaryCard';
import TodayWeatherDetails from '../components/Dashboard/WeatherDetails/TodayWeatherDetails';
import Chart from '../components/Dashboard/Chart';
import SearchModal from '../components/SearchModal';
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
            <div className={`w-full max-w-6xl h-full md:h-[94vh] max-h-[920px] mx-auto flex flex-col md:flex-row glass-panel rounded-none md:rounded-3xl border-0 md:border shadow-2xl overflow-hidden transition-all duration-300 ${
                theme === 'dark' ? 'border-slate-800/80' : 'border-slate-200/80'
            }`}>
                {/* Left Sidebar (Hero Weather View with 100% Local Vector Pine Forest Mountain Landscape) */}
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
                    <WeatherSlider />
                </div>

                {/* Right Dashboard */}
                <div className={`w-full md:w-7/12 lg:w-8/12 p-4 md:p-5 flex flex-col justify-between overflow-y-auto md:overflow-hidden flex-1 no-scrollbar transition-colors ${
                    theme === 'dark'
                        ? 'bg-slate-900/40 text-slate-100'
                        : 'bg-slate-50/90 text-slate-900'
                }`}>
                    <Header />
                    <WeatherSummaryCard />
                    <Chart />
                    <TodayWeatherDetails />
                </div>
            </div>
        </>
    );
};

export default Home;
