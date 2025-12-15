// src/core/theme/themes/midnightGradient/gradients.ts

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
    colors: ['#1E293B', '#334155', '#0F172A'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0, 0.5, 1],
  },
  header: {
    colors: ['#1E293B', '#334155', '#0F172A'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0, 0.5, 1],
  },
  gold: {
    colors: [colors.accentGold, colors.lightGold] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0, 1],
  },
  soft: {
    colors: ['#FFFFFF', '#E2E8F0'] as const,
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
    locations: [0, 1],
  },
  radial: {
    colors: ['#475569', '#334155', '#0F172A'] as const,
    start: { x: 0.5, y: 0.5 },
    end: { x: 1, y: 1 },
    locations: [0, 0.5, 1],
  },
  success: {
    colors: ['#059669', '#065F46'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0, 1],
  },
  error: {
    colors: ['#DC2626', '#991B1B'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0, 1],
  },
  warning: {
    colors: ['#F59E0B', '#D97706'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0, 1],
  },
  tasbihBackground: {
    colors: ['#475569', '#334155', '#0F172A'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0, 0.5, 1],
  },
});
