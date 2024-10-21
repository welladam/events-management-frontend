export const setSessionItem = (key: string, value: string) => {
    sessionStorage.setItem(key, value);
  };
  
  export const getSessionItem = (key: string) => {
    return sessionStorage.getItem(key);
  };
  
  export const removeSessionItem = (key: string) => {
    sessionStorage.removeItem(key);
  };
  