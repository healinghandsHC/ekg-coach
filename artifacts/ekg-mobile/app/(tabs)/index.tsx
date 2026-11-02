import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "@/constants/colors";
import { ekgData, categories } from "@/data/ekg-data";
import { EkgStrip } from "@/components/EkgStrip";

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const topPad = Platform.OS === "web" ? 67 : insets.top;

  const navCards = [
    {
      title: "Learn",
      subtitle: `${ekgData.length} rhythms across ${categories.length} categories`,
      icon: "book-open",
      color: colors.light.primary,
      bgColor: "#eff6ff",
      route: "/learn",
    },
    {
      title: "Practice",
      subtitle: "27 randomized quiz questions",
      icon: "target",
      color: "#16a34a",
      bgColor: "#f0fdf4",
      route: "/practice",
    },
    {
      title: "Reference",
      subtitle: "Quick-access cheat sheet",
      icon: "list",
      color: "#f59e0b",
      bgColor: "#fffbeb",
      route: "/reference",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.content,
        { paddingTop: topPad + 16, paddingBottom: Platform.OS === "web" ? 34 : insets.bottom + 16 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.iconBadge}>
          <MaterialCommunityIcons name="heart-pulse" size={28} color={colors.light.primary} />
        </View>
        <Text style={styles.title}>EKG Trainer</Text>
        <Text style={styles.subtitle}>
          Your clinical study companion for identifying rhythms and building confidence.
        </Text>
      </View>

      <View style={styles.stripContainer}>
        <EkgStrip rhythmId="normal-sinus" height={110} />
        <Text style={styles.stripLabel}>Normal Sinus Rhythm — tap Learn to explore all rhythms</Text>
      </View>

      <View style={styles.cardsRow}>
        {navCards.map((card) => (
          <TouchableOpacity
            key={card.route}
            style={styles.navCard}
            onPress={() => router.push(card.route as any)}
            activeOpacity={0.75}
            testID={`card-${card.title.toLowerCase()}`}
          >
            <View style={[styles.cardIcon, { backgroundColor: card.bgColor }]}>
              <Feather name={card.icon as any} size={22} color={card.color} />
            </View>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Topics Covered</Text>
        {categories.map((cat) => {
          const count = ekgData.filter((r) => r.category === cat).length;
          return (
            <View key={cat} style={styles.topicRow}>
              <View style={styles.dot} />
              <Text style={styles.topicText}>
                {cat}{" "}
                <Text style={styles.topicCount}>({count} rhythms)</Text>
              </Text>
              <TouchableOpacity
                onPress={() => router.push("/learn" as any)}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Ionicons name="chevron-forward" size={16} color={colors.light.mutedForeground} />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
  },
  content: {
    paddingHorizontal: 20,
    gap: 24,
  },
  header: {
    alignItems: "center",
    gap: 10,
  },
  iconBadge: {
    width: 64,
    height: 64,
    borderRadius: 18,
    backgroundColor: "#eff6ff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "700" as const,
    color: colors.light.foreground,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: colors.light.mutedForeground,
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 300,
  },
  stripContainer: {
    gap: 8,
  },
  stripLabel: {
    fontSize: 12,
    color: colors.light.mutedForeground,
    textAlign: "center",
  },
  cardsRow: {
    flexDirection: "row",
    gap: 10,
  },
  navCard: {
    flex: 1,
    backgroundColor: colors.light.card,
    borderRadius: colors.radius,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: colors.light.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardIcon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600" as const,
    color: colors.light.foreground,
  },
  cardSubtitle: {
    fontSize: 11,
    color: colors.light.mutedForeground,
    lineHeight: 15,
  },
  section: {
    backgroundColor: colors.light.card,
    borderRadius: colors.radius,
    borderWidth: 1,
    borderColor: colors.light.border,
    padding: 16,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: colors.light.foreground,
    marginBottom: 2,
  },
  topicRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: colors.light.primary,
  },
  topicText: {
    flex: 1,
    fontSize: 14,
    color: colors.light.foreground,
  },
  topicCount: {
    color: colors.light.mutedForeground,
  },
});
