

export function useDebouncedFunction(callback:(...argss:any)=>void, delay=100) {
    let timeoutId:NodeJS.Timeout;
  
    return function (...args:any[]) {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }