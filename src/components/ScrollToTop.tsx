import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useLayoutEffect(() => {
    // Disable browser automatic restoration so we control scroll behavior explicitly
    if ('scrollRestoration' in history) {
      try {
        history.scrollRestoration = 'manual';
      } catch (e) {
        // some environments are read-only
      }
    }

    // Always reset to top on navigation / reload, including hash changes
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash, key]);

  return null;
}
