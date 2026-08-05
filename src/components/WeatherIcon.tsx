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
  LucideProps,
} from 'lucide-react';
import { WmoCondition } from '../types/weather';

interface WeatherIconProps {
  condition?: WmoCondition | null;
  className?: string;
  size?: number;
}

const iconMap: Record<string, React.FC<LucideProps>> = {
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

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, className = '', size = 24 }) => {
  if (!condition) {
    return <Sun className={`text-amber-400 animate-spin-slow ${className}`} size={size} aria-label="Sunny weather icon" />;
  }

  const IconComponent = iconMap[condition.iconName] || Sun;
  const colorClass = condition.color || 'text-amber-400';

  return (
    <IconComponent
      size={size}
      aria-label={`${condition.label} weather condition`}
      className={`inline-block stroke-[2.2] transition-transform ${colorClass} motion-safe:animate-spin-slow ${className}`}
    />
  );
};

export default WeatherIcon;
