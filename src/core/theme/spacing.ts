// src/core/theme/spacing.ts

import { moderateScale } from './responsive';

export interface Spacing {
  // Base spacing scale (8px)
  xs: number;      // 4px
  sm: number;      // 8px
  md: number;      // 16px
  lg: number;      // 24px
  xl: number;      // 32px
  xxl: number;     // 40px
  xxxl: number;    // 48px
  
  // Custom spacing
  tiny: number;    // 2px
  huge: number;    // 64px
  massive: number; // 80px
  
  // Padding presets
  padding: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  
  // Margin presets
  margin: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  
  // Border radius
  borderRadius: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: number;
  };
  
  // Icon sizes
  iconSize: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  
  // Button heights
  buttonHeight: {
    sm: number;
    md: number;
    lg: number;
  };
  
  // Input heights
  inputHeight: {
    sm: number;
    md: number;
    lg: number;
  };
  
  // Card padding
  cardPadding: {
    sm: number;
    md: number;
    lg: number;
  };
  
  // Section spacing
  sectionSpacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };
}

export const createSpacing = (): Spacing => ({
  // Base spacing scale
  xs: moderateScale(4),
  sm: moderateScale(8),
  md: moderateScale(16),
  lg: moderateScale(24),
  xl: moderateScale(32),
  xxl: moderateScale(40),
  xxxl: moderateScale(48),
  
  // Custom spacing
  tiny: moderateScale(2),
  huge: moderateScale(64),
  massive: moderateScale(80),
  
  // Padding presets
  padding: {
    xs: moderateScale(8),
    sm: moderateScale(12),
    md: moderateScale(16),
    lg: moderateScale(20),
    xl: moderateScale(24),
  },
  
  // Margin presets
  margin: {
    xs: moderateScale(4),
    sm: moderateScale(8),
    md: moderateScale(12),
    lg: moderateScale(16),
    xl: moderateScale(20),
  },
  
  // Border radius
  borderRadius: {
    xs: moderateScale(4),
    sm: moderateScale(8),
    md: moderateScale(12),
    lg: moderateScale(16),
    xl: moderateScale(24),
    full: 9999,
  },
  
  // Icon sizes
  iconSize: {
    xs: moderateScale(16),
    sm: moderateScale(20),
    md: moderateScale(24),
    lg: moderateScale(32),
    xl: moderateScale(40),
  },
  
  // Button heights
  buttonHeight: {
    sm: moderateScale(40),
    md: moderateScale(48),
    lg: moderateScale(56),
  },
  
  // Input heights
  inputHeight: {
    sm: moderateScale(40),
    md: moderateScale(48),
    lg: moderateScale(56),
  },
  
  // Card padding
  cardPadding: {
    sm: moderateScale(12),
    md: moderateScale(16),
    lg: moderateScale(20),
  },
  
  // Section spacing
  sectionSpacing: {
    xs: moderateScale(8),
    sm: moderateScale(16),
    md: moderateScale(24),
    lg: moderateScale(32),
  },
});