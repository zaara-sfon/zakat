import React from 'react';

export type ScreenName = 'ZakatCalculator' | 'ThemeSelector';

export interface NavigationContextType {
  currentScreen: ScreenName;
  navigate: (screen: ScreenName) => void;
}

export const NavigationContext = React.createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = React.useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};
