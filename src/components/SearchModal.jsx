import { MapPin, Navigation, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useWeather } from '../context/WeatherContext.tsx';

const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen, selectLocation, searchCities, fetchUserLocation } =
    useWeather();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      setSearching(true);
      const res = await searchCities(query);
      setResults(res);
      setSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, searchCities]);

  if (!isSearchOpen) return null;

  const popularCities = [
    { name: 'New York', country: 'United States', latitude: 40.7128, longitude: -74.006 },
    { name: 'London', country: 'United Kingdom', latitude: 51.5074, longitude: -0.1278 },
    { name: 'Tokyo', country: 'Japan', latitude: 35.6762, longitude: 139.6503 },
    { name: 'Paris', country: 'France', latitude: 48.8566, longitude: 2.3522 },
    { name: 'Dhaka', country: 'Bangladesh', latitude: 23.8103, longitude: 90.4125 },
    { name: 'Sydney', country: 'Australia', latitude: -33.8688, longitude: 151.2093 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fadeIn">
      <div className="glass-panel rounded-3xl p-6 w-full max-w-lg shadow-2xl transition-all border border-slate-800 text-slate-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <MapPin size={20} className="text-sky-400" /> Select Location
          </h3>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search city name (e.g. London, Tokyo)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 pl-11 rounded-2xl bg-slate-800/80 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400 text-slate-100 placeholder-slate-500 font-medium text-sm"
            autoFocus
          />
          <Search size={18} className="absolute left-3.5 top-3.5 text-slate-400" />
          {searching && (
            <span className="absolute right-3.5 top-3 text-xs text-sky-400 font-semibold animate-pulse">
              Searching...
            </span>
          )}
        </div>

        {/* GPS Button */}
        <button
          onClick={() => {
            fetchUserLocation();
            setIsSearchOpen(false);
          }}
          className="w-full mb-4 py-2.5 px-4 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 font-bold flex items-center justify-center gap-2 transition-all group text-sm"
        >
          <Navigation size={18} className="group-hover:rotate-45 transition-transform" />
          Use My Current Location (GPS)
        </button>

        {/* Search Results */}
        {results.length > 0 ? (
          <div className="max-h-60 overflow-y-auto space-y-1.5 pr-1">
            {results.map((city) => (
              <button
                key={city.id}
                onClick={() => selectLocation(city)}
                className="w-full text-left p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 flex justify-between items-center transition-colors border border-slate-800 hover:border-sky-500/30"
              >
                <div>
                  <p className="font-bold text-slate-100 text-sm">{city.name}</p>
                  <p className="text-xs text-slate-400">
                    {[city.admin1, city.country].filter(Boolean).join(', ')}
                  </p>
                </div>
                <span className="text-sky-400 font-bold text-xs">Select →</span>
              </button>
            ))}
          </div>
        ) : query.trim() ? (
          !searching && (
            <p className="text-center py-6 text-slate-400 text-sm">
              No cities found matching "{query}"
            </p>
          )
        ) : (
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Popular Cities
            </p>
            <div className="grid grid-cols-2 gap-2">
              {popularCities.map((city) => (
                <button
                  key={city.name}
                  onClick={() => selectLocation(city)}
                  className="text-left p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 text-slate-200 hover:text-sky-400 font-medium text-xs transition-all border border-slate-800"
                >
                  <p className="font-bold text-sm">{city.name}</p>
                  <p className="text-[11px] text-slate-400">{city.country}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
