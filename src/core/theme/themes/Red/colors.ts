// src/core/theme/themes/boldImpact/colors.ts
// Bold Impact Theme (Red + Gold)

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
  primaryGreen: '#C62828',
  primaryGreenDark: '#AD1457',
  headerSubtitle: '#ffcc24ff',
  disclaimerTitle: '#B71C1C',
  hadithQuote: '#B71C1C',
  lightGreen: '#E53935',
  mediumGreen: '#D32F2F',
  brightGreen: '#F44336',
  accentGold: '#D4AF37',
  lightGold: '#FFD700',
  softWhite: '#FEFEFE',
  cream: '#FFFDE7',
  white: '#FFFFFF',
  softGray: '#F5F5F5',
  borderGray: '#E0E0E0',
  textDark: '#B71C1C',
  textMedium: '#5D4037',
  textLight: '#757575',
  liveRed: '#D32F1F',
  errorColor: '#D32F2F',
  successGreen: '#2E7D32',
  warningOrange: '#F57C00',
  infoBlue: '#1976D2',
  pageBackground: '#FFFDE7',
  cardBackground: '#FFFFFF',
  surfaceLight: '#FFF9C4',
  arabicText: '#C62828',
  translationText: '#5D4037',
  verseHighlight: '#FFCCBC',
  bookmarkColor: '#D4AF37',
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayDark: 'rgba(0, 0, 0, 0.7)',
  textSecondary: undefined
};

export const darkColors: ColorPalette = {
  primaryGreen: '#C62828',
  primaryGreenDark: '#AD1457',
  headerSubtitle: '#ffcc24ff',
  disclaimerTitle: '#fcfcfcff',
  hadithQuote: '#fcfcfcff',
  lightGreen: '#E53935',
  mediumGreen: '#D32F2F',
  brightGreen: '#F44336',
  accentGold: '#D4AF37',
  lightGold: '#FFD700',
  softWhite: '#1A1A1A',
  cream: '#1E1E1E',
  white: '#FFFFFF',
  softGray: '#2C2C2C',
  borderGray: '#3A3A3A',
  textDark: '#FFFFFF',
  textMedium: '#F0D8D8',
  textLight: '#D0A8A8',
  liveRed: '#EF5350',
  errorColor: '#F44336',
  successGreen: '#66BB6A',
  warningOrange: '#FFA726',
  infoBlue: '#42A5F5',
  pageBackground: '#121212',
  cardBackground: '#1E1E1E',
  surfaceLight: '#2C2C2C',
  arabicText: '#E53935',
  translationText: '#BDBDBD',
  verseHighlight: '#B71C1C',
  bookmarkColor: '#D4AF37',
  overlay: 'rgba(0, 0, 0, 0.7)',
  overlayDark: 'rgba(0, 0, 0, 0.85)',
  textSecondary: undefined
};

export const getColors = (isDark: boolean): ColorPalette => {
  return isDark ? darkColors : lightColors;
};
