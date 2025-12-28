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

    // If returning to home from event detail, scroll to events section
    if (pathname === '/' && sessionStorage.getItem('scrollToEvents') === 'true') {
      sessionStorage.removeItem('scrollToEvents');
      setTimeout(() => {
        const eventsSection = document.getElementById('events');
        if (eventsSection) {
          eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      // Otherwise, reset to top on navigation / reload, including hash changes
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [pathname, hash, key]);

  return null;
}
