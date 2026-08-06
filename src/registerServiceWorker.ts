import { registerSW } from 'virtual:pwa-register';

export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    registerSW({
      immediate: true,
      onOfflineReady() {
        console.log('[PWA] App is ready for offline usage');
      },
      onRegisterError(error) {
        console.error('[PWA] ServiceWorker registration error:', error);
      },
    });
  }
}
