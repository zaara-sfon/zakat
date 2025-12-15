// src/core/theme/index.ts

import { ColorPalette, getColors } from './colors';
import { Gradients, createGradients } from './gradients';
import { Shadows, createShadows } from './shadows';
import { Spacing, createSpacing } from './spacing';
import { Typography, createTypography } from './typography';
import { themes, ThemeName, DEFAULT_THEME } from './themes';

export interface Theme {
  isDark: boolean;
  colors: ColorPalette;
  typography: Typography;
  spacing: Spacing;
  shadows: Shadows;
  gradients: Gradients;
  
  // Button Styles
  buttons: {
    primary: any;
    secondary: any;
    outline: any;
    gold: any;
    danger: any;
    text: any;
  };
  
  // Card Styles
  cards: {
    default: any;
    premium: any;
    elevated: any;
    flat: any;
  };
}

export const createTheme = (isDark: boolean = false): Theme => {
  const colors = getColors(isDark);
  const typography = createTypography();
  const spacing = createSpacing();
  const shadows = createShadows(isDark);
  const gradients = createGradients(colors);
  
  return {
    isDark,
    colors,
    typography,
    spacing,
    shadows,
    gradients,
    
    // Button Styles
    buttons: {
      primary: {
        backgroundColor: colors.primaryGreen,
        paddingHorizontal: spacing.padding.lg,
        paddingVertical: spacing.padding.md,
        borderRadius: spacing.borderRadius.lg,
        ...shadows.button,
      },
      secondary: {
        backgroundColor: colors.softGray,
        paddingHorizontal: spacing.padding.lg,
        paddingVertical: spacing.padding.md,
        borderRadius: spacing.borderRadius.lg,
        ...shadows.sm,
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: colors.primaryGreen,
        paddingHorizontal: spacing.padding.lg,
        paddingVertical: spacing.padding.md,
        borderRadius: spacing.borderRadius.lg,
      },
      gold: {
        backgroundColor: colors.accentGold,
        paddingHorizontal: spacing.padding.lg,
        paddingVertical: spacing.padding.md,
        borderRadius: spacing.borderRadius.xl,
        ...shadows.accent,
      },
      danger: {
        backgroundColor: colors.errorColor,
        paddingHorizontal: spacing.padding.lg,
        paddingVertical: spacing.padding.md,
        borderRadius: spacing.borderRadius.lg,
        ...shadows.error,
      },
      text: {
        backgroundColor: 'transparent',
        paddingHorizontal: spacing.padding.sm,
        paddingVertical: spacing.padding.xs,
      },
    },
    
    // Card Styles
    cards: {
      default: {
        backgroundColor: colors.cardBackground,
        borderRadius: spacing.borderRadius.xl,
        padding: spacing.cardPadding.md,
        ...shadows.card,
      },
      premium: {
        backgroundColor: colors.cardBackground,
        borderRadius: spacing.borderRadius.xl,
        padding: spacing.cardPadding.lg,
        borderWidth: 2,
        borderColor: colors.accentGold,
        ...shadows.lg,
      },
      elevated: {
        backgroundColor: colors.cardBackground,
        borderRadius: spacing.borderRadius.lg,
        padding: spacing.cardPadding.md,
        ...shadows.floating,
      },
      flat: {
        backgroundColor: colors.surfaceLight,
        borderRadius: spacing.borderRadius.md,
        padding: spacing.cardPadding.sm,
        ...shadows.none,
      },
    },
  };
};

// Export default themes
export const lightTheme = createTheme(false);
export const darkTheme = createTheme(true);

// Export theme selection utilities
export { themes, type ThemeName, DEFAULT_THEME } from './themes';

export const createThemeForName = (themeName: ThemeName, isDark: boolean = false): Theme => {
  const themeDefinition = themes[themeName];
  if (!themeDefinition) {
    console.warn(`Theme "${themeName}" not found, falling back to default`);
    return createThemeForName(DEFAULT_THEME, isDark);
  }
  
  const colors = themeDefinition.getColors(isDark);
  const typography = createTypography();
  const spacing = createSpacing();
  const shadows = createShadows(isDark);
  const gradients = themeDefinition.createGradients(colors);
  
  return {
    isDark,
    colors,
    typography,
    spacing,
    shadows,
    gradients,
    
    // Button Styles
    buttons: {
      primary: {
        backgroundColor: colors.primaryGreen,
        paddingHorizontal: spacing.padding.lg,
        paddingVertical: spacing.padding.md,
        borderRadius: spacing.borderRadius.lg,
        ...shadows.button,
      },
      secondary: {
        backgroundColor: colors.softGray,
        paddingHorizontal: spacing.padding.lg,
        paddingVertical: spacing.padding.md,
        borderRadius: spacing.borderRadius.lg,
        ...shadows.sm,
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: colors.primaryGreen,
        paddingHorizontal: spacing.padding.lg,
        paddingVertical: spacing.padding.md,
        borderRadius: spacing.borderRadius.lg,
      },
      gold: {
        backgroundColor: colors.accentGold,
        paddingHorizontal: spacing.padding.lg,
        paddingVertical: spacing.padding.md,
        borderRadius: spacing.borderRadius.xl,
        ...shadows.accent,
      },
      danger: {
        backgroundColor: colors.errorColor,
        paddingHorizontal: spacing.padding.lg,
        paddingVertical: spacing.padding.md,
        borderRadius: spacing.borderRadius.lg,
        ...shadows.error,
      },
      text: {
        backgroundColor: 'transparent',
        paddingHorizontal: spacing.padding.sm,
        paddingVertical: spacing.padding.xs,
      },
    },
    
    // Card Styles
    cards: {
      default: {
        backgroundColor: colors.cardBackground,
        borderRadius: spacing.borderRadius.xl,
        padding: spacing.cardPadding.md,
        ...shadows.card,
      },
      premium: {
        backgroundColor: colors.cardBackground,
        borderRadius: spacing.borderRadius.xl,
        padding: spacing.cardPadding.lg,
        borderWidth: 2,
        borderColor: colors.accentGold,
        ...shadows.lg,
      },
      elevated: {
        backgroundColor: colors.cardBackground,
        borderRadius: spacing.borderRadius.lg,
        padding: spacing.cardPadding.md,
        ...shadows.floating,
      },
      flat: {
        backgroundColor: colors.surfaceLight,
        borderRadius: spacing.borderRadius.md,
        padding: spacing.cardPadding.sm,
        ...shadows.none,
      },
    },
  };
};

// Export all theme-related types and utilities
export * from './colors';
export * from './gradients';
export * from './responsive';
export * from './shadows';
export * from './spacing';
export * from './typography';