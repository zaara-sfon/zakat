import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Octicons } from '@expo/vector-icons';
import { useTheme, useAppTheme } from '../core/theme/ThemeProvider';
import { useNavigation } from '../navigation/NavigationContext';

type CurrencyType =
  | 'USD'
  | 'EUR'
  | 'GBP'
  | 'JPY'
  | 'AUD'
  | 'CAD'
  | 'CHF'
  | 'CNY'
  | 'INR'
  | 'AED'
  | 'SAR';

interface PriceData {
  gold: Record<CurrencyType, number>;
  silver: Record<CurrencyType, number>;
}

export function ZakatCalculator(): React.JSX.Element {
  const theme = useAppTheme?.();
  // useTheme hook for toggling and theme mode
  const themeContext = useTheme?.();
  const { navigate } = useNavigation();

  const [currency, setCurrency] = useState<CurrencyType>('USD');
  const [prices, setPrices] = useState<PriceData | null>(null);

  const [goldPricePerGram, setGoldPricePerGram] = useState<string>('');
  const [silverPricePerGram, setSilverPricePerGram] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const [goldAmount, setGoldAmount] = useState<string>('');
  const [silverAmount, setSilverAmount] = useState<string>('');
  const [unit, setUnit] = useState<'g' | 'kg' | 'oz'>('g');
  const [unitMenuOpen, setUnitMenuOpen] = useState<boolean>(false);
  const unitMenuAnim = useRef(new Animated.Value(0)).current;

  const scrollRef = useRef<ScrollView | null>(null);

  const [cashInHand, setCashInHand] = useState<string>('');
  const [bankBalance, setBankBalance] = useState<string>('');
  const [investments, setInvestments] = useState<string>('');
  const [propertyValue, setPropertyValue] = useState<string>('');
  const [receivables, setReceivables] = useState<string>('');
  const [otherAssets, setOtherAssets] = useState<string>('');

  const [debtsOwed, setDebtsOwed] = useState<string>('');
  const [loans, setLoans] = useState<string>('');
  const [otherLiabilities, setOtherLiabilities] = useState<string>('');

  const [currencyMenuOpen, setCurrencyMenuOpen] = useState<boolean>(false);
  const menuAnim = useRef(new Animated.Value(0)).current;
  const [themeMenuOpen, setThemeMenuOpen] = useState<boolean>(false);
  const themeMenuAnim = useRef(new Animated.Value(0)).current;
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const styles: any = createStyles(theme ?? { colors: {} } as any);

  const parseNumber = (s: string | number | undefined | null): number => {
    if (s === null || s === undefined) return 0;
    if (typeof s === 'number') return isFinite(s) ? s : 0;
    const cleaned = String(s)
      .replace(/[\,\s\u00A0]/g, '')
      .replace(/[^0-9.\-]/g, '');
    const n = parseFloat(cleaned);
    return Number.isFinite(n) ? n : 0;
  };

  useEffect(() => {
    const loadSavedData = async () => {
      try {
        const savedData = await AsyncStorage.getItem('zakatCalculatorData');
        if (savedData) {
          const data = JSON.parse(savedData);
          setCurrency(data.currency ?? 'USD');

          setGoldAmount(data.goldAmount ?? '');
          setSilverAmount(data.silverAmount ?? '');
          setGoldPricePerGram(data.goldPricePerGram ?? '');
          setSilverPricePerGram(data.silverPricePerGram ?? '');

          setCashInHand(data.cashInHand ?? '');
          setBankBalance(data.bankBalance ?? '');
          setInvestments(data.investments ?? '');
          setPropertyValue(data.propertyValue ?? '');
          setReceivables(data.receivables ?? '');
          setOtherAssets(data.otherAssets ?? '');

          setDebtsOwed(data.debtsOwed ?? '');
          setLoans(data.loans ?? '');
          setOtherLiabilities(data.otherLiabilities ?? '');
        }
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    };
    loadSavedData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        const data = {
          currency,
          goldAmount,
          goldPricePerGram,
          silverAmount,
          silverPricePerGram,
          cashInHand,
          bankBalance,
          investments,
          propertyValue,
          receivables,
          otherAssets,
          debtsOwed,
          loans,
          otherLiabilities,
        };
        await AsyncStorage.setItem('zakatCalculatorData', JSON.stringify(data));
      } catch (error) {
        console.error('Error saving data:', error);
      }
    };
    saveData();
  }, [
    currency,
    goldAmount,
    silverAmount,
    goldPricePerGram,
    silverPricePerGram,
    cashInHand,
    bankBalance,
    investments,
    propertyValue,
    receivables,
    otherAssets,
    debtsOwed,
    loans,
    otherLiabilities,
  ]);

  const toGrams = (valueStr: string, u: 'g' | 'kg' | 'oz') => {
    const v = parseNumber(valueStr);
    if (u === 'kg') return v * 1000;
    if (u === 'oz') return v * 28.3495;
    return v;
  };

  const calculateGoldValue = (): number => {
    const goldGrams = toGrams(goldAmount, unit);
    const goldPrice = parseNumber(goldPricePerGram);
    return goldGrams * goldPrice;
  };

  const calculateSilverValue = (): number => {
    const silverGrams = toGrams(silverAmount, unit);
    const silverPrice = parseNumber(silverPricePerGram);
    return silverGrams * silverPrice;
  };

  const calculateMetalsValue = (): number => {
    return calculateGoldValue() + calculateSilverValue();
  };

  const calculateCashPropertyValue = (): number => {
    const cash = parseNumber(cashInHand);
    const bank = parseNumber(bankBalance);
    const invest = parseNumber(investments);
    const propTrade = parseNumber(propertyValue);
    const recv = parseNumber(receivables);
    const other = parseNumber(otherAssets);
    return cash + bank + invest + propTrade + recv + other;
  };

  const calculateTotalLiabilities = (): number => {
    const debts = parseNumber(debtsOwed);
    const loan12m = parseNumber(loans);
    const other = parseNumber(otherLiabilities);
    return debts + loan12m + other;
  };

  const isGoldBelowNisab = (): boolean => {
    const gold = toGrams(goldAmount, unit) ?? 0;
    if (gold >= 87.48) return false;
    return gold > 0 && gold < 87.48;
  };
  const isSilverBelowNisab = (): boolean => {
    const silver = toGrams(silverAmount, unit) ?? 0;
    const gold = toGrams(goldAmount, unit) ?? 0;
    if (gold >= 87.48) return false;
    return silver > 0 && silver < 612.36;
  };

  const goldGrams = toGrams(goldAmount, unit);
  const silverGrams = toGrams(silverAmount, unit);
  const goldValue = calculateGoldValue();
  const silverValue = calculateSilverValue();

  const metalsIncluded =
    (goldGrams >= 87.48 && parseNumber(goldPricePerGram) > 0) ||
    (silverGrams >= 612.36 && parseNumber(silverPricePerGram) > 0);
  const metalsTotal = metalsIncluded ? goldValue + silverValue : 0;
  const cashPropertyTotal = calculateCashPropertyValue();
  const liabilitiesTotal = calculateTotalLiabilities();
  const netTotal = metalsTotal + cashPropertyTotal - liabilitiesTotal;

  const goldPrice = parseNumber(goldPricePerGram);
  const silverPrice = parseNumber(silverPricePerGram);

  const DEFAULT_GOLD_PRICE_PER_GRAM = 60;
  const DEFAULT_SILVER_PRICE_PER_GRAM = 0.8;

  const goldNisabThreshold = goldPrice > 0 ? 87.48 * goldPrice : Number.POSITIVE_INFINITY;
  const silverNisabThreshold = silverPrice > 0 ? 612.36 * silverPrice : Number.POSITIVE_INFINITY;

  let nisabThreshold: number;
  if (goldGrams >= 87.48 && goldPrice > 0) {
    nisabThreshold = goldNisabThreshold;
  } else if (silverGrams >= 612.36 && silverPrice > 0) {
    nisabThreshold = silverNisabThreshold;
  } else if (goldNisabThreshold !== Number.POSITIVE_INFINITY && silverNisabThreshold !== Number.POSITIVE_INFINITY) {
    nisabThreshold = Math.min(goldNisabThreshold, silverNisabThreshold);
  } else if (goldNisabThreshold !== Number.POSITIVE_INFINITY) {
    nisabThreshold = goldNisabThreshold;
  } else if (silverNisabThreshold !== Number.POSITIVE_INFINITY) {
    nisabThreshold = silverNisabThreshold;
  } else {
    nisabThreshold = 0;
  }

  if (nisabThreshold === 0) {
    nisabThreshold = 87.48 * DEFAULT_GOLD_PRICE_PER_GRAM;
  }

  const isWealthAboveNisab = nisabThreshold > 0 ? netTotal >= nisabThreshold : false;
  const zakatAmount = isWealthAboveNisab ? netTotal * 0.025 : 0;

  const currencySymbols: Record<CurrencyType, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    AUD: 'A$',
    CAD: 'C$',
    CHF: 'CHF',
    CNY: '¥',
    INR: '₹',
    AED: 'د.إ',
    SAR: 'ر.س',
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };
  const getCurrencySymbol = (curr: CurrencyType): string => currencySymbols[curr] ?? curr;

  const renderCurrencySelector = (): React.JSX.Element => {
    const currencies: { label: string; value: CurrencyType }[] = [
      { label: 'United States Dollar (USD)', value: 'USD' },
      { label: 'Euro (EUR)', value: 'EUR' },
      { label: 'British Pound (GBP)', value: 'GBP' },
      { label: 'Japanese Yen (JPY)', value: 'JPY' },
      { label: 'Australian Dollar (AUD)', value: 'AUD' },
      { label: 'Canadian Dollar (CAD)', value: 'CAD' },
      { label: 'Swiss Franc (CHF)', value: 'CHF' },
      { label: 'Chinese Yuan (CNY)', value: 'CNY' },
      { label: 'Indian Rupee (INR)', value: 'INR' },
      { label: 'Emirati Dirham (AED)', value: 'AED' },
      { label: 'Saudi Riyal (SAR)', value: 'SAR' },
    ];
    return (
      <View style={styles.currencyPickerContainer}>
        <Text style={styles.currencyLabel}>Currency:</Text>
        <View style={styles.currencyMenuWrapper}>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={() => setCurrencyMenuOpen((prev) => !prev)}
            accessibilityLabel="Open currency menu"
          >
            <Text style={styles.currencyDisplay}>{currency}</Text>
            <Animated.Text
              style={[
                styles.dropdownArrow,
                {
                  transform: [
                    {
                      rotate: menuAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '180deg'],
                      }),
                    },
                  ],
                },
              ]}
            >
              ▼
            </Animated.Text>
          </TouchableOpacity>
          {currencyMenuOpen && (
            <Animated.View
              style={[
                styles.menuContainer,
                {
                  opacity: menuAnim,
                  transform: [
                    {
                      translateY: menuAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-8, 0],
                      }),
                    },
                  ],
                },
              ]}
              accessibilityViewIsModal={true}
            >
              {currencies.map((curr, idx) => (
                <TouchableOpacity
                  key={curr.value}
                  style={[styles.menuItem, focusedIndex === idx ? styles.menuItemFocused : null]}
                  onPress={() => {
                    setCurrency(curr.value);
                    setCurrencyMenuOpen(false);
                  }}
                  onFocus={() => setFocusedIndex(idx)}
                  onBlur={() => setFocusedIndex(null)}
                  accessibilityRole="button"
                  accessibilityLabel={curr.label}
                >
                  <Text style={styles.menuItemText}>{curr.label}</Text>
                </TouchableOpacity>
              ))}
            </Animated.View>
          )}
        </View>
      </View>
    );
  };

  useEffect(() => {
    Animated.timing(menuAnim, {
      toValue: currencyMenuOpen ? 1 : 0,
      duration: 180,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start(() => {
      if (currencyMenuOpen) {
        setFocusedIndex(0);
      } else {
        setFocusedIndex(null);
      }
    });
  }, [currencyMenuOpen, menuAnim]);

  useEffect(() => {
    Animated.timing(themeMenuAnim, {
      toValue: themeMenuOpen ? 1 : 0,
      duration: 160,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [themeMenuOpen, themeMenuAnim]);

  useEffect(() => {
    Animated.timing(unitMenuAnim, {
      toValue: unitMenuOpen ? 1 : 0,
      duration: 160,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [unitMenuOpen, unitMenuAnim]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={theme.gradients.header.colors}
        start={theme.gradients.header.start}
        end={theme.gradients.header.end}
        locations={theme.gradients.header.locations as readonly [number, number, ...number[]] | null | undefined}
        style={styles.header}
      >
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigate('ThemeSelector')}
          >
            <Octicons name="chevron-left" color={theme.colors.white} size={24} />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>Zakat Calculator</Text>
            <Text style={styles.headerSubtitle}>Calculate your Zakat obligation</Text>
          </View>
          <View style={styles.headerRight}>
            {themeMenuOpen && (
              <Animated.View
                style={[
                  styles.menuContainer,
                  {
                    position: 'absolute',
                    right: 0,
                    top: 42,
                    opacity: themeMenuAnim,
                    transform: [
                      {
                        translateY: themeMenuAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-6, 0],
                        }),
                      },
                    ],
                  },
                ]}
              >
                {(['system', 'light', 'dark'] as const).map((mode) => (
                  <TouchableOpacity
                    key={mode}
                    style={styles.menuItem}
                    onPress={() => {
                      themeContext?.setThemeMode?.(mode as any);
                      setThemeMenuOpen(false);
                    }}
                  >
                    <Text style={styles.menuItemText}>{mode[0].toUpperCase() + mode.slice(1)}</Text>
                  </TouchableOpacity>
                ))}
              </Animated.View>
            )}
          </View>
        </View>
      </LinearGradient>

      <ScrollView ref={scrollRef} style={styles.scrollView}>
        {/* Disclaimer card */}
        <View style={[styles.infoCard, styles.disclaimerCard]}>
          <Text style={styles.disclaimerTitle}>⚠️ Disclaimer</Text>
          <Text style={styles.disclaimerText}>
            This Zakat calculator is provided for guidance purposes only. The calculated amount is based on the
            information you enter and general principles of Zakat. It may not account for all individual circumstances
            or specific rulings. For accurate and personalized advice, please consult a qualified Islamic scholar or
            financial advisor.
          </Text>
        </View>
        {/* Hadith */}
        <View style={[styles.infoCard, styles.hadithCard]}>
          <Text style={styles.hadithText}>The Prophet Muhammad ﷺ said:</Text>
          <Text style={styles.hadithQuote}>"Charity does not decrease wealth."</Text>
          <Text style={styles.hadithSource}>(Sahih Muslim)</Text>
        </View>

        {error && (
          <View style={styles.errorBanner}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        {renderCurrencySelector()}

        {/* Gold & Silver */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Gold & Silver Holdings</Text>

          {/* Unit selector */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
            <Text style={[styles.label, styles.unitLabel]}>Unit</Text>
            <View style={{ width: 160 }}>
              <TouchableOpacity
                style={styles.dropdownButton}
                onPress={() => setUnitMenuOpen((prev) => !prev)}
                accessibilityLabel="Open unit menu"
              >
                <Text style={styles.currencyDisplay}>{unit}</Text>
                <Animated.Text
                  style={[
                    styles.dropdownArrow,
                    {
                      transform: [
                        {
                          rotate: unitMenuAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '180deg'],
                          }),
                        },
                      ],
                    },
                  ]}
                >
                  ▼
                </Animated.Text>
              </TouchableOpacity>

              {unitMenuOpen && (
                <Animated.View
                  style={[
                    styles.menuContainer,
                    {
                      opacity: unitMenuAnim,
                      transform: [
                        {
                          translateY: unitMenuAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-6, 0],
                          }),
                        },
                      ],
                    },
                  ]}
                >
                  {(['g', 'kg', 'oz'] as const).map((u, idx) => (
                    <TouchableOpacity
                      key={u}
                      style={styles.menuItem}
                      onPress={() => {
                        setUnit(u);
                        setUnitMenuOpen(false);
                      }}
                    >
                      <Text style={styles.menuItemText}>{u}</Text>
                    </TouchableOpacity>
                  ))}
                </Animated.View>
              )}
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.metalHeading}>Gold</Text>
            <TextInput
              style={styles.input}
              value={goldAmount}
              onChangeText={setGoldAmount}
              placeholder="Quantity of Gold"
              placeholderTextColor={theme.colors.textLight}
              keyboardType="decimal-pad"
            />
            <View style={{ marginTop: 8 }}>
              <TextInput
                style={styles.input}
                value={goldPricePerGram}
                onChangeText={setGoldPricePerGram}
                placeholder="Gold price per g"
                placeholderTextColor={theme.colors.textLight}
                keyboardType="decimal-pad"
              />
            </View>
            {isGoldBelowNisab() && (
              <Text style={styles.warningText}>
                Gold amount below individual nisab (87.48g). It will still be counted in total wealth.
              </Text>
            )}
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.metalHeading}>Silver</Text>
            <TextInput
              style={styles.input}
              value={silverAmount}
              onChangeText={setSilverAmount}
              placeholder="Quantity of Silver"
              placeholderTextColor={theme.colors.textLight}
              keyboardType="decimal-pad"
            />
            <View style={{ marginTop: 8 }}>
              <TextInput
                style={styles.input}
                value={silverPricePerGram}
                onChangeText={setSilverPricePerGram}
                placeholder="Silver price per g"
                placeholderTextColor={theme.colors.textLight}
                keyboardType="decimal-pad"
              />
            </View>
            {isSilverBelowNisab() && (
              <Text style={styles.warningText}>
                Silver amount below individual nisab (612.36g). It will still be counted in total wealth.
              </Text>
            )}
          </View>

          {/* Per-metal totals */}
          <View style={styles.totalsRow}>
            <View style={styles.metalTotalBox}>
              <Text style={styles.metalTotalLabel}>Gold Total</Text>
              <Text style={styles.metalTotalValue}>
                {getCurrencySymbol(currency)}
                {formatCurrency((() => {
                  const g = toGrams(goldAmount, unit);
                  const p = parseNumber(goldPricePerGram);
                  return g * p;
                })())}
              </Text>
            </View>

            <View style={styles.metalTotalBox}>
              <Text style={styles.metalTotalLabel}>Silver Total</Text>
              <Text style={styles.metalTotalValue}>
                {getCurrencySymbol(currency)}
                {formatCurrency((() => {
                  const g = toGrams(silverAmount, unit);
                  const p = parseNumber(silverPricePerGram);
                  return g * p;
                })())}
              </Text>
            </View>
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity
              style={styles.resetBtn}
              onPress={() => {
                setGoldAmount('');
                setSilverAmount('');
                setGoldPricePerGram('');
                setSilverPricePerGram('');
              }}
            >
              <Text style={styles.resetBtnText}>Reset</Text>
            </TouchableOpacity>
            <Text style={styles.totalText}>
              Total: {getCurrencySymbol(currency)}
              {formatCurrency(metalsTotal)}
            </Text>
          </View>
        </View>

        {/* Cash & Property Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cash & Property Assets</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Cash in Hand</Text>
            <TextInput
              style={styles.input}
              value={cashInHand}
              onChangeText={setCashInHand}
              placeholder="Enter amount"
              placeholderTextColor={theme.colors.textLight}
              keyboardType="decimal-pad"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Bank Balance</Text>
            <TextInput
              style={styles.input}
              value={bankBalance}
              onChangeText={setBankBalance}
              placeholder="Enter amount"
              placeholderTextColor={theme.colors.textLight}
              keyboardType="decimal-pad"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Investments</Text>
            <TextInput
              style={styles.input}
              value={investments}
              onChangeText={setInvestments}
              placeholder="Enter amount"
              placeholderTextColor={theme.colors.textLight}
              keyboardType="decimal-pad"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Receivables (expected to be received)</Text>
            <TextInput
              style={styles.input}
              value={receivables}
              onChangeText={setReceivables}
              placeholder="Enter amount"
              placeholderTextColor={theme.colors.textLight}
              keyboardType="decimal-pad"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Property held for sale / investment</Text>
            <TextInput
              style={styles.input}
              value={propertyValue}
              onChangeText={setPropertyValue}
              placeholder="Enter amount"
              placeholderTextColor={theme.colors.textLight}
              keyboardType="decimal-pad"
            />
            <Text style={styles.warningText}>
              Do NOT include your primary residence or fixed personal-use assets here.
            </Text>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Other Assets</Text>
            <TextInput
              style={styles.input}
              value={otherAssets}
              onChangeText={setOtherAssets}
              placeholder="Enter amount"
              placeholderTextColor={theme.colors.textLight}
              keyboardType="decimal-pad"
            />
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity
              style={styles.resetBtn}
              onPress={() => {
                setCashInHand('');
                setBankBalance('');
                setInvestments('');
                setPropertyValue('');
                setReceivables('');
                setOtherAssets('');
              }}
            >
              <Text style={styles.resetBtnText}>Reset</Text>
            </TouchableOpacity>
            <Text style={styles.totalText}>
              Total: {getCurrencySymbol(currency)}
              {formatCurrency(cashPropertyTotal)}
            </Text>
          </View>
        </View>

        {/* Debt & Liabilities Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Debt & Liabilities (due within next 12 lunar months)</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Short-term debts & immediate bills</Text>
            <TextInput
              style={styles.input}
              value={debtsOwed}
              onChangeText={setDebtsOwed}
              placeholder="Enter amount"
              placeholderTextColor={theme.colors.textLight}
              keyboardType="decimal-pad"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Loan installments due (next 12 months)</Text>
            <TextInput
              style={styles.input}
              value={loans}
              onChangeText={setLoans}
              placeholder="Enter amount"
              placeholderTextColor={theme.colors.textLight}
              keyboardType="decimal-pad"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Other liabilities due within year</Text>
            <TextInput
              style={styles.input}
              value={otherLiabilities}
              onChangeText={setOtherLiabilities}
              placeholder="Enter amount"
              placeholderTextColor={theme.colors.textLight}
              keyboardType="decimal-pad"
            />
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity
              style={styles.resetBtn}
              onPress={() => {
                setDebtsOwed('');
                setLoans('');
                setOtherLiabilities('');
              }}
            >
              <Text style={styles.resetBtnText}>Reset</Text>
            </TouchableOpacity>
            <Text style={[styles.totalText, styles.negativeText]}>
              Total: {getCurrencySymbol(currency)}
              {formatCurrency(liabilitiesTotal)}
            </Text>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Zakat Summary</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Gold & Silver:</Text>
            <Text style={styles.summaryValue}>
              {getCurrencySymbol(currency)}
              {formatCurrency(metalsTotal)}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Cash & Property:</Text>
            <Text style={styles.summaryValue}>
              {getCurrencySymbol(currency)}
              {formatCurrency(cashPropertyTotal)}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Liabilities:</Text>
            <Text style={[styles.summaryValue, styles.negativeText]}>
              - {getCurrencySymbol(currency)}
              {formatCurrency(liabilitiesTotal)}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabelBold}>Net wealth subject to zakat</Text>
            <Text style={styles.summaryValueBold}>
              {getCurrencySymbol(currency)}
              {formatCurrency(netTotal)}
            </Text>
          </View>

          {isWealthAboveNisab ? (
            <View style={[styles.resultBox, styles.resultBoxZakatable]}>
              <Text style={styles.resultTitle}>Zakat is Wajib (2.5%)</Text>
              <Text style={styles.resultAmount}>
                {getCurrencySymbol(currency)}
                {formatCurrency(zakatAmount)}
              </Text>
              <Text style={styles.resultStatus}>Your wealth meets/exceeds the nisab minimum.</Text>
            </View>
          ) : (
            <View style={[styles.resultBox, styles.resultBoxNot]}>
              <Text style={styles.resultTitle}>No Zakat Due</Text>
              <Text style={styles.resultAmount}>{getCurrencySymbol(currency)}0.00</Text>
              <Text style={styles.resultStatus}>Your wealth is below the nisab minimum.</Text>
            </View>
          )}
        </View>

        <View style={styles.card}>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={async () => {
              // Reset all state and clear persisted data
              const resetAll = async () => {
                setCurrency('USD');

                setGoldAmount('');
                setSilverAmount('');
                setGoldPricePerGram('');
                setSilverPricePerGram('');

                setCashInHand('');
                setBankBalance('');
                setInvestments('');
                setPropertyValue('');
                setReceivables('');
                setOtherAssets('');

                setDebtsOwed('');
                setLoans('');
                setOtherLiabilities('');

                setUnit('g');
                setCurrencyMenuOpen(false);
                setUnitMenuOpen(false);
                try {
                  await AsyncStorage.removeItem('zakatCalculatorData');
                } catch (err) {
                  console.error('Failed to clear saved data:', err);
                }
                try {
                  scrollRef.current?.scrollTo({ y: 0, animated: true });
                } catch (e) {
                  // ignore scroll errors on some platforms
                }
              };
              await resetAll();
            }}
          >
            <Text style={styles.primaryBtnText}>New Calculation</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.pageBackground,
    },
    scrollView: {
      flex: 1,
    },
    header: {
      backgroundColor: theme.colors.primaryGreen,
      paddingTop: 50,
      paddingBottom: 20,
      paddingHorizontal: 15,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      marginBottom: 15,
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButton: {
      padding: 5,
      paddingRight: 10,
    },
    headerCenter: {
      flex: 1,
      alignItems: 'center',
    },
    headerRight: {
      width: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingLeft: 8,
    },
    themeToggle: {
      padding: 6,
      borderRadius: 8,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.white,
    },
    headerSubtitle: {
      fontSize: 14,
      color: theme.colors.headerSubtitle,
      marginTop: 3,
    },
    headerDisclaimer: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.95)',
      marginTop: 4,
      textAlign: 'center',
      paddingHorizontal: 12,
      fontStyle: 'italic',
      lineHeight: 18,
    },
    headerDisclaimerContainer: {
      marginTop: 8,
      paddingHorizontal: 8,
      paddingVertical: 8,
      backgroundColor: 'rgba(255,255,255,0.08)',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.12)',
      alignSelf: 'stretch',
      marginHorizontal: 10,
    },
    disclaimerCard: {
      // Match hadith card: highlighted background + accent left border
      backgroundColor: theme.colors.verseHighlight,
      padding: 16,
      marginHorizontal: 16,
      marginBottom: 12,
      borderRadius: 12,
      borderLeftWidth: 4,
      borderLeftColor: theme.colors.accentGold,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.06,
      shadowRadius: 4,
      elevation: 3,
    },
    disclaimerText: {
      fontSize: 13,
      color: theme.colors.textMedium,
      lineHeight: 20,
      textAlign: 'justify',
      fontStyle: 'italic',
    },
    disclaimerTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.colors.disclaimerTitle,
      marginBottom: 8,
    },
    errorBanner: {
      backgroundColor: theme.colors.errorColor + '20',
      padding: 12,
      margin: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.colors.errorColor,
    },
    errorText: {
      color: theme.colors.errorColor,
      fontSize: 14,
    },
    currencyPickerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      backgroundColor: theme.colors.cardBackground,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.borderGray,
    },
    currencyLabel: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.primaryGreen,
      marginRight: 12,
    },
    currencyMenuWrapper: {
      width: 260,
      alignItems: 'flex-start',
    },
    dropdownButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderWidth: 2,
      borderColor: theme.colors.accentGold,
      borderRadius: 8,
      backgroundColor: theme.colors.cardBackground,
    },
    currencyDisplay: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.colors.primaryGreen,
    },
    dropdownArrow: {
      fontSize: 16,
      color: theme.colors.primaryGreen,
      marginLeft: 12,
      fontWeight: '700',
    },
    menuContainer: {
      marginTop: 8,
      width: '100%',
      backgroundColor: theme.colors.cardBackground,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.colors.borderGray,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.06,
      shadowRadius: 4,
      elevation: 4,
      zIndex: 999,
    },
    menuItem: {
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.borderGray,
    },
    menuItemText: {
      fontSize: 14,
      color: theme.colors.textMedium,
    },
    menuItemFocused: {
      backgroundColor: theme.colors.surfaceLight,
    },
    card: {
      backgroundColor: theme.colors.cardBackground,
      margin: 16,
      padding: 4,
      borderRadius: 16,
      borderWidth: 2,
      borderColor: theme.colors.borderGray,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 3,
    },
    cardTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: theme.colors.primaryGreen,
      marginBottom: 20,
      textAlign: 'center',
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.accentGold,
      paddingBottom: 12,
    },
    formGroup: {
      marginBottom: 20,
    },
    label: {
      fontSize: 15,
      fontWeight: '600',
      color: theme.colors.primaryGreen,
      marginBottom: 8,
    },
    unitLabel: {
      marginBottom: 0,
      fontSize: 15,
      fontWeight: '600',
      color: theme.colors.primaryGreen,
      alignSelf: 'center',
    },
    metalHeading: {
      fontSize: 18,
      fontWeight: '800',
      color: theme.colors.primaryGreen,
      marginBottom: 8,
    },
    totalsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 12,
    },
    metalTotalBox: {
      flex: 1,
      backgroundColor: theme.colors.surfaceLight,
      padding: 12,
      borderRadius: 10,
      marginRight: 8,
      borderWidth: 1,
      borderColor: theme.colors.borderGray,
      alignItems: 'center',
    },
    metalTotalLabel: {
      fontSize: 12,
      color: theme.colors.textLight,
      marginBottom: 6,
    },
    metalTotalValue: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.colors.accentGold,
    },
    primaryBtn: {
      width: '100%',
      paddingVertical: 16,
      borderRadius: 12,
      backgroundColor: theme.colors.primaryGreen,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryBtnText: {
      color: theme.colors.white,
      fontSize: 16,
      fontWeight: '700',
    },
    input: {
      borderWidth: 2,
      borderColor: theme.colors.accentGold,
      borderRadius: 10,
      padding: 14,
      fontSize: 16,
      color: theme.colors.textDark,
      backgroundColor: theme.colors.surfaceLight,
    },
    warningText: {
      fontSize: 13,
      color: theme.colors.warningOrange,
      marginTop: 6,
      fontWeight: '500',
    },
    actionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16,
      paddingTop: 16,
      borderTopWidth: 1,
      borderTopColor: theme.colors.borderGray,
    },
    resetBtn: {
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: theme.colors.primaryGreen,
      backgroundColor: theme.colors.cardBackground,
    },
    resetBtnText: {
      color: theme.colors.primaryGreen,
      fontSize: 15,
      fontWeight: '600',
    },
    totalText: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.colors.accentGold,
    },
    negativeText: {
      color: theme.colors.errorColor,
    },
    summaryRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 14,
      paddingHorizontal: 8,
    },
    summaryLabel: {
      fontSize: 16,
      color: theme.colors.textMedium,
    },
    summaryValue: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.primaryGreen,
    },
    summaryLabelBold: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.primaryGreen,
    },
    summaryValueBold: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.accentGold,
    },
    divider: {
      height: 2,
      backgroundColor: theme.colors.borderGray,
      marginVertical: 12,
    },
    resultBox: {
      marginTop: 24,
      padding: 28,
      borderRadius: 16,
      alignItems: 'center',
      borderWidth: 3,
    },
    resultBoxZakatable: {
      backgroundColor: theme.colors.verseHighlight,
      borderColor: theme.colors.accentGold,
    },
    resultBoxNot: {
      backgroundColor: theme.colors.surfaceLight,
      borderColor: theme.colors.borderGray,
    },
    resultTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
      color: theme.colors.primaryGreen,
    },
    resultAmount: {
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 12,
      color: theme.colors.accentGold,
    },
    resultStatus: {
      fontSize: 15,
      color: theme.colors.textLight,
      fontWeight: '500',
      textAlign: 'center',
    },
    infoCard: {
      backgroundColor: theme.colors.cardBackground,
      padding: 10,
      margin: 16,
      borderRadius: 12,
      marginBottom: 16,
      borderLeftWidth: 4,
      borderLeftColor: theme.colors.primaryGreen,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 3,
      elevation: 2,
    },
    hadithCard: {
      backgroundColor: theme.colors.verseHighlight,
      borderLeftColor: theme.colors.accentGold,
      borderLeftWidth: 4,
    },
    hadithText: {
      fontSize: 14,
      color: theme.colors.textMedium,
      marginBottom: 12,
      textAlign: 'center',
      fontStyle: 'italic',
    },
    hadithQuote: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.hadithQuote,
      textAlign: 'center',
      fontStyle: 'italic',
      marginBottom: 8,
      paddingHorizontal: 16,
    },
    hadithSource: {
      fontSize: 13,
      color: theme.colors.textLight,
      textAlign: 'center',
      fontStyle: 'italic',
    },
  });
