import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudRainWind,
  CloudSnow,
  CloudSun,
  LucideIcon,
  Snowflake,
  Sun,
} from 'lucide-react';
import { WmoCondition } from '../types/weather';

const iconMap: Record<string, LucideIcon> = {
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

interface WeatherIconProps {
  condition?: WmoCondition;
  className?: string;
  size?: number;
}

const WeatherIcon = ({ condition, className = '', size = 24 }: WeatherIconProps) => {
  if (!condition) {
    return <Sun className={`text-amber-400 animate-spin-slow ${className}`} size={size} />;
  }

  const IconComponent = iconMap[condition.iconName] || Sun;
  const colorClass = condition.color || 'text-amber-400';

  return (
    <IconComponent
      size={size}
      className={`inline-block stroke-[2.2] transition-transform ${colorClass} ${className}`}
    />
  );
};

export default WeatherIcon;
