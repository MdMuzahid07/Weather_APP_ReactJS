import { CloudRain, Droplets, Sun, Thermometer, Umbrella, Wind } from 'lucide-react';
import React from 'react';
import { useWeatherStore } from '../../../store/useWeatherStore';

export const TodayWeatherDetails: React.FC = () => {
  const { weatherData, loading, unit, theme } = useWeatherStore();
  const current = weatherData?.current;

  if (loading) {
    return (
      <div className="mt-1 shrink-0">
        <div className="flex justify-between items-center mb-3">
          <div className="h-3.5 bg-slate-700/50 rounded w-48 animate-pulse"></div>
          <div className="h-4 bg-slate-700/40 rounded-full w-24 animate-pulse"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`p-3 rounded-2xl border shimmer-card ${
                theme === 'dark'
                  ? 'glass-card border-slate-800/80'
                  : 'bg-white/90 border-slate-200 shadow-xs'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="h-3 bg-slate-700/50 rounded w-16"></div>
                <div className="w-7 h-7 rounded-lg bg-slate-700/40"></div>
              </div>
              <div className="h-6 bg-slate-700/50 rounded w-20 mx-auto my-1"></div>
              <div className="w-full bg-slate-700/30 rounded-full h-1.5 mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const isDark = theme === 'dark';

  return (
    <div className="mt-1 shrink-0">
      <h2 className="font-bold text-xs mb-3 flex items-center justify-between">
        <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>
          More details of today's weather
        </span>
        <span
          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
            isDark
              ? 'text-sky-400 bg-sky-500/10 border-sky-500/20'
              : 'text-blue-700 bg-blue-50 border-blue-200'
          }`}
        >
          Real-time Metrics
        </span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {/* 1. Humidity */}
        <div
          className={`p-3 rounded-2xl border transition-all group ${
            isDark
              ? 'glass-card border-slate-800/80 text-slate-100'
              : 'bg-white/90 border-slate-200 text-slate-900 shadow-xs hover:shadow-md'
          }`}
        >
          <div
            className={`font-bold text-[11px] flex justify-between items-center ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <span>Humidity</span>
            <div className="w-7 h-7 rounded-lg bg-sky-500/15 text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Droplets size={16} className="animate-pulse" />
            </div>
          </div>
          <h3
            className={`text-lg text-center font-extrabold my-1 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            {current?.humidity ?? '--'}%{' '}
            <span
              className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ml-1 ${
                isDark
                  ? 'text-sky-400 bg-sky-500/15 border border-sky-500/30'
                  : 'text-sky-700 bg-sky-100 border border-sky-200'
              }`}
            >
              {current?.humidityStatus}
            </span>
          </h3>
          <div
            className={`w-full rounded-full h-1.5 mt-2 overflow-hidden ${
              isDark ? 'bg-slate-800' : 'bg-slate-200'
            }`}
          >
            <div
              className="bg-sky-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${current?.humidity || 0}%` }}
            ></div>
          </div>
        </div>

        {/* 2. Wind Speed */}
        <div
          className={`p-3 rounded-2xl border transition-all group ${
            isDark
              ? 'glass-card border-slate-800/80 text-slate-100'
              : 'bg-white/90 border-slate-200 text-slate-900 shadow-xs hover:shadow-md'
          }`}
        >
          <div
            className={`font-bold text-[11px] flex justify-between items-center ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <span>Wind Speed</span>
            <div className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Wind size={16} />
            </div>
          </div>
          <h3
            className={`text-lg text-center font-extrabold my-1 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            {current?.windSpeed ?? '--'}{' '}
            <span
              className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
            >
              {current?.windUnit}
            </span>
          </h3>
          <div
            className={`w-full rounded-full h-1.5 mt-2 overflow-hidden ${
              isDark ? 'bg-slate-800' : 'bg-slate-200'
            }`}
          >
            <div
              className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((current?.windSpeed || 0) * 2, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* 3. Precipitation */}
        <div
          className={`p-3 rounded-2xl border transition-all group ${
            isDark
              ? 'glass-card border-slate-800/80 text-slate-100'
              : 'bg-white/90 border-slate-200 text-slate-900 shadow-xs hover:shadow-md'
          }`}
        >
          <div
            className={`font-bold text-[11px] flex justify-between items-center ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <span>Precipitation</span>
            <div className="w-7 h-7 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <CloudRain size={16} />
            </div>
          </div>
          <h3
            className={`text-lg text-center font-extrabold my-1 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            {current?.precipitation ?? '0'}{' '}
            <span
              className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
            >
              {current?.precipUnit}
            </span>
          </h3>
          <div
            className={`w-full rounded-full h-1.5 mt-2 overflow-hidden ${
              isDark ? 'bg-slate-800' : 'bg-slate-200'
            }`}
          >
            <div
              className="bg-cyan-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((current?.precipitation || 0) * 5, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* 4. UV Index */}
        <div
          className={`p-3 rounded-2xl border transition-all group ${
            isDark
              ? 'glass-card border-slate-800/80 text-slate-100'
              : 'bg-white/90 border-slate-200 text-slate-900 shadow-xs hover:shadow-md'
          }`}
        >
          <div
            className={`font-bold text-[11px] flex justify-between items-center ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <span>UV Index</span>
            <div className="w-7 h-7 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sun size={16} className="motion-safe:animate-spin-slow" />
            </div>
          </div>
          <h3
            className={`text-lg text-center font-extrabold my-1 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            {current?.uvIndex ?? '0'}{' '}
            <span
              className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ml-1 ${
                isDark
                  ? 'text-amber-400 bg-amber-500/15 border border-amber-500/30'
                  : 'text-amber-700 bg-amber-100 border border-amber-200'
              }`}
            >
              {current?.uvStatus}
            </span>
          </h3>
          <div
            className={`w-full rounded-full h-1.5 mt-2 overflow-hidden ${
              isDark ? 'bg-slate-800' : 'bg-slate-200'
            }`}
          >
            <div
              className="bg-amber-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((current?.uvIndex || 0) * 10, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* 5. Feels Like */}
        <div
          className={`p-3 rounded-2xl border transition-all group ${
            isDark
              ? 'glass-card border-slate-800/80 text-slate-100'
              : 'bg-white/90 border-slate-200 text-slate-900 shadow-xs hover:shadow-md'
          }`}
        >
          <div
            className={`font-bold text-[11px] flex justify-between items-center ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <span>Feels Like</span>
            <div className="w-7 h-7 rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Thermometer size={16} className="animate-pulse" />
            </div>
          </div>
          <h3
            className={`text-lg text-center font-extrabold my-1 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            {current?.feelsLike ?? '--'}°
            <span
              className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
            >
              {unit}
            </span>
          </h3>
          <div
            className={`w-full rounded-full h-1.5 mt-2 overflow-hidden ${
              isDark ? 'bg-slate-800' : 'bg-slate-200'
            }`}
          >
            <div
              className="bg-orange-500 h-1.5 rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(Math.max(current?.feelsLike || 0, 0) * 2, 100)}%`,
              }}
            ></div>
          </div>
        </div>

        {/* 6. Chance of Rain */}
        <div
          className={`p-3 rounded-2xl border transition-all group ${
            isDark
              ? 'glass-card border-slate-800/80 text-slate-100'
              : 'bg-white/90 border-slate-200 text-slate-900 shadow-xs hover:shadow-md'
          }`}
        >
          <div
            className={`font-bold text-[11px] flex justify-between items-center ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <span>Chance of Rain</span>
            <div className="w-7 h-7 rounded-lg bg-teal-500/15 text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Umbrella size={16} />
            </div>
          </div>
          <h3
            className={`text-lg text-center font-extrabold my-1 ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            {current?.rainChance ?? '0'}%
          </h3>
          <div
            className={`w-full rounded-full h-1.5 mt-2 overflow-hidden ${
              isDark ? 'bg-slate-800' : 'bg-slate-200'
            }`}
          >
            <div
              className="bg-teal-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${current?.rainChance || 0}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayWeatherDetails;
