// src/core/theme/themes/oceanBreeze/colors.ts
// Ocean Breeze Theme (Blue + Teal + Gold)

import { ColorValue } from "react-native";

export interface ColorPalette {
  textSecondary: number | ColorValue | undefined;
  primaryGreen: string;
  primaryGreenDark: string;
  lightGreen: string;
  mediumGreen: string;
  brightGreen: string;
  accentGold: string;
  lightGold: string;
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
  headerSubtitle: string;
}

export const lightColors: ColorPalette = {
  primaryGreen: '#0288D1',
  primaryGreenDark: '#01579B',
  lightGreen: '#03A9F4',
  mediumGreen: '#0288D1',
  brightGreen: '#0097A7',
  accentGold: '#D4AF37',
  headerSubtitle: '#0d4585ff',
  lightGold: '#FFD700',
  softWhite: '#FEFEFE',
  cream: '#E0F7FA',
  white: '#FFFFFF',
  softGray: '#F5F5F5',
  borderGray: '#E0E0E0',
  textDark: '#01579B',
  textMedium: '#4F5B62',
  textLight: '#757575',
  liveRed: '#D32F1F',
  errorColor: '#D32F2F',
  successGreen: '#2E7D32',
  warningOrange: '#F57C00',
  infoBlue: '#1976D2',
  pageBackground: '#E0F7FA',
  cardBackground: '#FFFFFF',
  surfaceLight: '#B2EBF2',
  arabicText: '#0288D1',
  translationText: '#4F5B62',
  verseHighlight: '#80DEEA',
  bookmarkColor: '#D4AF37',
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayDark: 'rgba(0, 0, 0, 0.7)',
  textSecondary: '#9e9e9e'
};

export const darkColors: ColorPalette = {
  primaryGreen: '#0288D1',
  primaryGreenDark: '#01579B',
  lightGreen: '#03A9F4',
  mediumGreen: '#0288D1',
  brightGreen: '#0097A7',
  accentGold: '#D4AF37',
  headerSubtitle: '#0288D1',
  lightGold: '#FFD700',
  softWhite: '#1A1A1A',
  cream: '#1E1E1E',
  white: '#FFFFFF',
  softGray: '#2C2C2C',
  borderGray: '#3A3A3A',
  textDark: '#FFFFFF',
  textMedium: '#D8E8F0',
  textLight: '#A8C0D0',
  liveRed: '#EF5350',
  errorColor: '#F44336',
  successGreen: '#66BB6A',
  warningOrange: '#FFA726',
  infoBlue: '#42A5F5',
  pageBackground: '#121212',
  cardBackground: '#1E1E1E',
  surfaceLight: '#2C2C2C',
  arabicText: '#0288D1',
  translationText: '#BDBDBD',
  verseHighlight: '#01579B',
  bookmarkColor: '#D4AF37',
  overlay: 'rgba(0, 0, 0, 0.7)',
  overlayDark: 'rgba(0, 0, 0, 0.85)',
  textSecondary: '#9e9e9e'
};

export const getColors = (isDark: boolean): ColorPalette => {
  return isDark ? darkColors : lightColors;
};
