import React from 'react';
import { useWeatherStore } from '../../store/useWeatherStore';
import { Sunrise, Sunset, MapPin } from 'lucide-react';

const WeatherLocation = () => {
    const { location, weatherData, loading } = useWeatherStore();

    const todayDateStr = new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    });

    const current = weatherData?.current;

    return (
        <div className='flex justify-between items-center mt-4'>
            <div>
                <h2 className='font-extrabold text-xl text-white drop-shadow-sm flex items-center gap-1.5'>
                    <MapPin size={18} className="text-sky-300 shrink-0" />
                    {loading ? (
                        <span className="inline-block w-32 h-6 bg-white/30 rounded animate-pulse"></span>
                    ) : (
                        <span className="truncate max-w-[170px]">{location.name}</span>
                    )}
                </h2>
                <p className='text-xs text-white/90 font-medium mt-1 pl-6'>Today, {todayDateStr}</p>
            </div>
            <div className="bg-black/20 backdrop-blur-md px-3 py-2 rounded-2xl border border-white/15 space-y-1">
                <div className='flex items-center text-xs text-white/95 gap-1.5' title="Sunrise">
                    <Sunrise size={15} className="text-amber-300 animate-pulse" />
                    <span className="font-semibold text-white">{current?.sunrise || '06:00'}</span>
                </div>
                <div className='flex items-center text-xs text-white/95 gap-1.5' title="Sunset">
                    <Sunset size={15} className="text-orange-300 animate-pulse" />
                    <span className="font-semibold text-white">{current?.sunset || '18:30'}</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherLocation;
