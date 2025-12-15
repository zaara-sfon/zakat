// src/core/theme/responsive.ts

import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base dimensions (iPhone 11 Pro)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

/**
 * Width percentage to pixel
 * @param widthPercent - percentage of screen width
 * @returns pixel value
 */
export const wp = (widthPercent: number): number => {
  const elemWidth = (typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent));
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * elemWidth) / 100);
};

/**
 * Height percentage to pixel
 * @param heightPercent - percentage of screen height
 * @returns pixel value
 */
export const hp = (heightPercent: number): number => {
  const elemHeight = (typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent));
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / 100);
};

/**
 * Scale font size based on screen width
 * @param size - base font size
 * @returns scaled font size
 */
export const moderateScale = (size: number, factor: number = 0.5): number => {
  const scale = SCREEN_WIDTH / BASE_WIDTH;
  return PixelRatio.roundToNearestPixel(size + (scale - 1) * size * factor);
};

/**
 * Vertical scale based on screen height
 * @param size - base size
 * @returns scaled size
 */
export const verticalScale = (size: number): number => {
  const scale = SCREEN_HEIGHT / BASE_HEIGHT;
  return PixelRatio.roundToNearestPixel(size * scale);
};

/**
 * Horizontal scale based on screen width
 * @param size - base size
 * @returns scaled size
 */
export const horizontalScale = (size: number): number => {
  const scale = SCREEN_WIDTH / BASE_WIDTH;
  return PixelRatio.roundToNearestPixel(size * scale);
};

/**
 * Check if device is a tablet
 */
export const isTablet = (): boolean => {
  const pixelDensity = PixelRatio.get();
  const adjustedWidth = SCREEN_WIDTH * pixelDensity;
  const adjustedHeight = SCREEN_HEIGHT * pixelDensity;
  
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  } else if (pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)) {
    return true;
  } else {
    return false;
  }
};

/**
 * Check if device is small (iPhone SE size)
 */
export const isSmallDevice = (): boolean => {
  return SCREEN_WIDTH <= 375 && SCREEN_HEIGHT <= 667;
};

/**
 * Check if device is large (Plus/Max size)
 */
export const isLargeDevice = (): boolean => {
  return SCREEN_WIDTH >= 414;
};

/**
 * Get responsive padding based on device size
 */
export const getResponsivePadding = (): number => {
  if (isTablet()) return moderateScale(24);
  if (isSmallDevice()) return moderateScale(12);
  return moderateScale(16);
};

/**
 * Get responsive margin based on device size
 */
export const getResponsiveMargin = (): number => {
  if (isTablet()) return moderateScale(20);
  if (isSmallDevice()) return moderateScale(8);
  return moderateScale(12);
};

/**
 * Device breakpoints
 */
export const breakpoints = {
  small: 320,
  medium: 375,
  large: 414,
  tablet: 768,
  desktop: 1024,
};

/**
 * Check current breakpoint
 */
export const getCurrentBreakpoint = (): string => {
  if (SCREEN_WIDTH >= breakpoints.desktop) return 'desktop';
  if (SCREEN_WIDTH >= breakpoints.tablet) return 'tablet';
  if (SCREEN_WIDTH >= breakpoints.large) return 'large';
  if (SCREEN_WIDTH >= breakpoints.medium) return 'medium';
  return 'small';
};

/**
 * Responsive value selector
 */
export const selectResponsiveValue = <T,>(values: {
  small?: T;
  medium?: T;
  large?: T;
  tablet?: T;
  desktop?: T;
  default: T;
}): T => {
  const breakpoint = getCurrentBreakpoint();
  return values[breakpoint as keyof typeof values] || values.default;
};

/**
 * Platform-specific value selector
 */
export const platformSelect = <T,>(values: {
  ios?: T;
  android?: T;
  default: T;
}): T => {
  if (Platform.OS === 'ios' && values.ios !== undefined) return values.ios;
  if (Platform.OS === 'android' && values.android !== undefined) return values.android;
  return values.default;
};

/**
 * Responsive utilities object for easy access
 */
export const responsive = {
  wp,
  hp,
  moderateScale,
  verticalScale,
  horizontalScale,
  isTablet,
  isSmallDevice,
  isLargeDevice,
  getResponsivePadding,
  getResponsiveMargin,
  getCurrentBreakpoint,
  selectResponsiveValue,
  platformSelect,
  screenWidth: SCREEN_WIDTH,
  screenHeight: SCREEN_HEIGHT,
};

export default responsive;