// src/components/ThemeSelectorModal.tsx
import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  Easing,
} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { useTheme, useAppTheme } from '../core/theme/ThemeProvider';
import { themes, ThemeName } from '../core/theme/themes';

interface ThemeSelectorModalProps {
  visible: boolean;
  onClose: () => void;
}

export const ThemeSelectorModal: React.FC<ThemeSelectorModalProps> = ({ visible, onClose }) => {
  const { themeName, setThemeName, isDark, toggleTheme } = useTheme();
  const appTheme = useAppTheme();
  const slideAnim = useRef(new Animated.Value(-400)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : -400,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [visible, slideAnim]);

  const handleThemeSelect = async (newTheme: ThemeName) => {
    await setThemeName(newTheme);
    onClose();
  };

  const themeList = Object.entries(themes).map(([key, value]) => ({
    id: key,
    ...value,
  }));

  return (
    <>
      {/* Backdrop */}
      {visible && (
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={onClose}
        />
      )}

      {/* Modal */}
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: appTheme.colors.cardBackground,
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        {/* Header */}
        <View
          style={[
            styles.header,
            { borderBottomColor: appTheme.colors.borderGray },
          ]}
        >
          <Text style={[styles.title, { color: appTheme.colors.primaryGreen }]}>
            Themes
          </Text>
          <TouchableOpacity onPress={onClose}>
            <Octicons name="x" size={24} color={appTheme.colors.textDark} />
          </TouchableOpacity>
        </View>

        {/* Current Theme Info */}
        <View
          style={[
            styles.currentThemeInfo,
            { backgroundColor: appTheme.colors.surfaceLight },
          ]}
        >
          <Text style={[styles.currentLabel, { color: appTheme.colors.textMedium }]}>
            Current:
          </Text>
          <Text style={[styles.currentTheme, { color: appTheme.colors.accentGold }]}>
            {themes[themeName].displayName}
          </Text>
        </View>

        {/* Themes List */}
        <ScrollView style={styles.themesList} showsVerticalScrollIndicator={false}>
          {themeList.map((theme) => {
            const isSelected = themeName === theme.name;
            const themeColors = theme.getColors(isDark);

            return (
              <TouchableOpacity
                key={theme.id}
                style={[
                  styles.themeItem,
                  {
                    backgroundColor: isSelected
                      ? appTheme.colors.surfaceLight
                      : 'transparent',
                    borderLeftColor: isSelected
                      ? appTheme.colors.accentGold
                      : 'transparent',
                  },
                ]}
                onPress={() => handleThemeSelect(theme.name as ThemeName)}
                activeOpacity={0.7}
              >
                <View style={styles.themePreview}>
                  <View
                    style={[
                      styles.previewColor,
                      { backgroundColor: themeColors.primaryGreen },
                    ]}
                  />
                  <View
                    style={[
                      styles.previewColor,
                      { backgroundColor: themeColors.accentGold },
                    ]}
                  />
                </View>

                <View style={styles.themeInfo}>
                  <Text style={[styles.themeName, { color: themeColors.textDark }]}>
                    {theme.displayName}
                  </Text>
                </View>

                {isSelected && (
                  <Octicons
                    name="check-circle-fill"
                    size={20}
                    color={appTheme.colors.accentGold}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Dark Mode Toggle */}
        <View
          style={[
            styles.footer,
            { borderTopColor: appTheme.colors.borderGray },
          ]}
        >
          <View style={styles.toggleContainer}>
            <Octicons
              name={isDark ? 'moon' : 'sun'}
              size={18}
              color={appTheme.colors.primaryGreen}
            />
            <Text style={[styles.toggleLabel, { color: appTheme.colors.textMedium }]}>
              {isDark ? 'Dark Mode' : 'Light Mode'}
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              {
                backgroundColor: isDark
                  ? appTheme.colors.primaryGreen
                  : appTheme.colors.surfaceLight,
              },
            ]}
            onPress={toggleTheme}
          >
            <Text style={[styles.toggleText, { color: isDark ? '#FFF' : appTheme.colors.textDark }]}>
              {isDark ? 'ON' : 'OFF'}
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 998,
  },
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 320,
    zIndex: 999,
    flexDirection: 'column',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 2, height: 0 },
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  currentThemeInfo: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 12,
    marginVertical: 12,
    borderRadius: 10,
  },
  currentLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 4,
  },
  currentTheme: {
    fontSize: 16,
    fontWeight: '700',
  },
  themesList: {
    flex: 1,
  },
  themeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderLeftWidth: 3,
    gap: 12,
  },
  themePreview: {
    flexDirection: 'row',
    gap: 4,
  },
  previewColor: {
    width: 20,
    height: 20,
    borderRadius: 4,
  },
  themeInfo: {
    flex: 1,
  },
  themeName: {
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  toggleLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  toggleButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
  },
  toggleText: {
    fontSize: 12,
    fontWeight: '700',
  },
});
