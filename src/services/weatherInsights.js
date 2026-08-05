/**
 * Decision-Oriented Weather Insights Engine (2026 UX Standard)
 * Converts raw weather data into actionable human advice.
 */

export const generateWeatherInsights = (current, unit = 'C') => {
  if (!current) return null;

  const tempInC = unit === 'F' ? (current.temp - 32) * (5 / 9) : current.temp;

  // Clothing Recommendation
  let clothing = {
    title: 'What to Wear',
    text: 'Light cotton shirt & shorts',
    badge: 'Lightwear',
    icon: 'Shirt',
  };
  if (tempInC < 5) {
    clothing = { title: 'What to Wear', text: 'Heavy winter coat, gloves & scarf', badge: 'Warm Layer', icon: 'Shirt' };
  } else if (tempInC < 15) {
    clothing = { title: 'What to Wear', text: 'Jacket or warm sweater recommended', badge: 'Jacket', icon: 'Shirt' };
  } else if (tempInC < 25) {
    clothing = { title: 'What to Wear', text: 'Comfortable t-shirt & jeans', badge: 'Casual', icon: 'Shirt' };
  } else {
    clothing = { title: 'What to Wear', text: 'Breathable light clothes & stay hydrated', badge: 'Lightwear', icon: 'Shirt' };
  }

  // Rain / Umbrella Recommendation
  let rainAlert = {
    title: 'Rain Protection',
    text: 'No rain expected — enjoy the sunshine!',
    needed: false,
    badge: 'Dry',
  };
  if (current.rainChance > 60 || current.precipitation > 2) {
    rainAlert = {
      title: 'Rain Protection',
      text: `High rain risk (${current.rainChance}%) — carry an umbrella!`,
      needed: true,
      badge: 'Umbrella Needed',
    };
  } else if (current.rainChance > 30) {
    rainAlert = {
      title: 'Rain Protection',
      text: `Slight rain chance (${current.rainChance}%) — keep a jacket handy`,
      needed: false,
      badge: 'Possible Rain',
    };
  }

  // Outdoor Activity Score (0-10)
  let outdoorScore = 9;
  let outdoorText = 'Excellent conditions for outdoor workout & walking!';
  if (current.rainChance > 70 || current.precipitation > 5) {
    outdoorScore = 3;
    outdoorText = 'Heavy rain expected — indoor activities recommended';
  } else if (tempInC > 35) {
    outdoorScore = 4;
    outdoorText = 'Extreme heat — avoid strenuous outdoor activities midday';
  } else if (tempInC < 0) {
    outdoorScore = 4;
    outdoorText = 'Freezing temperature — limit prolonged exposure outside';
  } else if (current.windSpeed > 35) {
    outdoorScore = 5;
    outdoorText = 'High wind speeds — take extra caution outdoors';
  }

  // UV Sun Care
  let sunCare = {
    title: 'Sun Care',
    text: 'Low UV index — no extra sun protection needed',
    level: 'Low',
  };
  if (current.uvIndex >= 8) {
    sunCare = { title: 'Sun Care', text: 'Very High UV! Apply SPF 50+ sunscreen & wear sunglasses', level: 'Very High' };
  } else if (current.uvIndex >= 6) {
    sunCare = { title: 'Sun Care', text: 'High UV — wear a hat & sunglasses in direct sunlight', level: 'High' };
  } else if (current.uvIndex >= 3) {
    sunCare = { title: 'Sun Care', text: 'Moderate UV — sunscreen recommended for long outdoor stay', level: 'Moderate' };
  }

  return {
    clothing,
    rainAlert,
    outdoor: { score: outdoorScore, text: outdoorText },
    sunCare,
  };
};
