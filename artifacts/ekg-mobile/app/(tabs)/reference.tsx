import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "@/constants/colors";
import { ekgData, categories } from "@/data/ekg-data";
import { EkgStrip } from "@/components/EkgStrip";

export default function ReferenceScreen() {
  const insets = useSafeAreaInsets();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const filtered = activeCategory === "All"
    ? ekgData
    : ekgData.filter((r) => r.category === activeCategory);

  const filterOptions = ["All", ...categories];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.content,
        { paddingTop: topPad + 16, paddingBottom: bottomPad + 16 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Quick Reference</Text>
        <Text style={styles.subtitle}>All rhythms and key features at a glance</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterRow}
      >
        {filterOptions.map((opt) => (
          <TouchableOpacity
            key={opt}
            style={[styles.filterBtn, activeCategory === opt && styles.filterBtnActive]}
            onPress={() => setActiveCategory(opt)}
            testID={`filter-${opt.toLowerCase()}`}
          >
            <Text style={[styles.filterText, activeCategory === opt && styles.filterTextActive]}>
              {opt}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.cardList}>
        {filtered.map((rhythm) => (
          <View key={rhythm.id} style={styles.referenceCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.rhythmName}>{rhythm.name}</Text>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{rhythm.category}</Text>
              </View>
            </View>

            <EkgStrip rhythmId={rhythm.id} height={100} />

            <View style={styles.infoGrid}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Rate</Text>
                <Text style={styles.infoValue}>{rhythm.rateRange}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Rhythm</Text>
                <Text style={styles.infoValue}>{rhythm.rhythmRegularity}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>PR Interval</Text>
                <Text style={styles.infoValue}>{rhythm.prInterval}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>QRS</Text>
                <Text style={styles.infoValue}>{rhythm.qrsDuration}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.featureList}>
              {rhythm.keyFeatures.map((f, i) => (
                <View key={i} style={styles.featureRow}>
                  <View style={styles.featureDot} />
                  <Text style={styles.featureText}>{f}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  content: { paddingHorizontal: 16, gap: 16 },
  header: { gap: 4 },
  title: { fontSize: 26, fontWeight: "700" as const, color: colors.light.foreground, letterSpacing: -0.5 },
  subtitle: { fontSize: 14, color: colors.light.mutedForeground },
  filterRow: { gap: 8, paddingRight: 8 },
  filterBtn: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.light.border,
    backgroundColor: colors.light.card,
  },
  filterBtnActive: {
    backgroundColor: colors.light.primary,
    borderColor: colors.light.primary,
  },
  filterText: { fontSize: 13, fontWeight: "500" as const, color: colors.light.mutedForeground },
  filterTextActive: { color: "#fff" },
  cardList: { gap: 12 },
  referenceCard: {
    backgroundColor: colors.light.card,
    borderRadius: colors.radius,
    borderWidth: 1,
    borderColor: colors.light.border,
    padding: 14,
    gap: 12,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 8,
  },
  rhythmName: { flex: 1, fontSize: 15, fontWeight: "700" as const, color: colors.light.foreground },
  categoryBadge: {
    backgroundColor: colors.light.muted,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  categoryText: { fontSize: 11, color: colors.light.mutedForeground, fontWeight: "500" as const },
  infoGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  infoItem: { minWidth: "45%", flex: 1, gap: 2 },
  infoLabel: { fontSize: 11, color: colors.light.mutedForeground, fontWeight: "500" as const, textTransform: "uppercase", letterSpacing: 0.5 },
  infoValue: { fontSize: 13, color: colors.light.foreground, fontWeight: "400" as const, lineHeight: 18 },
  divider: { height: 1, backgroundColor: colors.light.border },
  featureList: { gap: 6 },
  featureRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  featureDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.light.primary, marginTop: 5, flexShrink: 0 },
  featureText: { flex: 1, fontSize: 13, color: colors.light.foreground, lineHeight: 19 },
});
