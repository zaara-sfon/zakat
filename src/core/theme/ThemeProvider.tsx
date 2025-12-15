// src/core/theme/ThemeProvider.tsx

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { Theme, createThemeForName } from './index';
import { ThemeName, DEFAULT_THEME } from './themes';

const THEME_MODE_STORAGE_KEY = '@app_theme_mode';
const THEME_NAME_STORAGE_KEY = '@app_theme_name';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  themeMode: ThemeMode;
  themeName: ThemeName;
  isDark: boolean;
  setThemeMode: (mode: ThemeMode) => Promise<void>;
  setThemeName: (name: ThemeName) => Promise<void>;
  toggleTheme: () => Promise<void>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialThemeMode?: ThemeMode;
  initialThemeName?: ThemeName;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  initialThemeMode = 'system',
  initialThemeName = DEFAULT_THEME,
}) => {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>(initialThemeMode);
  const [themeName, setThemeNameState] = useState<ThemeName>(initialThemeName);
  const [isReady, setIsReady] = useState(false);

  // Determine if dark mode should be active
  const isDark = themeMode === 'dark' || 
    (themeMode === 'system' && systemColorScheme === 'dark');

  // Get current theme based on theme name and dark mode
  const theme = createThemeForName(themeName, isDark);

  // Load saved theme preferences on mount
  useEffect(() => {
    loadThemePreferences();
  }, []);

  // Update theme when system color scheme changes (only if mode is 'system')
  useEffect(() => {
    if (themeMode === 'system') {
      // Force re-render when system theme changes
      setThemeModeState('system');
    }
  }, [systemColorScheme]);

  const loadThemePreferences = async () => {
    try {
      const savedMode = await AsyncStorage.getItem(THEME_MODE_STORAGE_KEY);
      const savedName = await AsyncStorage.getItem(THEME_NAME_STORAGE_KEY);
      
      if (savedMode && ['light', 'dark', 'system'].includes(savedMode)) {
        setThemeModeState(savedMode as ThemeMode);
      }
      
      if (savedName) {
        setThemeNameState(savedName as ThemeName);
      }
    } catch (error) {
      console.error('Failed to load theme preferences:', error);
    } finally {
      setIsReady(true);
    }
  };

  const setThemeMode = async (mode: ThemeMode) => {
    try {
      await AsyncStorage.setItem(THEME_MODE_STORAGE_KEY, mode);
      setThemeModeState(mode);
    } catch (error) {
      console.error('Failed to save theme mode:', error);
    }
  };

  const setThemeName = async (name: ThemeName) => {
    try {
      await AsyncStorage.setItem(THEME_NAME_STORAGE_KEY, name);
      setThemeNameState(name);
    } catch (error) {
      console.error('Failed to save theme name:', error);
    }
  };

  const toggleTheme = async () => {
    const newMode = isDark ? 'light' : 'dark';
    await setThemeMode(newMode);
  };

  if (!isReady) {
    return null; // Or return a splash screen
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeMode,
        themeName,
        isDark,
        setThemeMode,
        setThemeName,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Shorthand hook to get just the theme object
export const useAppTheme = (): Theme => {
  const { theme } = useTheme();
  return theme;
};

// Hook to check if dark mode is active
export const useIsDarkMode = (): boolean => {
  const { isDark } = useTheme();
  return isDark;
};

// Hook to get and set theme name
export const useThemeName = (): { themeName: ThemeName; setThemeName: (name: ThemeName) => Promise<void> } => {
  const { themeName, setThemeName } = useTheme();
  return { themeName, setThemeName };
};