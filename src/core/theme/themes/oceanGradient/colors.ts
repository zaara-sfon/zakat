// src/core/theme/themes/oceanGradient/colors.ts
// Ocean Gradient Theme (Blue to Teal Gradient)

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
  primaryGreen: '#0369A1',
  primaryGreenDark: '#0C4A6E',
  lightGreen: '#0EA5E9',
  mediumGreen: '#06B6D4',
  brightGreen: '#22D3EE',
  headerSubtitle: '#032da1ff',
  disclaimerTitle: '#0C4A6E',
  hadithQuote: '#0C4A6E',
  accentGold: '#14B8A6',
  lightGold: '#5EEAD4',
  softWhite: '#F0F9FF',
  cream: '#E0F2FE',
  white: '#FFFFFF',
  softGray: '#F0F4F8',
  borderGray: '#CBD5E1',
  textDark: '#0C2D57',
  textMedium: '#1E4976',
  textLight: '#4B5C73',
  liveRed: '#DC2626',
  errorColor: '#DC2626',
  successGreen: '#059669',
  warningOrange: '#F59E0B',
  infoBlue: '#3B82F6',
  pageBackground: '#F0F9FF',
  cardBackground: '#FFFFFF',
  surfaceLight: '#CFF0FF',
  arabicText: '#0369A1',
  translationText: '#1E4976',
  verseHighlight: '#BAE6FD',
  bookmarkColor: '#14B8A6',
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayDark: 'rgba(0, 0, 0, 0.7)',
  textSecondary: undefined
};

export const darkColors: ColorPalette = {
  primaryGreen: '#0369A1',
  primaryGreenDark: '#0C4A6E',
  lightGreen: '#0EA5E9',
  mediumGreen: '#06B6D4',
  brightGreen: '#22D3EE',
  headerSubtitle: '#032da1ff',
  disclaimerTitle: '#0C4A6E',
  hadithQuote: '#0C4A6E',
  accentGold: '#14B8A6',
  lightGold: '#5EEAD4',
  softWhite: '#082F49',
  cream: '#0C3D54',
  white: '#FFFFFF',
  softGray: '#164E63',
  borderGray: '#1E5F7A',
  textDark: '#CFF0FF',
  textMedium: '#A5F3FC',
  textLight: '#7DD3FC',
  liveRed: '#FCA5A5',
  errorColor: '#DC2626',
  successGreen: '#059669',
  warningOrange: '#F59E0B',
  infoBlue: '#93C5FD',
  pageBackground: '#082F49',
  cardBackground: '#0C3D54',
  surfaceLight: '#164E63',
  arabicText: '#22D3EE',
  translationText: '#A5F3FC',
  verseHighlight: '#0E5A6D',
  bookmarkColor: '#14B8A6',
  overlay: 'rgba(0, 0, 0, 0.7)',
  overlayDark: 'rgba(0, 0, 0, 0.9)',
  textSecondary: undefined
};

export const getColors = (isDark: boolean): ColorPalette => 
  isDark ? darkColors : lightColors;
