import React from 'react';
import { useWeatherStore } from '../../store/useWeatherStore';
import { Search } from 'lucide-react';

const WeatherViewHeader: React.FC = () => {
    const { unit, toggleUnit, setIsSearchOpen } = useWeatherStore();

    return (
        <div className='flex justify-between items-center mb-4 gap-2'>
            {/* Searchbar button */}
            <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open Search City modal"
                className="flex-1 max-w-[210px] flex items-center gap-2 bg-black/30 hover:bg-black/40 text-white/90 border border-white/20 backdrop-blur-md px-3 py-2 rounded-2xl shadow-sm hover:shadow transition-all text-xs font-semibold cursor-pointer group focus-visible:ring-2 focus-visible:ring-sky-400"
            >
                <Search size={15} className="text-sky-300 group-hover:scale-110 transition-transform shrink-0" aria-hidden="true" />
                <span className="truncate">Search city...</span>
            </button>

            {/* Temperature Unit Switcher */}
            <div className='text-xs flex items-center font-bold text-white bg-black/30 backdrop-blur-md px-3 py-2 rounded-2xl border border-white/20 shadow-inner shrink-0'>
                <span className={unit === 'C' ? 'text-white font-black' : 'text-white/60'}>°C</span>
                <input
                    type="checkbox"
                    aria-label="Toggle temperature unit between Celsius and Fahrenheit"
                    className="toggle toggle-sm mx-1.5 accent-sky-400 cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400"
                    checked={unit === 'F'}
                    onChange={toggleUnit}
                />
                <span className={unit === 'F' ? 'text-white font-black' : 'text-white/60'}>°F</span>
            </div>
        </div>
    );
};

export default WeatherViewHeader;
