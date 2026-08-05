import React from 'react';
import {
  Sun,
  CloudSun,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  Snowflake,
  CloudRainWind,
  CloudSnow,
  CloudLightning,
} from 'lucide-react';

const iconMap = {
  Sun,
  CloudSun,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  Snowflake,
  CloudRainWind,
  CloudSnow,
  CloudLightning,
};

const WeatherIcon = ({ condition, className = '', size = 24 }) => {
  if (!condition) {
    return <Sun className={`text-amber-400 animate-spin-slow ${className}`} size={size} />;
  }

  const IconComponent = iconMap[condition.iconName] || Sun;
  const animationClass = condition.animation || '';
  const colorClass = condition.color || 'text-amber-400';

  return (
    <IconComponent
      size={size}
      className={`inline-block stroke-[2.2] transition-transform ${colorClass} ${animationClass} ${className}`}
    />
  );
};

export default WeatherIcon;
