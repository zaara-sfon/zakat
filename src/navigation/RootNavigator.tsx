// src/navigation/RootNavigator.tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { ZakatCalculator } from '../screens/ZakatCalculator';
import { ThemeSelectorScreen } from '../screens/ThemeSelectorScreen';
import { NavigationContext, ScreenName } from './NavigationContext';

export const RootNavigator: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('ZakatCalculator');

  const navigate = (screen: ScreenName) => {
    setCurrentScreen(screen);
  };

  return (
    <NavigationContext.Provider value={{ currentScreen, navigate }}>
      {currentScreen === 'ZakatCalculator' && <ZakatCalculator />}
      {currentScreen === 'ThemeSelector' && <ThemeSelectorScreen />}
    </NavigationContext.Provider>
  );
};
