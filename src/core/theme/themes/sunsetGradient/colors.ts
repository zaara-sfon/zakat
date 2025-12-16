// src/core/theme/themes/sunsetGradient/colors.ts
// Sunset Gradient Theme (Orange to Purple Gradient)

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
  primaryGreen: '#FF6B35',
  primaryGreenDark: '#E63946',
  headerSubtitle: '#f7c00bff',
  disclaimerTitle: '#E63946',
  hadithQuote: '#E63946',
  lightGreen: '#FF8C42',
  mediumGreen: '#FF6B35',
  brightGreen: '#FFA94D',
  accentGold: '#F77F00',
  lightGold: '#FCBF49',
  softWhite: '#FFFBF7',
  cream: '#FFF1E6',
  white: '#FFFFFF',
  softGray: '#FAF3F0',
  borderGray: '#EEE5E0',
  textDark: '#2A1810',
  textMedium: '#5A4A42',
  textLight: '#8B7B73',
  liveRed: '#E63946',
  errorColor: '#E63946',
  successGreen: '#2A9D8F',
  warningOrange: '#E76F51',
  infoBlue: '#264653',
  pageBackground: '#FFFBF7',
  cardBackground: '#FFFFFF',
  surfaceLight: '#FFE8D6',
  arabicText: '#FF6B35',
  translationText: '#5A4A42',
  verseHighlight: '#FFE0C9',
  bookmarkColor: '#F77F00',
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayDark: 'rgba(0, 0, 0, 0.7)',
  textSecondary: undefined
};

export const darkColors: ColorPalette = {
  primaryGreen: '#FF6B35',
  primaryGreenDark: '#E63946',
  headerSubtitle: '#f7db82ff',
  disclaimerTitle: '#E63946',
  hadithQuote: '#E63946',
  lightGreen: '#FF8C42',
  mediumGreen: '#FF6B35',
  brightGreen: '#FFA94D',
  accentGold: '#F77F00',
  lightGold: '#FCBF49',
  softWhite: '#1A1410',
  cream: '#2A2015',
  white: '#FFFFFF',
  softGray: '#3A3530',
  borderGray: '#4A4540',
  textDark: '#FFE8D6',
  textMedium: '#D4C4BC',
  textLight: '#A89A92',
  liveRed: '#FF6B6B',
  errorColor: '#E63946',
  successGreen: '#2A9D8F',
  warningOrange: '#E76F51',
  infoBlue: '#A8D8EA',
  pageBackground: '#1A1410',
  cardBackground: '#2A2015',
  surfaceLight: '#3A3530',
  arabicText: '#FFA94D',
  translationText: '#D4C4BC',
  verseHighlight: '#3A2A1F',
  bookmarkColor: '#F77F00',
  overlay: 'rgba(0, 0, 0, 0.7)',
  overlayDark: 'rgba(0, 0, 0, 0.9)',
  textSecondary: undefined
};

export const getColors = (isDark: boolean): ColorPalette => 
  isDark ? darkColors : lightColors;
