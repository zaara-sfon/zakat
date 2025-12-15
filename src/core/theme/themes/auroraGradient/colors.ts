// src/core/theme/themes/auroraGradient/colors.ts
// Aurora Gradient Theme (Pink to Purple Gradient)

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
  primaryGreen: '#EC4899',
  primaryGreenDark: '#9333EA',
  lightGreen: '#F472B6',
  mediumGreen: '#EC4899',
  brightGreen: '#F472B6',
  accentGold: '#A855F7',
  lightGold: '#D8B4FE',
  softWhite: '#FDF2F8',
  cream: '#FCE7F3',
  white: '#FFFFFF',
  softGray: '#F8F4F9',
  borderGray: '#E9D5FF',
  textDark: '#4B1F6B',
  textMedium: '#6B3A8B',
  textLight: '#9D5AB5',
  liveRed: '#DC2626',
  errorColor: '#DC2626',
  successGreen: '#059669',
  warningOrange: '#F59E0B',
  infoBlue: '#3B82F6',
  pageBackground: '#FDF2F8',
  cardBackground: '#FFFFFF',
  surfaceLight: '#F3E8FF',
  arabicText: '#EC4899',
  translationText: '#6B3A8B',
  verseHighlight: '#E9D5FF',
  bookmarkColor: '#A855F7',
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayDark: 'rgba(0, 0, 0, 0.7)',
  textSecondary: undefined
};

export const darkColors: ColorPalette = {
  primaryGreen: '#EC4899',
  primaryGreenDark: '#9333EA',
  lightGreen: '#F472B6',
  mediumGreen: '#EC4899',
  brightGreen: '#F472B6',
  accentGold: '#A855F7',
  lightGold: '#D8B4FE',
  softWhite: '#1F1130',
  cream: '#2D1B40',
  white: '#FFFFFF',
  softGray: '#3D2750',
  borderGray: '#4D3660',
  textDark: '#F3E8FF',
  textMedium: '#E9D5FF',
  textLight: '#D8B4FE',
  liveRed: '#FCA5A5',
  errorColor: '#DC2626',
  successGreen: '#059669',
  warningOrange: '#F59E0B',
  infoBlue: '#93C5FD',
  pageBackground: '#1F1130',
  cardBackground: '#2D1B40',
  surfaceLight: '#3D2750',
  arabicText: '#F472B6',
  translationText: '#E9D5FF',
  verseHighlight: '#3D2750',
  bookmarkColor: '#A855F7',
  overlay: 'rgba(0, 0, 0, 0.7)',
  overlayDark: 'rgba(0, 0, 0, 0.9)',
  textSecondary: undefined
};

export const getColors = (isDark: boolean): ColorPalette => 
  isDark ? darkColors : lightColors;
