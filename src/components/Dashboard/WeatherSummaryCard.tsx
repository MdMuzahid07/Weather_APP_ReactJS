import { Activity, Compass, Shirt, SunMedium, Umbrella } from 'lucide-react';
import { generateWeatherInsights } from '../../services/weatherInsights';
import { useWeatherStore } from '../../store/useWeatherStore';

const WeatherSummaryCard = () => {
  const { weatherData, loading, unit, theme } = useWeatherStore();
  const current = weatherData?.current;

  if (loading || !current) {
    return (
      <div
        className={`rounded-2xl p-4 mb-4 shrink-0 border shimmer-card ${
          theme === 'dark'
            ? 'glass-card border-slate-800/80'
            : 'bg-white/90 border-slate-200 shadow-xs'
        }`}
      >
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-slate-700/50 dark:bg-slate-800"></div>
            <div className="h-3.5 bg-slate-700/50 dark:bg-slate-800 rounded w-28"></div>
          </div>
          <div className="h-4 bg-slate-700/40 dark:bg-slate-800 rounded-full w-24"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl border flex items-start gap-3 ${
                theme === 'dark'
                  ? 'bg-slate-800/40 border-slate-700/50'
                  : 'bg-slate-100/70 border-slate-200/80'
              }`}
            >
              <div className="w-9 h-9 rounded-xl bg-slate-700/50 dark:bg-slate-800 shrink-0"></div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-center">
                  <div className="h-3 bg-slate-700/50 dark:bg-slate-800 rounded w-16"></div>
                  <div className="h-3 bg-slate-700/40 dark:bg-slate-800 rounded w-10"></div>
                </div>
                <div className="h-2.5 bg-slate-700/40 dark:bg-slate-800 rounded w-full"></div>
                <div className="h-2.5 bg-slate-700/30 dark:bg-slate-800/80 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const insights = generateWeatherInsights(current, unit);

  return (
    <div
      className={`rounded-2xl p-4 mb-4 shrink-0 transition-all border ${
        theme === 'dark'
          ? 'glass-card border-slate-800/80 text-slate-100'
          : 'bg-white/90 border-slate-200/80 text-slate-900 shadow-sm hover:shadow-md'
      }`}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <Compass size={17} className="text-sky-400 animate-spin-slow" />
          <h3
            className={`text-xs font-bold tracking-tight ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}
          >
            Smart Daily Insights
          </h3>
        </div>
        <span
          className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
            theme === 'dark'
              ? 'text-sky-400 bg-sky-500/10 border border-sky-500/20'
              : 'text-blue-700 bg-blue-50 border border-blue-200'
          }`}
        >
          Actionable Advice
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div
          className={`p-3 rounded-xl border flex items-start gap-3 transition-colors ${
            theme === 'dark'
              ? 'bg-slate-800/40 border-slate-700/50 hover:border-amber-500/30'
              : 'bg-amber-50/70 border-amber-200/80 hover:bg-amber-50'
          }`}
        >
          <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
            <Shirt size={18} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center justify-between gap-1">
              <p
                className={`text-xs font-bold truncate ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}
              >
                {insights.clothing.title}
              </p>
              <span className="text-[9px] font-bold text-amber-800 dark:text-amber-300 bg-amber-200/80 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/30 px-1.5 py-0.5 rounded shrink-0">
                {insights.clothing.badge}
              </span>
            </div>
            <p
              className={`text-[11px] font-medium mt-1 leading-tight line-clamp-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
            >
              {insights.clothing.text}
            </p>
          </div>
        </div>

        <div
          className={`p-3 rounded-xl border flex items-start gap-3 transition-colors ${
            theme === 'dark'
              ? 'bg-slate-800/40 border-slate-700/50 hover:border-sky-500/30'
              : 'bg-blue-50/70 border-blue-200/80 hover:bg-blue-50'
          }`}
        >
          <div className="w-9 h-9 rounded-xl bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
            <Activity size={18} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center justify-between gap-1">
              <p
                className={`text-xs font-bold truncate ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}
              >
                Outdoor Index
              </p>
              <span className="text-[9px] font-bold text-sky-800 dark:text-sky-300 bg-sky-200/80 dark:bg-sky-500/20 border border-sky-300 dark:border-sky-500/30 px-1.5 py-0.5 rounded shrink-0">
                {insights.outdoor.score}/10
              </span>
            </div>
            <p
              className={`text-[11px] font-medium mt-1 leading-tight line-clamp-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
            >
              {insights.outdoor.text}
            </p>
          </div>
        </div>

        <div
          className={`p-3 rounded-xl border flex items-start gap-3 transition-colors ${
            theme === 'dark'
              ? 'bg-slate-800/40 border-slate-700/50 hover:border-teal-500/30'
              : 'bg-teal-50/70 border-teal-200/80 hover:bg-teal-50'
          }`}
        >
          <div className="w-9 h-9 rounded-xl bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
            {insights.rainAlert.needed ? <Umbrella size={18} /> : <SunMedium size={18} />}
          </div>
          <div className="min-w-0">
            <div className="flex items-center justify-between gap-1">
              <p
                className={`text-xs font-bold truncate ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}
              >
                {insights.rainAlert.needed ? 'Rain Warning' : 'Sun Care'}
              </p>
              <span
                className={`text-[9px] font-bold px-1.5 py-0.5 rounded border shrink-0 ${
                  insights.rainAlert.needed
                    ? 'bg-rose-100 dark:bg-rose-500/20 text-rose-800 dark:text-rose-300 border-rose-300 dark:border-rose-500/30'
                    : 'bg-teal-200/80 dark:bg-teal-500/20 text-teal-800 dark:text-teal-300 border-teal-300 dark:border-teal-500/30'
                }`}
              >
                {insights.rainAlert.badge}
              </span>
            </div>
            <p
              className={`text-[11px] font-medium mt-1 leading-tight line-clamp-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
            >
              {insights.rainAlert.needed ? insights.rainAlert.text : insights.sunCare.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherSummaryCard;
