// src/core/theme/themes/energyOrange/colors.ts
// Energy Orange Theme (Orange + Gold)

import { ColorValue } from "react-native";

export interface ColorPalette {
  textSecondary: number | ColorValue | undefined;
  primaryGreen: string;
  primaryGreenDark: string;
  disclaimerTitle: string;
  hadithQuote: string;
  lightGreen: string;
  mediumGreen: string;
  brightGreen: string;
  accentGold: string;
  lightGold: string;
  headerSubtitle: string;
  softWhite: string;
  cream: string;
  white: string;
  softGray: string;
  borderGray: string;
  textDark: string;
  textMedium: string;
  textLight: string;
  liveRed: string;
  errorColor: string;
  successGreen: string;
  warningOrange: string;
  infoBlue: string;
  pageBackground: string;
  cardBackground: string;
  surfaceLight: string;
  arabicText: string;
  translationText: string;
  verseHighlight: string;
  bookmarkColor: string;
  overlay: string;
  overlayDark: string;
}

export const lightColors: ColorPalette = {
  primaryGreen: '#FF9800',
  primaryGreenDark: '#F57C00',
  lightGreen: '#FFB74D',
  mediumGreen: '#FF9800',
  brightGreen: '#FFA726',
  accentGold: '#D4AF37',
  lightGold: '#FFD700',
  headerSubtitle: '#b44f0bff',
  disclaimerTitle: '#f57c00',
  hadithQuote: '#f57c00',
  softWhite: '#FEFEFE',
  cream: '#FFF8E1',
  white: '#FFFFFF',
  softGray: '#F5F5F5',
  borderGray: '#E0E0E0',
  textDark: '#212121',
  textMedium: '#616161',
  textLight: '#757575',
  liveRed: '#D32F1F',
  errorColor: '#D32F2F',
  successGreen: '#2E7D32',
  warningOrange: '#F57C00',
  infoBlue: '#1976D2',
  pageBackground: '#FFF8E1',
  cardBackground: '#FFFFFF',
  surfaceLight: '#FFF9C4',
  arabicText: '#FF9800',
  translationText: '#616161',
  verseHighlight: '#FFE0B2',
  bookmarkColor: '#F57C00',
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayDark: 'rgba(0, 0, 0, 0.7)',
  textSecondary: '#9e9e9e'
};

export const darkColors: ColorPalette = {
  primaryGreen: '#FF9800',
  primaryGreenDark: '#F57C00',
  disclaimerTitle: 'rgba(19, 18, 17, 0.86)',
  hadithQuote: 'rgba(12, 12, 11, 0.86)', 
  lightGreen: '#FFB74D',
  mediumGreen: '#FF9800', 
  brightGreen: '#FFA726',
  accentGold: '#D4AF37',
  lightGold: '#FFD700',
  headerSubtitle: 'rgba(17, 16, 16, 0.86)',
  softWhite: '#121212',
  cream: '#1E1E1E',
  white: '#FFFFFF',
  softGray: '#2C2C2C',
  borderGray: '#3A3A3A',
  textDark: '#FFFFFF',
  textMedium: '#E0E0E0',
  textLight: '#0a0a0aff',
  liveRed: '#EF5350',
  errorColor: '#F44336',
  successGreen: '#66BB6A',
  warningOrange: '#FFA726',
  infoBlue: '#42A5F5',
  pageBackground: '#121212',
  cardBackground: '#1E1E1E',
  surfaceLight: '#2C2C2C',
  arabicText: '#FFA726',
  translationText: '#BDBDBD',
  verseHighlight: '#fd9800ff',
  bookmarkColor: '#FFA726',
  overlay: 'rgba(0, 0, 0, 0.7)',
  overlayDark: 'rgba(0, 0, 0, 0.85)',
  textSecondary: undefined
};

export const getColors = (isDark: boolean): ColorPalette => {
  return isDark ? darkColors : lightColors;
};
