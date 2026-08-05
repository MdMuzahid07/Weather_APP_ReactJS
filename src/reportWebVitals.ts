import { onCLS, onINP, onLCP, onFCP, onTTFB, Metric } from 'web-vitals';

export const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
  const handleMetric = onPerfEntry || ((metric: Metric) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vitals] ${metric.name}:`, metric.value, metric);
    }
  });

  onCLS(handleMetric);
  onINP(handleMetric);
  onLCP(handleMetric);
  onFCP(handleMetric);
  onTTFB(handleMetric);
};

export default reportWebVitals;
