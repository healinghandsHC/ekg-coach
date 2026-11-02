import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "@/constants/colors";
import { ekgData, categories } from "@/data/ekg-data";
import { EkgStrip } from "@/components/EkgStrip";

export default function LearnScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(categories[0]);

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const toggleCategory = (cat: string) => {
    setExpandedCategory(expandedCategory === cat ? null : cat);
  };

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
        <Text style={styles.title}>Learning Center</Text>
        <Text style={styles.subtitle}>Select a rhythm to study its characteristics</Text>
      </View>

      {categories.map((cat) => {
        const rhythms = ekgData.filter((r) => r.category === cat);
        const isExpanded = expandedCategory === cat;

        return (
          <View key={cat} style={styles.categorySection}>
            <TouchableOpacity
              style={styles.categoryHeader}
              onPress={() => toggleCategory(cat)}
              activeOpacity={0.7}
              testID={`category-${cat}`}
            >
              <View style={styles.categoryLeft}>
                <View style={styles.categoryDot} />
                <Text style={styles.categoryTitle}>{cat}</Text>
                <View style={styles.countBadge}>
                  <Text style={styles.countText}>{rhythms.length}</Text>
                </View>
              </View>
              <Ionicons
                name={isExpanded ? "chevron-up" : "chevron-down"}
                size={18}
                color={colors.light.mutedForeground}
              />
            </TouchableOpacity>

            {isExpanded && (
              <View style={styles.rhythmList}>
                {rhythms.map((rhythm) => (
                  <TouchableOpacity
                    key={rhythm.id}
                    style={styles.rhythmCard}
                    onPress={() => router.push(`/rhythm/${rhythm.id}` as any)}
                    activeOpacity={0.75}
                    testID={`rhythm-${rhythm.id}`}
                  >
                    <EkgStrip rhythmId={rhythm.id} height={90} />
                    <View style={styles.rhythmInfo}>
                      <Text style={styles.rhythmName}>{rhythm.name}</Text>
                      <View style={styles.rhythmMeta}>
                        <View style={styles.metaBadge}>
                          <Text style={styles.metaText}>{rhythm.rateRange}</Text>
                        </View>
                        <View style={[styles.metaBadge, styles.metaBadgeOutline]}>
                          <Text style={styles.metaTextOutline}>{rhythm.rhythmRegularity}</Text>
                        </View>
                      </View>
                    </View>
                    <Ionicons name="chevron-forward" size={18} color={colors.light.mutedForeground} style={styles.chevron} />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
  },
  content: {
    paddingHorizontal: 16,
    gap: 12,
  },
  header: {
    gap: 4,
    marginBottom: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: "700" as const,
    color: colors.light.foreground,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: colors.light.mutedForeground,
  },
  categorySection: {
    backgroundColor: colors.light.card,
    borderRadius: colors.radius,
    borderWidth: 1,
    borderColor: colors.light.border,
    overflow: "hidden",
  },
  categoryHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
  },
  categoryLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  categoryDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.light.primary,
  },
  categoryTitle: {
    fontSize: 15,
    fontWeight: "600" as const,
    color: colors.light.foreground,
  },
  countBadge: {
    backgroundColor: colors.light.muted,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  countText: {
    fontSize: 12,
    color: colors.light.mutedForeground,
    fontWeight: "500" as const,
  },
  rhythmList: {
    borderTopWidth: 1,
    borderTopColor: colors.light.border,
  },
  rhythmCard: {
    padding: 14,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.light.border,
    flexDirection: "column",
  },
  rhythmInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  rhythmName: {
    fontSize: 14,
    fontWeight: "600" as const,
    color: colors.light.foreground,
    flex: 1,
  },
  rhythmMeta: {
    flexDirection: "row",
    gap: 6,
  },
  metaBadge: {
    backgroundColor: colors.light.muted,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  metaText: {
    fontSize: 11,
    color: colors.light.mutedForeground,
    fontWeight: "500" as const,
  },
  metaBadgeOutline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.light.border,
  },
  metaTextOutline: {
    fontSize: 11,
    color: colors.light.mutedForeground,
    fontWeight: "500" as const,
  },
  chevron: {
    alignSelf: "flex-end",
  },
});
