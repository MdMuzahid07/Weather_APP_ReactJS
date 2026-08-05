import { MapPin, Moon, Navigation, Search, ShieldCheck, Sun, WifiOff } from 'lucide-react';
import React from 'react';
import { useWeatherStore } from '../../store/useWeatherStore';

const Header: React.FC = () => {
  const {
    location,
    setIsSearchOpen,
    fetchUserLocation,
    theme,
    toggleTheme,
    isOffline,
    weatherData,
  } = useWeatherStore();

  return (
    <header className="flex flex-wrap justify-between items-center mb-4 gap-2 shrink-0 border-b border-slate-700/50 pb-3 transition-colors">
      <div>
        <div className="flex items-center gap-2">
          <h1
            className={`font-extrabold text-lg md:text-xl tracking-tight ${theme === 'dark' ? 'text-slate-100' : 'text-gray-900'}`}
          >
            Weather Dashboard
          </h1>
          <span
            className={`font-bold text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
              theme === 'dark'
                ? 'text-sky-400 bg-sky-500/10 border border-sky-500/20'
                : 'text-blue-700 bg-blue-100 border border-blue-200'
            }`}
          >
            <MapPin size={12} aria-hidden="true" />
            {location.name}
            {location.country ? `, ${location.country}` : ''}
          </span>
        </div>

        {/* Offline vs Online Indicator */}
        {isOffline ? (
          <p
            className="text-xs font-semibold flex items-center gap-1.5 mt-1 text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md w-fit"
            aria-live="polite"
          >
            <WifiOff size={13} className="animate-pulse" />
            <span>Offline Mode (Cached at {weatherData?.fetchedAt || 'recent sync'})</span>
          </p>
        ) : (
          <p
            className={`text-xs font-medium flex items-center gap-1.5 mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}
            aria-live="polite"
          >
            <span
              className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
              aria-hidden="true"
            ></span>
            <span>Live Open-Meteo API Sync</span>
          </p>
        )}
      </div>

      <div className="flex items-center gap-2">
        {/* Dark / Light Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center shadow-sm focus-visible:ring-2 focus-visible:ring-sky-400 ${
            theme === 'dark'
              ? 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-amber-300 hover:text-amber-200'
              : 'bg-white hover:bg-gray-100 border-gray-200 text-indigo-600 hover:text-indigo-700'
          }`}
        >
          {theme === 'dark' ? (
            <Sun size={16} className="motion-safe:animate-spin-slow" aria-hidden="true" />
          ) : (
            <Moon size={16} aria-hidden="true" />
          )}
        </button>

        {/* Free API Usage Limit Badge */}
        <a
          href="https://open-meteo.com/en/pricing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open-Meteo Free API Limit details"
          className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border focus-visible:ring-2 focus-visible:ring-sky-400 ${
            theme === 'dark'
              ? 'bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/30 text-emerald-400'
              : 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200 text-emerald-700'
          }`}
        >
          <ShieldCheck size={14} aria-hidden="true" />
          <span>Free Tier (10k/day)</span>
        </a>

        {/* Quick Search Button */}
        <button
          onClick={() => setIsSearchOpen(true)}
          aria-label="Search City Modal"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer group shadow-sm focus-visible:ring-2 focus-visible:ring-sky-400 ${
            theme === 'dark'
              ? 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-200 hover:text-white'
              : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-700 hover:text-blue-600'
          }`}
        >
          <Search
            size={14}
            className="text-sky-500 group-hover:scale-110 transition-transform"
            aria-hidden="true"
          />
          <span>Search City</span>
        </button>

        {/* GPS Location Button */}
        <button
          onClick={fetchUserLocation}
          aria-label="Use Current GPS Location"
          className={`p-2 rounded-xl border transition-all cursor-pointer group shadow-sm focus-visible:ring-2 focus-visible:ring-sky-400 ${
            theme === 'dark'
              ? 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-sky-400'
              : 'bg-white hover:bg-gray-50 border-gray-200 text-blue-600'
          }`}
        >
          <Navigation
            size={15}
            className="group-hover:rotate-45 transition-transform duration-300"
            aria-hidden="true"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
