// src/core/theme/themes/energyOrange/gradients.ts

import { ColorPalette } from './colors';

export interface GradientConfig {
  colors: readonly [string, string, ...string[]];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
}

export interface Gradients {
  primary: GradientConfig;
  header: GradientConfig;
  gold: GradientConfig;
  soft: GradientConfig;
  radial: GradientConfig;
  success: GradientConfig;
  error: GradientConfig;
  warning: GradientConfig;
  tasbihBackground: GradientConfig;
}

export const createGradients = (colors: ColorPalette): Gradients => ({
  primary: {
    colors: ['#FF9800', '#D4AF37'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0, 1],
  },
  header: {
    colors: ['#FF9800', '#D4AF37'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0, 1],
  },
  gold: {
    colors: [colors.accentGold, colors.lightGold] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0, 1],
  },
  soft: {
    colors: ['#FFFFFF', '#FFF9C4'] as const,
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
    locations: [0, 1],
  },
  radial: {
    colors: ['#FFA726', '#FF9800', '#F57C00'] as const,
    start: { x: 0.5, y: 0.5 },
    end: { x: 1, y: 1 },
    locations: [0, 0.7, 1],
  },
  success: {
    colors: ['#2E7D32', '#1B5E20'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0, 1],
  },
  error: {
    colors: ['#D32F2F', '#B71C1C'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0, 1],
  },
  warning: {
    colors: ['#FF8F00', '#F57C00'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0, 1],
  },
  tasbihBackground: {
    colors: [
      '#FF9800',
      '#FFB74D',
      '#FFA726',
      '#D4AF37',
    ] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0, 0.4, 0.8, 1],
  },
});
