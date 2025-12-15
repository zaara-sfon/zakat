// src/core/theme/themes/index.ts
// Central theme definitions and exports

import { ColorPalette as OriginalColorPalette, getColors as getOriginalColors } from './original/colors';
import { ColorPalette as EnergyOrangeColorPalette, getColors as getEnergyOrangeColors } from './energyOrange/colors';
import { ColorPalette as NatureProColorPalette, getColors as getNatureProColors } from './naturePro/colors';
import { ColorPalette as BoldImpactColorPalette, getColors as getBoldImpactColors } from './boldImpact/colors';
import { ColorPalette as CreativeSunsetColorPalette, getColors as getCreativeSunsetColors } from './creativeSunset/colors';
import { ColorPalette as OceanBreezeColorPalette, getColors as getOceanBreezeColors } from './oceanBreeze/colors';
import { ColorPalette as CalmPastelColorPalette, getColors as getCalmPastelColors } from './calmPastel/colors';
import { ColorPalette as EarthyWarmColorPalette, getColors as getEarthyWarmColors } from './earthyWarm/colors';
import { ColorPalette as SunsetGradientColorPalette, getColors as getSunsetGradientColors } from './sunsetGradient/colors';
import { ColorPalette as AuroraGradientColorPalette, getColors as getAuroraGradientColors } from './auroraGradient/colors';
import { ColorPalette as OceanGradientColorPalette, getColors as getOceanGradientColors } from './oceanGradient/colors';
import { ColorPalette as MidnightGradientColorPalette, getColors as getMidnightGradientColors } from './midnightGradient/colors';

import { createGradients as createOriginalGradients } from './original/gradients';
import { createGradients as createEnergyOrangeGradients } from './energyOrange/gradients';
import { createGradients as createNatureProGradients } from './naturePro/gradients';
import { createGradients as createBoldImpactGradients } from './boldImpact/gradients';
import { createGradients as createCreativeSunsetGradients } from './creativeSunset/gradients';
import { createGradients as createOceanBreezeGradients } from './oceanBreeze/gradients';
import { createGradients as createCalmPastelGradients } from './calmPastel/gradients';
import { createGradients as createEarthyWarmGradients } from './earthyWarm/gradients';
import { createGradients as createSunsetGradientGradients } from './sunsetGradient/gradients';
import { createGradients as createAuroraGradientGradients } from './auroraGradient/gradients';
import { createGradients as createOceanGradientGradients } from './oceanGradient/gradients';
import { createGradients as createMidnightGradientGradients } from './midnightGradient/gradients';
export type ColorPalette = OriginalColorPalette | EnergyOrangeColorPalette | NatureProColorPalette | BoldImpactColorPalette | CreativeSunsetColorPalette | OceanBreezeColorPalette | CalmPastelColorPalette | EarthyWarmColorPalette | SunsetGradientColorPalette | AuroraGradientColorPalette | OceanGradientColorPalette | MidnightGradientColorPalette;

export type ThemeName = 
  | 'original' 
  | 'energyOrange' 
  | 'naturePro' 
  | 'boldImpact'
  | 'sunsetGradient'
  | 'auroraGradient'
  | 'oceanGradient'
  | 'midnightGradient' 
  | 'creativeSunset' 
  | 'oceanBreeze'  
  | 'calmPastel' 
  | 'earthyWarm';

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
  energyOrange: {
    name: 'energyOrange',
    displayName: 'Cosmic Orange',
    getColors: getEnergyOrangeColors,
    createGradients: createEnergyOrangeGradients,
  },
  naturePro: {
    name: 'naturePro',
    displayName: 'Light Green',
    getColors: getNatureProColors,
    createGradients: createNatureProGradients,
  },
  boldImpact: {
    name: 'boldImpact',
    displayName: 'Red',
    getColors: getBoldImpactColors,
    createGradients: createBoldImpactGradients,
  },
  creativeSunset: {
    name: 'creativeSunset',
    displayName: 'Sunset Orange',
    getColors: getCreativeSunsetColors,
    createGradients: createCreativeSunsetGradients,
  },
  oceanBreeze: {
    name: 'oceanBreeze',
    displayName: 'Ocean Blue',
    getColors: getOceanBreezeColors,
    createGradients: createOceanBreezeGradients,
  },

  calmPastel: {
    name: 'calmPastel',
    displayName: 'Pastel',
    getColors: getCalmPastelColors,
    createGradients: createCalmPastelGradients,
  },
  earthyWarm: {
    name: 'earthyWarm',
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
