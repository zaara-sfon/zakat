// src/core/theme/themes/oceanGradient/gradients.ts

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
    colors: ['#0369A1', '#0EA5E9', '#06B6D4'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0, 0.5, 1],
  },
  header: {
    colors: ['#0369A1', '#0EA5E9', '#06B6D4'] as const,
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
    colors: ['#FFFFFF', '#CFF0FF'] as const,
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
    locations: [0, 1],
  },
  radial: {
    colors: ['#22D3EE', '#0EA5E9', '#0369A1'] as const,
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
    colors: ['#22D3EE', '#0EA5E9', '#0369A1'] as const,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0, 0.5, 1],
  },
});
