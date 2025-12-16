// src/core/theme/themes/midnightGradient/colors.ts
// Midnight Gradient Theme (Dark Blue to Black Gradient)

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
  primaryGreen: '#1E293B',
  primaryGreenDark: '#0F172A',
  lightGreen: '#334155',
  mediumGreen: '#475569',
  brightGreen: '#64748B',
  accentGold: '#60A5FA',
  headerSubtitle: '#93C5FD',
  disclaimerTitle: '#0F172A',
  hadithQuote: '#0F172A',
  lightGold: '#93C5FD',
  softWhite: '#F8FAFC',
  cream: '#F1F5F9',
  white: '#FFFFFF',
  softGray: '#E2E8F0',
  borderGray: '#CBD5E1',
  textDark: '#0F172A',
  textMedium: '#1E293B',
  textLight: '#475569',
  liveRed: '#DC2626',
  errorColor: '#DC2626',
  successGreen: '#059669',
  warningOrange: '#F59E0B',
  infoBlue: '#3B82F6',
  pageBackground: '#F8FAFC',
  cardBackground: '#FFFFFF',
  surfaceLight: '#E2E8F0',
  arabicText: '#1E293B',
  translationText: '#1E293B',
  verseHighlight: '#DBEAFE',
  bookmarkColor: '#60A5FA',
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayDark: 'rgba(0, 0, 0, 0.7)',
  textSecondary: '#9e9e9e'
};

export const darkColors: ColorPalette = {
  primaryGreen: '#1E293B',
  primaryGreenDark: '#0F172A',
  lightGreen: '#334155',
  mediumGreen: '#475569',
  brightGreen: '#64748B',
  accentGold: '#60A5FA',
  headerSubtitle: '#6cb1ffff',
  disclaimerTitle: '#93C5FD',
  hadithQuote: '#93C5FD',
  lightGold: '#93C5FD',
  softWhite: '#0F172A',
  cream: '#1A202C',
  white: '#FFFFFF',
  softGray: '#334155',
  borderGray: '#475569',
  textDark: '#E2E8F0',
  textMedium: '#CBD5E1',
  textLight: '#94A3B8',
  liveRed: '#FCA5A5',
  errorColor: '#DC2626',
  successGreen: '#059669',
  warningOrange: '#F59E0B',
  infoBlue: '#93C5FD',
  pageBackground: '#0F172A',
  cardBackground: '#1A202C',
  surfaceLight: '#334155',
  arabicText: '#93C5FD',
  translationText: '#CBD5E1',
  verseHighlight: '#1E3A8A',
  bookmarkColor: '#60A5FA',
  overlay: 'rgba(0, 0, 0, 0.7)',
  overlayDark: 'rgba(0, 0, 0, 0.9)',
  textSecondary: undefined
};

export const getColors = (isDark: boolean): ColorPalette => 
  isDark ? darkColors : lightColors;
