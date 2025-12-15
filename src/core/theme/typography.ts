// src/core/theme/typography.ts

import { TextStyle } from 'react-native';
import { moderateScale } from './responsive';

export interface FontWeights {
  light: '300';
  regular: '400';
  medium: '500';
  semiBold: '600';
  bold: '700';
  extraBold: '800';
}

export const fontWeights: FontWeights = {
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
};

export interface FontFamilies {
  regular: string;
  medium: string;
  semiBold: string;
  bold: string;
  arabic: string;
}

export const fontFamilies: FontFamilies = {
  regular: 'OpenSans-Regular',
  medium: 'OpenSans-Medium',
  semiBold: 'OpenSans-SemiBold',
  bold: 'OpenSans-Bold',
  arabic: 'AmiriQuran-Regular',
};

export interface Typography {
  // Headings
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  h6: TextStyle;
  
  // Subtitles
  subtitle1: TextStyle;
  subtitle2: TextStyle;
  
  // Body Text
  body1: TextStyle;
  body2: TextStyle;
  bodySmall: TextStyle;
  
  // Special Text
  caption: TextStyle;
  overline: TextStyle;
  button: TextStyle;
  buttonLarge: TextStyle;
  
  // Arabic Text
  arabicLarge: TextStyle;
  arabicMedium: TextStyle;
  arabicSmall: TextStyle;
  
  // Verse & Translation
  verse: TextStyle;
  translation: TextStyle;
  transliteration: TextStyle;
  
  // Labels
  label: TextStyle;
  labelSmall: TextStyle;
  labelLarge: TextStyle;
  
  // Numbers & Stats
  numberLarge: TextStyle;
  numberMedium: TextStyle;
  numberSmall: TextStyle;
}

export const createTypography = (): Typography => ({
  // Headings
  h1: {
    fontFamily: fontFamilies.bold,
    fontSize: moderateScale(32),
    fontWeight: fontWeights.bold,
    lineHeight: moderateScale(40),
    letterSpacing: -0.5,
  },
  h2: {
    fontFamily: fontFamilies.bold,
    fontSize: moderateScale(28),
    fontWeight: fontWeights.bold,
    lineHeight: moderateScale(36),
    letterSpacing: -0.3,
  },
  h3: {
    fontFamily: fontFamilies.bold,
    fontSize: moderateScale(24),
    fontWeight: fontWeights.bold,
    lineHeight: moderateScale(32),
    letterSpacing: 0,
  },
  h4: {
    fontFamily: fontFamilies.bold,
    fontSize: moderateScale(20),
    fontWeight: fontWeights.bold,
    lineHeight: moderateScale(28),
    letterSpacing: 0.15,
  },
  h5: {
    fontFamily: fontFamilies.semiBold,
    fontSize: moderateScale(18),
    fontWeight: fontWeights.semiBold,
    lineHeight: moderateScale(24),
    letterSpacing: 0.15,
  },
  h6: {
    fontFamily: fontFamilies.semiBold,
    fontSize: moderateScale(16),
    fontWeight: fontWeights.semiBold,
    lineHeight: moderateScale(22),
    letterSpacing: 0.15,
  },
  
  // Subtitles
  subtitle1: {
    fontFamily: fontFamilies.semiBold,
    fontSize: moderateScale(16),
    fontWeight: fontWeights.semiBold,
    lineHeight: moderateScale(24),
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontFamily: fontFamilies.medium,
    fontSize: moderateScale(14),
    fontWeight: fontWeights.medium,
    lineHeight: moderateScale(20),
    letterSpacing: 0.1,
  },
  
  // Body Text
  body1: {
    fontFamily: fontFamilies.regular,
    fontSize: moderateScale(16),
    fontWeight: fontWeights.regular,
    lineHeight: moderateScale(24),
    letterSpacing: 0.5,
  },
  body2: {
    fontFamily: fontFamilies.regular,
    fontSize: moderateScale(14),
    fontWeight: fontWeights.regular,
    lineHeight: moderateScale(20),
    letterSpacing: 0.25,
  },
  bodySmall: {
    fontFamily: fontFamilies.regular,
    fontSize: moderateScale(12),
    fontWeight: fontWeights.regular,
    lineHeight: moderateScale(16),
    letterSpacing: 0.4,
  },
  
  // Special Text
  caption: {
    fontFamily: fontFamilies.regular,
    fontSize: moderateScale(12),
    fontWeight: fontWeights.regular,
    lineHeight: moderateScale(16),
    letterSpacing: 0.4,
  },
  overline: {
    fontFamily: fontFamilies.medium,
    fontSize: moderateScale(10),
    fontWeight: fontWeights.medium,
    lineHeight: moderateScale(16),
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  button: {
    fontFamily: fontFamilies.semiBold,
    fontSize: moderateScale(14),
    fontWeight: fontWeights.semiBold,
    lineHeight: moderateScale(20),
    letterSpacing: 0.75,
    textTransform: 'uppercase',
  },
  buttonLarge: {
    fontFamily: fontFamilies.bold,
    fontSize: moderateScale(16),
    fontWeight: fontWeights.bold,
    lineHeight: moderateScale(24),
    letterSpacing: 0.75,
    textTransform: 'uppercase',
  },
  
  // Arabic Text
  arabicLarge: {
    fontFamily: fontFamilies.arabic,
    fontSize: moderateScale(28),
    fontWeight: fontWeights.regular,
    lineHeight: moderateScale(48),
    letterSpacing: 0,
    writingDirection: 'rtl',
  },
  arabicMedium: {
    fontFamily: fontFamilies.arabic,
    fontSize: moderateScale(24),
    fontWeight: fontWeights.regular,
    lineHeight: moderateScale(40),
    letterSpacing: 0,
    writingDirection: 'rtl',
  },
  arabicSmall: {
    fontFamily: fontFamilies.arabic,
    fontSize: moderateScale(20),
    fontWeight: fontWeights.regular,
    lineHeight: moderateScale(32),
    letterSpacing: 0,
    writingDirection: 'rtl',
  },
  
  // Verse & Translation
  verse: {
    fontFamily: fontFamilies.arabic,
    fontSize: moderateScale(24),
    fontWeight: fontWeights.regular,
    lineHeight: moderateScale(40),
    letterSpacing: 0,
    writingDirection: 'rtl',
    fontStyle: 'italic',
  },
  translation: {
    fontFamily: fontFamilies.regular,
    fontSize: moderateScale(16),
    fontWeight: fontWeights.regular,
    lineHeight: moderateScale(24),
    letterSpacing: 0.15,
  },
  transliteration: {
    fontFamily: fontFamilies.regular,
    fontSize: moderateScale(14),
    fontWeight: fontWeights.regular,
    lineHeight: moderateScale(20),
    letterSpacing: 0.25,
    fontStyle: 'italic',
  },
  
  // Labels
  label: {
    fontFamily: fontFamilies.medium,
    fontSize: moderateScale(14),
    fontWeight: fontWeights.medium,
    lineHeight: moderateScale(20),
    letterSpacing: 0.1,
  },
  labelSmall: {
    fontFamily: fontFamilies.medium,
    fontSize: moderateScale(12),
    fontWeight: fontWeights.medium,
    lineHeight: moderateScale(16),
    letterSpacing: 0.5,
  },
  labelLarge: {
    fontFamily: fontFamilies.semiBold,
    fontSize: moderateScale(16),
    fontWeight: fontWeights.semiBold,
    lineHeight: moderateScale(22),
    letterSpacing: 0.1,
  },
  
  // Numbers & Stats
  numberLarge: {
    fontFamily: fontFamilies.bold,
    fontSize: moderateScale(48),
    fontWeight: fontWeights.bold,
    lineHeight: moderateScale(56),
    letterSpacing: -0.5,
  },
  numberMedium: {
    fontFamily: fontFamilies.bold,
    fontSize: moderateScale(32),
    fontWeight: fontWeights.bold,
    lineHeight: moderateScale(40),
    letterSpacing: 0,
  },
  numberSmall: {
    fontFamily: fontFamilies.semiBold,
    fontSize: moderateScale(24),
    fontWeight: fontWeights.semiBold,
    lineHeight: moderateScale(32),
    letterSpacing: 0,
  },
});