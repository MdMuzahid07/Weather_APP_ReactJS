import React, { useState } from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';
import { useWeatherStore } from '../../store/useWeatherStore';
import { Thermometer, CloudRain, Sun } from 'lucide-react';

const CustomTooltip = ({ active, payload, label, unit, activeTab, theme }) => {
    if (active && payload && payload.length) {
        return (
            <div className={`p-3 rounded-xl shadow-2xl border text-xs font-semibold space-y-1 ${
                theme === 'dark'
                    ? 'bg-slate-900/95 border-slate-700/80 text-slate-100'
                    : 'bg-white/95 border-slate-200 text-slate-900 shadow-lg'
            }`}>
                <p className={`font-bold border-b pb-1 ${theme === 'dark' ? 'text-slate-400 border-slate-800' : 'text-slate-500 border-slate-100'}`}>{label}</p>
                {activeTab === 'temp' && (
                    <p className="text-sky-600 dark:text-sky-400 flex items-center justify-between gap-4">
                        <span>Temperature:</span>
                        <span className="font-extrabold">{payload[0]?.value}°{unit}</span>
                    </p>
                )}
                {activeTab === 'rain' && (
                    <p className="text-indigo-600 dark:text-indigo-400 flex items-center justify-between gap-4">
                        <span>Rain Chance:</span>
                        <span className="font-extrabold">{payload[0]?.value}%</span>
                    </p>
                )}
                {activeTab === 'uv' && (
                    <p className="text-amber-600 dark:text-amber-400 flex items-center justify-between gap-4">
                        <span>UV Index:</span>
                        <span className="font-extrabold">{payload[0]?.value}</span>
                    </p>
                )}
            </div>
        );
    }
    return null;
};

const Chart = () => {
    const { weatherData, loading, unit, theme } = useWeatherStore();
    const [activeTab, setActiveTab] = useState('temp');

    const hourlyData = weatherData?.hourly || [];

    if (loading) {
        return (
            <div className={`rounded-2xl p-4 mb-4 shrink-0 border shimmer-card ${
                theme === 'dark' ? 'glass-card border-slate-800/80' : 'bg-white/90 border-slate-200 shadow-xs'
            }`} style={{ width: '100%' }}>
                <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                    <div className="h-3.5 bg-slate-700/50 dark:bg-slate-800 rounded w-44"></div>
                    <div className="flex items-center gap-1">
                        <div className="w-20 h-6 bg-slate-700/40 dark:bg-slate-800 rounded-lg"></div>
                        <div className="w-16 h-6 bg-slate-700/40 dark:bg-slate-800 rounded-lg"></div>
                        <div className="w-12 h-6 bg-slate-700/40 dark:bg-slate-800 rounded-lg"></div>
                    </div>
                </div>
                <div className="h-[140px] w-full bg-slate-800/20 dark:bg-slate-800/40 rounded-xl flex items-end p-2 gap-2 border border-slate-800/30">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="flex-1 bg-slate-700/30 dark:bg-slate-700/40 rounded-t" style={{ height: `${30 + (i % 5) * 15}%` }}></div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={`rounded-2xl p-4 mb-4 shrink-0 border transition-all ${
            theme === 'dark'
                ? 'glass-card border-slate-800/80 text-slate-100'
                : 'bg-white/90 border-slate-200 text-slate-900 shadow-xs hover:shadow-md'
        }`} style={{ width: '100%' }}>
            <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                <div>
                    <h3 className={`text-xs font-bold tracking-tight ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                        24-Hour Forecast Breakdown
                    </h3>
                </div>

                {/* Tab Switcher */}
                <div className={`flex items-center gap-1 p-1 rounded-xl border ${
                    theme === 'dark' ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-100 border-slate-200'
                }`}>
                    <button
                        onClick={() => setActiveTab('temp')}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                            activeTab === 'temp'
                                ? 'bg-sky-500 text-white shadow-sm'
                                : theme === 'dark' ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        <Thermometer size={13} />
                        <span>Temp (°{unit})</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('rain')}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                            activeTab === 'rain'
                                ? 'bg-indigo-500 text-white shadow-sm'
                                : theme === 'dark' ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        <CloudRain size={13} />
                        <span>Rain (%)</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('uv')}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                            activeTab === 'uv'
                                ? 'bg-amber-500 text-white shadow-sm'
                                : theme === 'dark' ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        <Sun size={13} />
                        <span>UV</span>
                    </button>
                </div>
            </div>

            <div className="h-[140px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={hourlyData}
                        margin={{ top: 5, right: 5, bottom: -10, left: -25 }}
                    >
                        <defs>
                            <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0284C7" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#0284C7" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="uvGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#1E293B' : '#E2E8F0'} vertical={false} />
                        <XAxis dataKey="time" tick={{ fontSize: 10, fill: theme === 'dark' ? '#64748B' : '#475569' }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 10, fill: theme === 'dark' ? '#64748B' : '#475569' }} axisLine={false} tickLine={false} />
                        <Tooltip content={<CustomTooltip unit={unit} activeTab={activeTab} theme={theme} />} />

                        {activeTab === 'temp' && (
                            <Area
                                type="monotone"
                                dataKey="temp"
                                fill="url(#tempGradient)"
                                stroke="#0284C7"
                                strokeWidth={2.5}
                                name="temp"
                            />
                        )}
                        {activeTab === 'rain' && (
                            <Bar
                                dataKey="rainChance"
                                barSize={14}
                                fill="#6366F1"
                                radius={[4, 4, 0, 0]}
                                name="rainChance"
                            />
                        )}
                        {activeTab === 'uv' && (
                            <Area
                                type="monotone"
                                dataKey="uv"
                                fill="url(#uvGradient)"
                                stroke="#F59E0B"
                                strokeWidth={2.5}
                                name="uv"
                            />
                        )}
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Chart;
