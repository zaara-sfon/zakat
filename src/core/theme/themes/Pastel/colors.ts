// src/core/theme/themes/calmPastel/colors.ts
// Calm Pastel Theme (Mint + Peach + Gold)

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
  primaryGreen: '#A5D6A7',
  primaryGreenDark: '#81C784',
  lightGreen: '#C8E6C9',
  mediumGreen: '#A5D6A7',
  brightGreen: '#AED581',
  accentGold: '#D4AF37',
  lightGold: '#FFD700',
  softWhite: '#FEFEFE',
  cream: '#FAFAFA',
  white: '#FFFFFF',
  softGray: '#F5F5F5',
  borderGray: '#E0E0E0',
  textDark: '#37474F',
  textMedium: '#757575',
  textLight: '#9E9E9E',
  liveRed: '#D32F1F',
  errorColor: '#D32F2F',
  successGreen: '#2E7D32',
  warningOrange: '#F57C00',
  infoBlue: '#1976D2',
  pageBackground: '#FAFAFA',
  cardBackground: '#FFFFFF',
  surfaceLight: '#E8F5E9',
  arabicText: '#A5D6A7',
  translationText: '#757575',
  verseHighlight: '#FFCCBC',
  bookmarkColor: '#D4AF37',
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayDark: 'rgba(0, 0, 0, 0.7)',
  textSecondary: undefined
};

export const darkColors: ColorPalette = {
  primaryGreen: '#A5D6A7',
  primaryGreenDark: '#81C784',
  lightGreen: '#C8E6C9',
  mediumGreen: '#A5D6A7',
  brightGreen: '#AED581',
  accentGold: '#D4AF37',
  lightGold: '#FFD700',
  softWhite: '#1A1A1A',
  cream: '#1E1E1E',
  white: '#FFFFFF',
  softGray: '#2C2C2C',
  borderGray: '#3A3A3A',
  textDark: '#FFFFFF',
  textMedium: '#E0D8D0',
  textLight: '#B8A8A0',
  liveRed: '#EF5350',
  errorColor: '#F44336',
  successGreen: '#66BB6A',
  warningOrange: '#FFA726',
  infoBlue: '#42A5F5',
  pageBackground: '#121212',
  cardBackground: '#1E1E1E',
  surfaceLight: '#2C2C2C',
  arabicText: '#A5D6A7',
  translationText: '#BDBDBD',
  verseHighlight: '#2C1810',
  bookmarkColor: '#D4AF37',
  overlay: 'rgba(0, 0, 0, 0.7)',
  overlayDark: 'rgba(0, 0, 0, 0.85)',
  textSecondary: undefined
};

export const getColors = (isDark: boolean): ColorPalette => {
  return isDark ? darkColors : lightColors;
};
