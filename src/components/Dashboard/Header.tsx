import { MapPin, Moon, Navigation, ShieldCheck, Sun } from 'lucide-react';
import { useWeatherStore } from '../../store/useWeatherStore';

const Header = () => {
  const { location, fetchUserLocation, theme, toggleTheme } = useWeatherStore();

  return (
    <header
      className={`flex flex-wrap justify-between items-center px-4 md:px-5 pt-4 pb-3 mb-0 gap-2 shrink-0 border-b transition-colors ${
        theme === 'dark'
          ? 'border-slate-700/50 bg-slate-900/60'
          : 'border-slate-200/80 bg-slate-50/95'
      }`}
    >
      <div>
        <div className="flex items-center gap-2">
          <h2
            className={`font-extrabold text-lg md:text-xl tracking-tight ${theme === 'dark' ? 'text-slate-100' : 'text-gray-900'}`}
          >
            Weather Dashboard
          </h2>
          <span
            className={`font-bold text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
              theme === 'dark'
                ? 'text-sky-400 bg-sky-500/10 border border-sky-500/20'
                : 'text-blue-700 bg-blue-100 border border-blue-200'
            }`}
          >
            <MapPin size={12} />
            {location.name}
            {location.country ? `, ${location.country}` : ''}
          </span>
        </div>
        <p
          className={`text-xs font-medium flex items-center gap-1.5 mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-500'}`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Live Open-Meteo API Sync</span>
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center shadow-sm ${
            theme === 'dark'
              ? 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-amber-300 hover:text-amber-200'
              : 'bg-white hover:bg-gray-100 border-gray-200 text-indigo-600 hover:text-indigo-700'
          }`}
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? <Sun size={16} className="animate-spin-slow" /> : <Moon size={16} />}
        </button>

        <a
          href="https://open-meteo.com/en/pricing"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
            theme === 'dark'
              ? 'bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/30 text-emerald-400'
              : 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200 text-emerald-700'
          }`}
          title="Open-Meteo Free API: 10,000 calls/day for non-commercial use"
        >
          <ShieldCheck size={14} />
          <span>Free Tier (10k/day)</span>
        </a>

        <button
          onClick={fetchUserLocation}
          className={`p-2 rounded-xl border transition-all cursor-pointer group shadow-sm ${
            theme === 'dark'
              ? 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-sky-400'
              : 'bg-white hover:bg-gray-50 border-gray-200 text-blue-600'
          }`}
          title="Use Current GPS Location"
        >
          <Navigation
            size={15}
            className="group-hover:rotate-45 transition-transform duration-300"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
