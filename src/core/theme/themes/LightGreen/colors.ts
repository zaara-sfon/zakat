// src/core/theme/themes/naturePro/colors.ts
// Nature Pro Theme (Dark Green + Gold)

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
  primaryGreen: '#1B5E20',
  primaryGreenDark: '#0D3817',
  headerSubtitle: '#f7c00bff',
  disclaimerTitle: '#2E7D32',
  hadithQuote: '#2E7D32',
  lightGreen: '#2E7D32',
  mediumGreen: '#388E3C',
  brightGreen: '#43A047',
  accentGold: '#D4AF37',
  lightGold: '#FFD700',
  softWhite: '#FEFEFE',
  cream: '#F1F8E9',
  white: '#FFFFFF',
  softGray: '#F5F5F5',
  borderGray: '#E0E0E0',
  textDark: '#1B1B1B',
  textMedium: '#4E4E4E',
  textLight: '#757575',
  liveRed: '#D32F1F',
  errorColor: '#D32F2F',
  successGreen: '#2E7D32',
  warningOrange: '#F57C00',
  infoBlue: '#1976D2',
  pageBackground: '#F1F8E9',
  cardBackground: '#FFFFFF',
  surfaceLight: '#F5F5F5',
  arabicText: '#1B5E20',
  translationText: '#4E4E4E',
  verseHighlight: '#C8E6C9',
  bookmarkColor: '#D4AF37',
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayDark: 'rgba(0, 0, 0, 0.7)',
  textSecondary: undefined
};

export const darkColors: ColorPalette = {
  primaryGreen: '#1B5E20',
  primaryGreenDark: '#0D3817',
  headerSubtitle: '#f7c00bff',
  disclaimerTitle: '#2E7D32',
  hadithQuote: '#2E7D32',
  lightGreen: '#2E7D32',
  mediumGreen: '#388E3C',
  brightGreen: '#43A047',
  accentGold: '#D4AF37',
  lightGold: '#FFD700',
  softWhite: '#1A1A1A',
  cream: '#1E1E1E',
  white: '#FFFFFF',
  softGray: '#2C2C2C',
  borderGray: '#3A3A3A',
  textDark: '#FFFFFF',
  textMedium: '#D8F5D8',
  textLight: '#A8C8A8',
  liveRed: '#EF5350',
  errorColor: '#F44336',
  successGreen: '#66BB6A',
  warningOrange: '#FFA726',
  infoBlue: '#42A5F5',
  pageBackground: '#121212',
  cardBackground: '#1E1E1E',
  surfaceLight: '#2C2C2C',
  arabicText: '#2E7D32',
  translationText: '#BDBDBD',
  verseHighlight: '#0D3817',
  bookmarkColor: '#D4AF37',
  overlay: 'rgba(0, 0, 0, 0.7)',
  overlayDark: 'rgba(0, 0, 0, 0.85)',
  textSecondary: undefined
};

export const getColors = (isDark: boolean): ColorPalette => {
  return isDark ? darkColors : lightColors;
};
