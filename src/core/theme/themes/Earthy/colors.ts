// src/core/theme/themes/earthyWarm/colors.ts
// Earthy Warm Theme (Brown + Beige + Gold)

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
  disclaimerTitle: string;
  hadithQuote: string;
}

export const lightColors: ColorPalette = {
  primaryGreen: '#6D4C41',
  primaryGreenDark: '#4E342E',
  lightGreen: '#8D6E63',
  mediumGreen: '#6D4C41',
  brightGreen: '#795548',
  accentGold: '#D4AF37',
  lightGold: '#FFD700',
  softWhite: '#FEFEFE',
  cream: '#EFEBE9',
  white: '#FFFFFF',
  softGray: '#F5F5F5',
  borderGray: '#E0E0E0',
  textDark: '#3E2723',
  textMedium: '#5D4037',
  textLight: '#757575',
  liveRed: '#D32F1F',
  errorColor: '#D32F2F',
  successGreen: '#2E7D32',
  warningOrange: '#F57C00',
  infoBlue: '#1976D2',
  pageBackground: '#EFEBE9',
  cardBackground: '#FFFFFF',
  surfaceLight: '#D7CCC8',
  arabicText: '#6D4C41',
  translationText: '#5D4037',
  verseHighlight: '#BCAAA4',
  bookmarkColor: '#D4AF37',
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayDark: 'rgba(0, 0, 0, 0.7)',
  textSecondary: undefined,
  headerSubtitle: '#3E2723',
  disclaimerTitle: '#5D4037',
  hadithQuote: '#5D4037',
};

export const darkColors: ColorPalette = {
  primaryGreen: '#6D4C41',
  primaryGreenDark: '#4E342E',
  lightGreen: '#8D6E63',
  mediumGreen: '#6D4C41',
  brightGreen: '#795548',
  headerSubtitle: '#3E2723',
  disclaimerTitle: '#5D4037',
  hadithQuote: '#5D4037',
  accentGold: '#D4AF37',
  lightGold: '#FFD700',
  softWhite: '#1A1A1A',
  cream: '#1E1E1E',
  white: '#FFFFFF',
  softGray: '#2C2C2C',
  borderGray: '#3A3A3A',
  textDark: '#FFFFFF',
  textMedium: '#E8D8D0',
  textLight: '#C0A89C',
  liveRed: '#EF5350',
  errorColor: '#F44336',
  successGreen: '#66BB6A',
  warningOrange: '#FFA726',
  infoBlue: '#42A5F5',
  pageBackground: '#121212',
  cardBackground: '#1E1E1E',
  surfaceLight: '#2C2C2C',
  arabicText: '#D7CCC8',
  translationText: '#BDBDBD',
  verseHighlight: '#4E342E',
  bookmarkColor: '#D4AF37',
  overlay: 'rgba(0, 0, 0, 0.7)',
  overlayDark: 'rgba(0, 0, 0, 0.85)',
  textSecondary: undefined
};

export const getColors = (isDark: boolean): ColorPalette => {
  return isDark ? darkColors : lightColors;
};
