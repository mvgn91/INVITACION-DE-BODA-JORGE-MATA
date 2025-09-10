import { useEffect, useRef, useCallback } from 'react';

// Hook para throttling
const useThrottle = (callback, delay) => {
  const lastRun = useRef(Date.now());
  
  return useCallback((...args) => {
    if (Date.now() - lastRun.current >= delay) {
      callback(...args);
      lastRun.current = Date.now();
    }
  }, [callback, delay]);
};

// Hook para debouncing
const useDebounce = (callback, delay) => {
  const timeoutRef = useRef(null);
  
  return useCallback((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
};

// Hook principal para optimización de scroll
const useScrollOptimization = (options = {}) => {
  const {
    throttleDelay = 16, // ~60fps
    debounceDelay = 100,
    onScroll = () => {},
    onScrollEnd = () => {},
    enablePassive = true
  } = options;

  const throttledScroll = useThrottle(onScroll, throttleDelay);
  const debouncedScrollEnd = useDebounce(onScrollEnd, debounceDelay);

  useEffect(() => {
    const handleScroll = (event) => {
      throttledScroll(event);
      debouncedScrollEnd(event);
    };

    const scrollOptions = enablePassive ? { passive: true } : false;
    
    window.addEventListener('scroll', handleScroll, scrollOptions);
    window.addEventListener('resize', handleScroll, scrollOptions);

    return () => {
      window.removeEventListener('scroll', handleScroll, scrollOptions);
      window.removeEventListener('resize', handleScroll, scrollOptions);
    };
  }, [throttledScroll, debouncedScrollEnd, enablePassive]);

  return {
    throttledScroll,
    debouncedScrollEnd
  };
};

export { useThrottle, useDebounce, useScrollOptimization };
export default useScrollOptimization;
