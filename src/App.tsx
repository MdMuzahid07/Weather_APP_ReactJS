import { useEffect } from 'react';
import Home from './pages/Home';
import { useWeatherStore } from './store/useWeatherStore';

function App() {
  const theme = useWeatherStore((state) => state.theme);

  useEffect(() => {
    const themeClass = theme === 'dark' ? 'dark-theme' : 'light-theme';
    document.documentElement.className = themeClass;
    document.body.className = themeClass;

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', theme === 'dark' ? '#242736' : '#DDE4F0');
    }
  }, [theme]);

  return (
    <main
      className={`${theme === 'dark' ? 'dark-theme' : 'light-theme'} bg-ambient-gradient min-h-screen w-full flex items-center justify-center p-0 sm:p-3 md:p-5 transition-colors duration-500`}
    >
      <Home />
    </main>
  );
}

export default App;
