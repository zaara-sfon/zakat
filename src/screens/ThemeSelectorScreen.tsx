// src/screens/ThemeSelectorScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  FlatList,
  Dimensions,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Octicons } from '@expo/vector-icons';
import { useTheme, useAppTheme } from '../core/theme/ThemeProvider';
import { themes, ThemeName } from '../core/theme/themes';
import { useNavigation } from '../navigation/NavigationContext';

const SCREEN_WIDTH = Dimensions.get('window').width;
const THEME_CARD_WIDTH = (SCREEN_WIDTH - 48) / 2;

export const ThemeSelectorScreen: React.FC = () => {
  const { themeName, setThemeName, isDark, toggleTheme, themeMode, setThemeMode } = useTheme();
  const appTheme = useAppTheme();
  const { navigate } = useNavigation();
  const [selectedMode, setSelectedMode] = useState<'light' | 'dark' | 'system'>(themeMode as any);

  const themeList = Object.entries(themes).map(([key, value]) => ({
    id: key,
    ...value,
  }));

  const renderThemeCard = ({ item }: { item: any }) => {
    const isSelected = themeName === item.name;
    const themeColors = item.getColors(isDark);

    return (
      <TouchableOpacity
        style={[
          styles.themeCard,
          {
            backgroundColor: themeColors.cardBackground,
            borderColor: isSelected ? appTheme.colors.accentGold : appTheme.colors.borderGray,
            borderWidth: isSelected ? 3 : 2,
          },
        ]}
        onPress={() => setThemeName(item.name as ThemeName)}
        activeOpacity={0.7}
      >
        {isSelected && (
          <View style={styles.selectedBadge}>
            <Octicons name="check-circle-fill" size={24} color={appTheme.colors.accentGold} />
          </View>
        )}

        {/* Color Preview */}
        <View style={styles.colorPreview}>
          <View
            style={[
              styles.colorBox,
              { backgroundColor: themeColors.primaryGreen },
            ]}
          />
          <View
            style={[
              styles.colorBox,
              { backgroundColor: themeColors.accentGold },
            ]}
          />
          <View
            style={[
              styles.colorBox,
              { backgroundColor: themeColors.textDark },
            ]}
          />
        </View>

        {/* Theme Name */}
        <Text style={[styles.themeName, { color: themeColors.textDark }]}>
          {item.displayName}
        </Text>

        {/* Theme Description */}
        <Text style={[styles.themeDescription, { color: themeColors.textLight }]}>
          {getThemeDescription(item.name)}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleModeChange = async (mode: 'light' | 'dark' | 'system') => {
    setSelectedMode(mode);
    await setThemeMode(mode);
  };

  return (
    <View style={[styles.container, { backgroundColor: appTheme.colors.pageBackground }]}>
      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: appTheme.colors.primaryGreen },
        ]}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigate('ZakatCalculator')}
        >
          <Octicons name="chevron-left" color={appTheme.colors.white} size={24} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Theme Selector</Text>
          <Text style={styles.headerSubtitle}>Customize your app appearance</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Theme Mode Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: appTheme.colors.primaryGreen }]}>
            Light / Dark Mode
          </Text>
          <View style={styles.modeContainer}>
            {(['light', 'dark', 'system'] as const).map((mode) => (
              <TouchableOpacity
                key={mode}
                style={[
                  styles.modeButton,
                  {
                    backgroundColor:
                      selectedMode === mode
                        ? appTheme.colors.primaryGreen
                        : appTheme.colors.surfaceLight,
                    borderColor: appTheme.colors.borderGray,
                  },
                ]}
                onPress={() => handleModeChange(mode)}
              >
                <Octicons
                  name={
                    mode === 'light' ? 'sun' : mode === 'dark' ? 'moon' : 'device-mobile'
                  }
                  size={20}
                  color={
                    selectedMode === mode
                      ? appTheme.colors.white
                      : appTheme.colors.textMedium
                  }
                />
                <Text
                  style={[
                    styles.modeButtonText,
                    {
                      color:
                        selectedMode === mode
                          ? appTheme.colors.white
                          : appTheme.colors.textMedium,
                    },
                  ]}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Current Theme Info */}
        <View
          style={[
            styles.infoCard,
            { backgroundColor: appTheme.colors.surfaceLight },
          ]}
        >
          <Text style={[styles.infoCardTitle, { color: appTheme.colors.primaryGreen }]}>
            Current Theme
          </Text>
          <Text style={[styles.infoCardValue, { color: appTheme.colors.accentGold }]}>
            {themes[themeName].displayName}
          </Text>
          <Text style={[styles.infoCardSubtitle, { color: appTheme.colors.textMedium }]}>
            {isDark ? 'Dark Mode' : 'Light Mode'} • {selectedMode === 'system' ? 'Auto' : 'Manual'}
          </Text>
        </View>

        {/* Themes Grid Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: appTheme.colors.primaryGreen }]}>
            Select a Theme
          </Text>
          <FlatList
            data={themeList}
            renderItem={renderThemeCard}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.gridRow}
            scrollEnabled={false}
          />
        </View>
        
        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
};

// Helper function to get theme descriptions
const getThemeDescription = (themeName: ThemeName): string => {
  const descriptions: Record<ThemeName, string> = {
    original: 'Classic & professional',
    energyOrange: 'Vibrant & energetic',
    naturePro: 'Natural & organic',
    boldImpact: 'Powerful & striking',
    creativeSunset: 'Warm & artistic',
    oceanBreeze: 'Calm & serene',
    calmPastel: 'Soft & soothing',
    earthyWarm: 'Cozy & inviting',
    sunsetGradient: 'Orange to purple gradient',
    auroraGradient: 'Pink to purple gradient',
    oceanGradient: 'Blue to teal gradient',
    midnightGradient: 'Deep blue gradient',
  };
  return descriptions[themeName] || '';
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 8,
    marginRight: 12,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  section: {
    paddingHorizontal: 16,
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  modeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  modeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
    gap: 8,
  },
  modeButtonText: {
    fontSize: 13,
    fontWeight: '600',
  },
  infoCard: {
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
    marginBottom: 8,
  },
  infoCardTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  infoCardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoCardSubtitle: {
    fontSize: 12,
    fontWeight: '500',
  },
  gridRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 0,
  },
  themeCard: {
    width: THEME_CARD_WIDTH,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 14,
    position: 'relative',
  },
  selectedBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 10,
  },
  colorPreview: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  colorBox: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  themeName: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
    paddingRight: 24,
  },
  themeDescription: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 14,
  },
  featureCard: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  featureList: {
    gap: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  featureIcon: {
    marginTop: 2,
    minWidth: 16,
  },
  featureText: {
    fontSize: 13,
    fontWeight: '500',
    flex: 1,
    lineHeight: 18,
  },
  bottomSpacing: {
    height: 40,
  },
});
