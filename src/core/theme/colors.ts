// src/core/theme/colors.ts

import { ColorValue } from "react-native";

export interface ColorPalette {
  textSecondary: number | ColorValue | undefined;
  //header
  headerSubtitle: string;

  // Primary Colors
  primaryGreen: string;
  primaryGreenDark: string;
  lightGreen: string;
  mediumGreen: string;
  brightGreen: string;
  
  // Accent Colors
  accentGold: string;
  lightGold: string;
  
  // Neutral Colors
  softWhite: string;
  cream: string;
  white: string;
  softGray: string;
  borderGray: string;
  
  // Text Colors
  textDark: string;
  textMedium: string;
  textLight: string;
  
  // Status Colors
  liveRed: string;
  errorColor: string;
  successGreen: string;
  warningOrange: string;
  infoBlue: string;
  
  // Background Colors
  pageBackground: string;
  cardBackground: string;
  surfaceLight: string;
  
  // Specific Feature Colors
  arabicText: string;
  translationText: string;
  verseHighlight: string;
  bookmarkColor: string;
  
  // Overlay
  overlay: string;
  overlayDark: string;
}

export const lightColors: ColorPalette = {
  //header
  headerSubtitle: '#D4AF37',

  // Primary Colors
  primaryGreen: '#0C4A1F',
  primaryGreenDark: '#1A4B3C',
  lightGreen: '#1F5B3A',
  mediumGreen: '#2D7A4F',
  brightGreen: '#4A9B6E',

  // Accent Colors
  accentGold: '#D4AF37',
  lightGold: '#F4D03F',

  // Neutral Colors
  softWhite: '#FEFEFE',
  cream: '#FFF8E1',
  white: '#FFFFFF',
  softGray: '#F5F5F5',
  borderGray: '#E0E0E0',

  // Text Colors
  textDark: '#1B1B1B',
  textMedium: '#424242',
  textLight: '#757575',

  // Status Colors
  liveRed: '#D32F1F',
  errorColor: '#D32F2F',
  successGreen: '#2E7D32',
  warningOrange: '#F57C00',
  infoBlue: '#1976D2',

  // Background Colors
  pageBackground: '#FEFBF3',
  cardBackground: '#FFFFFF',
  surfaceLight: '#F8F9FA',

  // Specific Feature Colors
  arabicText: '#1A4B3C',
  translationText: '#2C3E50',
  verseHighlight: '#FFF8E1',
  bookmarkColor: '#F57C00',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayDark: 'rgba(0, 0, 0, 0.7)',
  textSecondary: undefined
};

export const darkColors: ColorPalette = {
    //header
  headerSubtitle: '#F4D03F',

  // Primary Colors
  primaryGreen: '#4A9B6E',
  primaryGreenDark: '#2D7A4F',
  lightGreen: '#5AB084',
  mediumGreen: '#3D8B5F',
  brightGreen: '#6FBC91',

  // Accent Colors
  accentGold: '#F4D03F',
  lightGold: '#FFE066',

  // Neutral Colors
  softWhite: '#1E1E1E',
  cream: '#2A2520',
  white: '#121212',
  softGray: '#2C2C2C',
  borderGray: '#3A3A3A',

  // Text Colors
  textDark: '#E8E8E8',
  textMedium: '#B8B8B8',
  textLight: '#8A8A8A',

  // Status Colors
  liveRed: '#EF5350',
  errorColor: '#F44336',
  successGreen: '#66BB6A',
  warningOrange: '#FFA726',
  infoBlue: '#42A5F5',

  // Background Colors
  pageBackground: '#121212',
  cardBackground: '#1E1E1E',
  surfaceLight: '#2C2C2C',

  // Specific Feature Colors
  arabicText: '#6FBC91',
  translationText: '#B8B8B8',
  verseHighlight: '#2A2520',
  bookmarkColor: '#FFA726',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.7)',
  overlayDark: 'rgba(0, 0, 0, 0.85)',
  textSecondary: undefined
};

export const getColors = (isDark: boolean): ColorPalette => {
  return isDark ? darkColors : lightColors;
};