import { CurrentWeatherData, TemperatureUnit, WeatherInsights } from '../types/weather';

export const generateWeatherInsights = (
  current: CurrentWeatherData,
  unit: TemperatureUnit = 'C'
): WeatherInsights => {
  const tempInC = unit === 'F' ? (current.temp - 32) * (5 / 9) : current.temp;

  // 1. Clothing Advice
  let clothingTitle = 'Lightwear';
  let clothingBadge = 'Ideal';
  let clothingText = 'Breathable light clothes & stay hydrated.';

  if (tempInC <= 5) {
    clothingTitle = 'Heavy Winter';
    clothingBadge = 'Warm Layers';
    clothingText = 'Wear a heavy thermal jacket, scarf & gloves.';
  } else if (tempInC <= 15) {
    clothingTitle = 'Mild Layers';
    clothingBadge = 'Jacket Recommended';
    clothingText = 'A light sweater or windbreaker coat is recommended.';
  } else if (tempInC >= 32) {
    clothingTitle = 'Ultra Light';
    clothingBadge = 'Heat Shield';
    clothingText = 'Very hot outside! Wear breathable cotton & drink water.';
  }

  // 2. Outdoor Activity Score (1 to 10)
  let outdoorScore = 9;
  let outdoorText = 'Excellent conditions for outdoor workout & walking.';

  if (current.rainChance > 60 || current.precipitation > 2) {
    outdoorScore = 3;
    outdoorText = 'High rain probability. Indoor activities recommended.';
  } else if (current.windSpeed > 35) {
    outdoorScore = 4;
    outdoorText = 'Gusty winds outside. Take care when cycling or running.';
  } else if (tempInC > 35 || tempInC < 0) {
    outdoorScore = 5;
    outdoorText = 'Extreme temperatures. Avoid prolonged outdoor exposure.';
  }

  // 3. Rain Warning
  const isRainy = current.rainChance >= 40 || current.precipitation > 0.5;

  // 4. Sun Care
  let sunText = 'Normal UV levels. Enjoy the day!';
  let sunBadge = 'Low UV';

  if (current.uvIndex >= 6) {
    sunText = 'High UV — wear a hat & sunglasses in direct sunlight.';
    sunBadge = 'High UV';
  } else if (current.uvIndex >= 3) {
    sunText = 'Moderate UV — apply SPF 30+ sunscreen if outdoors.';
    sunBadge = 'Moderate';
  }

  return {
    clothing: {
      title: clothingTitle,
      badge: clothingBadge,
      text: clothingText,
    },
    outdoor: {
      score: outdoorScore,
      text: outdoorText,
    },
    rainAlert: {
      needed: isRainy,
      badge: isRainy ? `${current.rainChance}% Rain` : 'Clear Sky',
      text: isRainy ? 'Carry an umbrella or raincoat when heading out.' : 'No rain expected in the immediate forecast.',
    },
    sunCare: {
      title: 'Sun Care',
      badge: sunBadge,
      text: sunText,
    },
  };
};
