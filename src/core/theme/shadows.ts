// src/core/theme/shadows.ts

import { Platform, ViewStyle } from 'react-native';

export interface ShadowStyle extends ViewStyle {
  shadowColor?: string;
  shadowOffset?: { width: number; height: number };
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
}

export interface Shadows {
  none: ShadowStyle;
  xs: ShadowStyle;
  sm: ShadowStyle;
  md: ShadowStyle;
  lg: ShadowStyle;
  xl: ShadowStyle;
  xxl: ShadowStyle;
  
  // Custom shadows
  card: ShadowStyle;
  button: ShadowStyle;
  header: ShadowStyle;
  floating: ShadowStyle;
  modal: ShadowStyle;
  
  // Colored shadows
  primary: ShadowStyle;
  accent: ShadowStyle;
  error: ShadowStyle;
  success: ShadowStyle;
}

const createShadow = (
  height: number,
  radius: number,
  opacity: number,
  elevation: number,
  color: string = '#000'
): ShadowStyle => {
  if (Platform.OS === 'ios') {
    return {
      shadowColor: color,
      shadowOffset: { width: 0, height },
      shadowOpacity: opacity,
      shadowRadius: radius,
    };
  }
  
  return {
    elevation,
  };
};

export const createShadows = (isDark: boolean): Shadows => {
  const baseOpacity = isDark ? 0.5 : 1;
  
  return {
    none: {
      shadowColor: 'transparent',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    },
    
    xs: createShadow(1, 2, 0.1 * baseOpacity, 1),
    sm: createShadow(2, 4, 0.12 * baseOpacity, 2),
    md: createShadow(4, 8, 0.15 * baseOpacity, 4),
    lg: createShadow(6, 12, 0.2 * baseOpacity, 8),
    xl: createShadow(8, 16, 0.25 * baseOpacity, 12),
    xxl: createShadow(12, 24, 0.3 * baseOpacity, 16),
    
    // Custom shadows
    card: {
      ...createShadow(4, 12, 0.15 * baseOpacity, 4),
      shadowColor: '#000',
    },
    
    button: {
      ...createShadow(4, 8, 0.2 * baseOpacity, 4),
      shadowColor: '#000',
    },
    
    header: {
      ...createShadow(6, 20, 0.3 * baseOpacity, 8),
      shadowColor: '#000',
    },
    
    floating: {
      ...createShadow(8, 16, 0.25 * baseOpacity, 12),
      shadowColor: '#000',
    },
    
    modal: {
      ...createShadow(12, 24, 0.35 * baseOpacity, 16),
      shadowColor: '#000',
    },
    
    // Colored shadows (iOS only, Android uses elevation)
    primary: Platform.OS === 'ios' 
      ? {
          shadowColor: '#0C4A1F',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3 * baseOpacity,
          shadowRadius: 12,
        }
      : { elevation: 4 },
    
    accent: Platform.OS === 'ios'
      ? {
          shadowColor: '#D4AF37',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3 * baseOpacity,
          shadowRadius: 12,
        }
      : { elevation: 4 },
    
    error: Platform.OS === 'ios'
      ? {
          shadowColor: '#D32F2F',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3 * baseOpacity,
          shadowRadius: 12,
        }
      : { elevation: 4 },
    
    success: Platform.OS === 'ios'
      ? {
          shadowColor: '#2E7D32',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3 * baseOpacity,
          shadowRadius: 12,
        }
      : { elevation: 4 },
  };
};