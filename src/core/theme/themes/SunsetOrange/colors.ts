// src/core/theme/themes/creativeSunset/colors.ts
// Creative Sunset Theme (Orange + Pink + Gold)

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
}

export const lightColors: ColorPalette = {
  primaryGreen: '#FF7043',
  primaryGreenDark: '#D81B60',
  lightGreen: '#FF8A65',
  mediumGreen: '#FF7043',
  brightGreen: '#FF6E40',
  accentGold: '#D4AF37',
  lightGold: '#FFD700',
  softWhite: '#FEFEFE',
  cream: '#FFF3E0',
  white: '#FFFFFF',
  softGray: '#F5F5F5',
  borderGray: '#E0E0E0',
  textDark: '#3E2723',
  textMedium: '#6D4C41',
  textLight: '#757575',
  liveRed: '#D32F1F',
  errorColor: '#D32F2F',
  successGreen: '#2E7D32',
  warningOrange: '#F57C00',
  infoBlue: '#1976D2',
  pageBackground: '#FFF3E0',
  cardBackground: '#FFFFFF',
  surfaceLight: '#FFE0B2',
  arabicText: '#FF7043',
  translationText: '#6D4C41',
  verseHighlight: '#FFD7A8',
  bookmarkColor: '#D4AF37',
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayDark: 'rgba(0, 0, 0, 0.7)',
  textSecondary: undefined
};

export const darkColors: ColorPalette = {
  primaryGreen: '#FF7043',
  primaryGreenDark: '#D81B60',
  lightGreen: '#FF8A65',
  mediumGreen: '#FF7043',
  brightGreen: '#FF6E40',
  accentGold: '#D4AF37',
  lightGold: '#FFD700',
  softWhite: '#1A1A1A',
  cream: '#1E1E1E',
  white: '#FFFFFF',
  softGray: '#2C2C2C',
  borderGray: '#3A3A3A',
  textDark: '#FFFFFF',
  textMedium: '#F0D0C0',
  textLight: '#C0A090',
  liveRed: '#EF5350',
  errorColor: '#F44336',
  successGreen: '#66BB6A',
  warningOrange: '#FFA726',
  infoBlue: '#42A5F5',
  pageBackground: '#121212',
  cardBackground: '#1E1E1E',
  surfaceLight: '#2C2C2C',
  arabicText: '#FF8A65',
  translationText: '#BDBDBD',
  verseHighlight: '#BF360C',
  bookmarkColor: '#D4AF37',
  overlay: 'rgba(0, 0, 0, 0.7)',
  overlayDark: 'rgba(0, 0, 0, 0.85)',
  textSecondary: undefined
};

export const getColors = (isDark: boolean): ColorPalette => {
  return isDark ? darkColors : lightColors;
};
