// src/core/theme/themes/index.ts
// Central theme definitions and exports

import { ColorPalette as OriginalColorPalette, getColors as getOriginalColors } from './original/colors';
import { ColorPalette as EnergyOrangeColorPalette, getColors as getEnergyOrangeColors } from './CosmicOrange/colors';
import { ColorPalette as NatureProColorPalette, getColors as getNatureProColors } from './LightGreen/colors';
import { ColorPalette as BoldImpactColorPalette, getColors as getBoldImpactColors } from './Red/colors';
import { ColorPalette as CreativeSunsetColorPalette, getColors as getCreativeSunsetColors } from './SunsetOrange/colors';
import { ColorPalette as OceanBreezeColorPalette, getColors as getOceanBreezeColors } from './OceanBlue/colors';
import { ColorPalette as CalmPastelColorPalette, getColors as getCalmPastelColors } from './Pastel/colors';
import { ColorPalette as EarthyWarmColorPalette, getColors as getEarthyWarmColors } from './Earthy/colors';
import { ColorPalette as SunsetGradientColorPalette, getColors as getSunsetGradientColors } from './sunsetGradient/colors';
import { ColorPalette as AuroraGradientColorPalette, getColors as getAuroraGradientColors } from './auroraGradient/colors';
import { ColorPalette as OceanGradientColorPalette, getColors as getOceanGradientColors } from './oceanGradient/colors';
import { ColorPalette as MidnightGradientColorPalette, getColors as getMidnightGradientColors } from './midnightGradient/colors';

import { createGradients as createOriginalGradients } from './original/gradients';
import { createGradients as createEnergyOrangeGradients } from './CosmicOrange/gradients';
import { createGradients as createNatureProGradients } from './LightGreen/gradients';
import { createGradients as createBoldImpactGradients } from './Red/gradients';
import { createGradients as createCreativeSunsetGradients } from './SunsetOrange/gradients';
import { createGradients as createOceanBreezeGradients } from './OceanBlue/gradients';
import { createGradients as createCalmPastelGradients } from './Pastel/gradients';
import { createGradients as createEarthyWarmGradients } from './Earthy/gradients';
import { createGradients as createSunsetGradientGradients } from './sunsetGradient/gradients';
import { createGradients as createAuroraGradientGradients } from './auroraGradient/gradients';
import { createGradients as createOceanGradientGradients } from './oceanGradient/gradients';
import { createGradients as createMidnightGradientGradients } from './midnightGradient/gradients';
export type ColorPalette = OriginalColorPalette | EnergyOrangeColorPalette | NatureProColorPalette | BoldImpactColorPalette | CreativeSunsetColorPalette | OceanBreezeColorPalette | CalmPastelColorPalette | EarthyWarmColorPalette | SunsetGradientColorPalette | AuroraGradientColorPalette | OceanGradientColorPalette | MidnightGradientColorPalette;

export type ThemeName = 
  | 'original' 
  | 'CosmicOrange' 
  | 'LightGreen' 
  | 'Red'
  | 'sunsetGradient'
  | 'auroraGradient'
  | 'oceanGradient'
  | 'midnightGradient' 
  | 'SunsetOrange' 
  | 'OceanBlue'  
  | 'Pastel' 
  | 'Earthy';

export interface ThemeDefinition {
  name: ThemeName;
  displayName: string;
  getColors: (isDark: boolean) => ColorPalette;
  createGradients: (colors: any) => any;
}

export const themes: Record<ThemeName, ThemeDefinition> = {
  original: {
    name: 'original',
    displayName: 'Original Theme',
    getColors: getOriginalColors,
    createGradients: createOriginalGradients,
  },
  CosmicOrange: {
    name: 'CosmicOrange',
    displayName: 'Cosmic Orange',
    getColors: getEnergyOrangeColors,
    createGradients: createEnergyOrangeGradients,
  },
  LightGreen: {
    name: 'LightGreen',
    displayName: 'Light Green',
    getColors: getNatureProColors,
    createGradients: createNatureProGradients,
  },
  Red: {
    name: 'Red',
    displayName: 'Red',
    getColors: getBoldImpactColors,
    createGradients: createBoldImpactGradients,
  },
  SunsetOrange: {
    name: 'SunsetOrange',
    displayName: 'Sunset Orange',
    getColors: getCreativeSunsetColors,
    createGradients: createCreativeSunsetGradients,
  },
  OceanBlue: {
    name: 'OceanBlue',
    displayName: 'Ocean Blue',
    getColors: getOceanBreezeColors,
    createGradients: createOceanBreezeGradients,
  },

  Pastel: {
    name: 'Pastel',
    displayName: 'Pastel',
    getColors: getCalmPastelColors,
    createGradients: createCalmPastelGradients,
  },
  Earthy: {
    name: 'Earthy',
    displayName: 'Earthy',
    getColors: getEarthyWarmColors,
    createGradients: createEarthyWarmGradients,
  },
  sunsetGradient: {
    name: 'sunsetGradient',
    displayName: 'Sunset Gradient',
    getColors: getSunsetGradientColors,
    createGradients: createSunsetGradientGradients,
  },
  auroraGradient: {
    name: 'auroraGradient',
    displayName: 'Aurora Gradient',
    getColors: getAuroraGradientColors,
    createGradients: createAuroraGradientGradients,
  },
  oceanGradient: {
    name: 'oceanGradient',
    displayName: 'Ocean Gradient',
    getColors: getOceanGradientColors,
    createGradients: createOceanGradientGradients,
  },
  midnightGradient: {
    name: 'midnightGradient',
    displayName: 'Midnight Gradient',
    getColors: getMidnightGradientColors,
    createGradients: createMidnightGradientGradients,
  },
};

export const DEFAULT_THEME: ThemeName = 'original';
