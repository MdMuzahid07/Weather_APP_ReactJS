import { Carousel } from 'nuka-carousel';
import { useWeatherStore } from '../../store/useWeatherStore';
import WeatherIcon from '../WeatherIcon';

const WeatherSlider = () => {
  const { weatherData, loading, unit } = useWeatherStore();

  const current = weatherData?.current;
  const daily = weatherData?.daily || [];

  if (loading) {
    return (
      <div className="flex flex-col justify-between flex-1 mt-6 text-white animate-pulse">
        <div className="my-auto py-2">
          <div className="flex items-baseline justify-between mb-2">
            <div>
              <div className="w-36 h-14 bg-white/20 backdrop-blur-md rounded-2xl mb-2"></div>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md"></div>
                <div className="w-28 h-5 bg-white/20 backdrop-blur-md rounded-lg"></div>
              </div>
            </div>
            <div className="text-right bg-black/25 backdrop-blur-md px-3 py-2 rounded-2xl border border-white/15 w-24 h-14 flex flex-col justify-between">
              <div className="w-12 h-2.5 bg-white/25 rounded ml-auto"></div>
              <div className="w-14 h-5 bg-white/25 rounded ml-auto"></div>
            </div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-3 border border-white/15 shadow-xl shrink-0 mt-auto">
          <div className="flex justify-between items-center mb-2 px-1">
            <div className="w-28 h-3.5 bg-white/25 rounded"></div>
            <div className="w-10 h-3 bg-white/20 rounded"></div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white/15 backdrop-blur-sm p-2.5 rounded-xl border border-white/15 flex flex-col items-center"
              >
                <div className="w-8 h-3 bg-white/25 rounded mb-2"></div>
                <div className="w-6 h-6 rounded-full bg-white/25 my-1"></div>
                <div className="w-10 h-2.5 bg-white/20 rounded my-1"></div>
                <div className="w-10 h-3 bg-white/25 rounded mt-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between flex-1 mt-6 text-white">
      <div className="my-auto py-2">
        <div className="flex items-baseline justify-between mb-2">
          <div>
            <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg leading-none">
              {current?.temp ?? '--'}°
              <span className="text-3xl font-normal text-white/80">{unit}</span>
            </h2>
            <div className="text-base font-bold flex items-center gap-2 mt-3 text-white drop-shadow-sm">
              <WeatherIcon condition={current?.condition} size={32} />
              <span className="text-lg">{current?.condition?.label || 'Clear'}</span>
            </div>
          </div>
          <div className="text-right bg-black/20 backdrop-blur-md px-3 py-2 rounded-2xl border border-white/15">
            <p className="text-[11px] font-medium text-white/70">Feels like</p>
            <p className="text-xl font-extrabold text-white">
              {current?.feelsLike}°{unit}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black/30 backdrop-blur-md rounded-2xl p-3 border border-white/15 shadow-xl shrink-0 mt-auto">
        <div className="flex justify-between items-center mb-2 px-1">
          <p className="text-[11px] font-bold text-white/90 uppercase tracking-wider">
            7-Day Daily Forecast
          </p>
          <span className="text-[10px] font-semibold text-white/60">Swipe →</span>
        </div>
        <Carousel showDots={false} showArrows="hover" wrapMode="wrap">
          {daily.map((day, index) => (
            <div key={day.date || index} className="px-1 text-center select-none">
              <div className="bg-white/15 hover:bg-white/25 transition-all p-2.5 rounded-xl backdrop-blur-sm border border-white/15 flex flex-col items-center">
                <p className="text-xs font-bold text-white">{day.dayName}</p>
                <div className="my-1.5">
                  <WeatherIcon condition={day.condition} size={24} />
                </div>
                <p className="text-[10px] font-medium text-white/90 truncate w-full">
                  {day.condition?.label}
                </p>
                <div className="mt-1.5 flex justify-center items-center gap-1.5 text-xs font-bold">
                  <span className="text-white">{day.tempMax}°</span>
                  <span className="text-white/60 text-[10px]">{day.tempMin}°</span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default WeatherSlider;
