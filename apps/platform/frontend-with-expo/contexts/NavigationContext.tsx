import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState('/');
  const [history, setHistory] = useState([currentPath]);

  const navigateForward = (path) => {
    setCurrentPath(path);
    setHistory((prevHistory) => [...prevHistory, path]);
  };

  const navigateBackward = () => {
    if (history.length > 1) {
      setHistory((prevHistory) => prevHistory.slice(0, -1));
      setCurrentPath(history[history.length - 2]);
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigateForward, navigateBackward }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
