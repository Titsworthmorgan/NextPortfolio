import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const createEmotionCache = () => {
  return createCache({
    key: 'next', // Use a unique key
    prepend: true // Appends styles at the beginning of the head tag in HTML
  });
};

const clientSideEmotionCache = createEmotionCache();

const ThemeRegistry = ({ children, emotionCache = clientSideEmotionCache }) => (
  <CacheProvider value={emotionCache}>
    {children}
  </CacheProvider>
);

export default ThemeRegistry;
export { createEmotionCache };
