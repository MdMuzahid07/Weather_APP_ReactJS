import React from 'react';
import { useWeatherStore } from '../../../store/useWeatherStore';
import { Droplets, Wind, CloudRain, Sun, Thermometer, Umbrella } from 'lucide-react';

const TodayWeatherDetails = () => {
    const { weatherData, loading, unit, theme } = useWeatherStore();
    const current = weatherData?.current;

    if (loading) {
        return (
            <div className='mt-1 shrink-0'>
                <div className="flex justify-between items-center mb-3">
                    <div className="h-3.5 bg-slate-700/50 dark:bg-slate-800 rounded w-48"></div>
                    <div className="h-4 bg-slate-700/40 dark:bg-slate-800 rounded-full w-24"></div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className={`p-3 rounded-2xl border shimmer-card ${
                            theme === 'dark' ? 'glass-card border-slate-800/80' : 'bg-white/90 border-slate-200 shadow-xs'
                        }`}>
                            <div className="flex justify-between items-center mb-2">
                                <div className="h-3 bg-slate-700/50 dark:bg-slate-800 rounded w-16"></div>
                                <div className="w-7 h-7 rounded-lg bg-slate-700/40 dark:bg-slate-800"></div>
                            </div>
                            <div className="h-6 bg-slate-700/50 dark:bg-slate-800 rounded w-20 mx-auto my-1"></div>
                            <div className="w-full bg-slate-700/30 dark:bg-slate-800 rounded-full h-1.5 mt-2"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className='mt-1 shrink-0'>
            <h2 className='font-bold text-xs mb-3 flex items-center justify-between'>
                <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}>More details of today's weather</span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                    theme === 'dark'
                        ? 'text-sky-400 bg-sky-500/10 border-sky-500/20'
                        : 'text-blue-700 bg-blue-50 border-blue-200'
                }`}>
                    Real-time Metrics
                </span>
            </h2>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                {/* 1. Humidity */}
                <div className={`p-3 rounded-2xl border transition-all group ${
                    theme === 'dark'
                        ? 'glass-card border-slate-800/80 text-slate-100'
                        : 'bg-white/90 border-slate-200 text-slate-900 shadow-xs hover:shadow-md'
                }`}>
                    <div className='font-bold text-[11px] flex justify-between items-center text-slate-700 dark:text-slate-300'>
                        <span>Humidity</span>
                        <div className="w-7 h-7 rounded-lg bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Droplets size={16} className="animate-pulse" />
                        </div>
                    </div>
                    <h2 className='text-lg text-center font-extrabold my-1 text-slate-900 dark:text-slate-100'>
                        {current?.humidity ?? '--'}% <span className='text-[9px] font-bold text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 px-1.5 py-0.5 rounded uppercase ml-1'>{current?.humidityStatus}</span>
                    </h2>
                    <div className="w-full bg-slate-200 dark:bg-slate-800/80 rounded-full h-1.5 mt-2 overflow-hidden">
                        <div className="bg-sky-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${current?.humidity || 0}%` }}></div>
                    </div>
                </div>

                {/* 2. Wind */}
                <div className={`p-3 rounded-2xl border transition-all group ${
                    theme === 'dark'
                        ? 'glass-card border-slate-800/80 text-slate-100'
                        : 'bg-white/90 border-slate-200 text-slate-900 shadow-xs hover:shadow-md'
                }`}>
                    <div className='font-bold text-[11px] flex justify-between items-center text-slate-700 dark:text-slate-300'>
                        <span>Wind Speed</span>
                        <div className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Wind size={16} className="animate-rain" />
                        </div>
                    </div>
                    <h2 className='text-lg text-center font-extrabold my-1 text-slate-900 dark:text-slate-100'>
                        {current?.windSpeed ?? '--'} <span className='text-xs font-semibold text-slate-500 dark:text-slate-400'>{current?.windUnit}</span>
                    </h2>
                    <div className="w-full bg-slate-200 dark:bg-slate-800/80 rounded-full h-1.5 mt-2 overflow-hidden">
                        <div className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${Math.min((current?.windSpeed || 0) * 2, 100)}%` }}></div>
                    </div>
                </div>

                {/* 3. Precipitation */}
                <div className={`p-3 rounded-2xl border transition-all group ${
                    theme === 'dark'
                        ? 'glass-card border-slate-800/80 text-slate-100'
                        : 'bg-white/90 border-slate-200 text-slate-900 shadow-xs hover:shadow-md'
                }`}>
                    <div className='font-bold text-[11px] flex justify-between items-center text-slate-700 dark:text-slate-300'>
                        <span>Precipitation</span>
                        <div className="w-7 h-7 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <CloudRain size={16} className="animate-rain" />
                        </div>
                    </div>
                    <h2 className='text-lg text-center font-extrabold my-1 text-slate-900 dark:text-slate-100'>
                        {current?.precipitation ?? '0'} <span className='text-xs font-semibold text-slate-500 dark:text-slate-400'>{current?.precipUnit}</span>
                    </h2>
                    <div className="w-full bg-slate-200 dark:bg-slate-800/80 rounded-full h-1.5 mt-2 overflow-hidden">
                        <div className="bg-cyan-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${Math.min((current?.precipitation || 0) * 5, 100)}%` }}></div>
                    </div>
                </div>

                {/* 4. UV Index */}
                <div className={`p-3 rounded-2xl border transition-all group ${
                    theme === 'dark'
                        ? 'glass-card border-slate-800/80 text-slate-100'
                        : 'bg-white/90 border-slate-200 text-slate-900 shadow-xs hover:shadow-md'
                }`}>
                    <div className='font-bold text-[11px] flex justify-between items-center text-slate-700 dark:text-slate-300'>
                        <span>UV Index</span>
                        <div className="w-7 h-7 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Sun size={16} className="animate-spin-slow" />
                        </div>
                    </div>
                    <h2 className='text-lg text-center font-extrabold my-1 text-slate-900 dark:text-slate-100'>
                        {current?.uvIndex ?? '0'} <span className='text-[9px] font-bold text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 px-1.5 py-0.5 rounded uppercase ml-1'>{current?.uvStatus}</span>
                    </h2>
                    <div className="w-full bg-slate-200 dark:bg-slate-800/80 rounded-full h-1.5 mt-2 overflow-hidden">
                        <div className="bg-amber-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${Math.min((current?.uvIndex || 0) * 10, 100)}%` }}></div>
                    </div>
                </div>

                {/* 5. Feels Like */}
                <div className={`p-3 rounded-2xl border transition-all group ${
                    theme === 'dark'
                        ? 'glass-card border-slate-800/80 text-slate-100'
                        : 'bg-white/90 border-slate-200 text-slate-900 shadow-xs hover:shadow-md'
                }`}>
                    <div className='font-bold text-[11px] flex justify-between items-center text-slate-700 dark:text-slate-300'>
                        <span>Feels Like</span>
                        <div className="w-7 h-7 rounded-lg bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Thermometer size={16} className="animate-pulse" />
                        </div>
                    </div>
                    <h2 className='text-lg text-center font-extrabold my-1 text-slate-900 dark:text-slate-100'>
                        {current?.feelsLike ?? '--'}°<span className='text-xs font-semibold text-slate-500 dark:text-slate-400'>{unit}</span>
                    </h2>
                    <div className="w-full bg-slate-200 dark:bg-slate-800/80 rounded-full h-1.5 mt-2 overflow-hidden">
                        <div className="bg-orange-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${Math.min(Math.max((current?.feelsLike || 0), 0) * 2, 100)}%` }}></div>
                    </div>
                </div>

                {/* 6. Chance of Rain */}
                <div className={`p-3 rounded-2xl border transition-all group ${
                    theme === 'dark'
                        ? 'glass-card border-slate-800/80 text-slate-100'
                        : 'bg-white/90 border-slate-200 text-slate-900 shadow-xs hover:shadow-md'
                }`}>
                    <div className='font-bold text-[11px] flex justify-between items-center text-slate-700 dark:text-slate-300'>
                        <span>Chance of Rain</span>
                        <div className="w-7 h-7 rounded-lg bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Umbrella size={16} className="animate-float" />
                        </div>
                    </div>
                    <h2 className='text-lg text-center font-extrabold my-1 text-slate-900 dark:text-slate-100'>
                        {current?.rainChance ?? '0'}%
                    </h2>
                    <div className="w-full bg-slate-200 dark:bg-slate-800/80 rounded-full h-1.5 mt-2 overflow-hidden">
                        <div className="bg-teal-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${current?.rainChance || 0}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodayWeatherDetails;
