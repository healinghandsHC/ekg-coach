import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "@/constants/colors";
import { getRhythmById, ekgData } from "@/data/ekg-data";
import { EkgStrip } from "@/components/EkgStrip";

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

export default function RhythmDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const rhythm = getRhythmById(id ?? "");

  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  if (!rhythm) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Rhythm not found</Text>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentIdx = ekgData.findIndex((r) => r.id === rhythm.id);
  const prev = currentIdx > 0 ? ekgData[currentIdx - 1] : null;
  const next = currentIdx < ekgData.length - 1 ? ekgData[currentIdx + 1] : null;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, { paddingBottom: bottomPad + 20 }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.categoryPill}>
        <Text style={styles.categoryPillText}>{rhythm.category}</Text>
      </View>

      <Text style={styles.title}>{rhythm.name}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>EKG Strip</Text>
        <EkgStrip rhythmId={rhythm.id} height={200} showLabels={true} />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Measurements</Text>
        <View style={styles.infoList}>
          <InfoRow label="Rate" value={rhythm.rateRange} />
          <View style={styles.divider} />
          <InfoRow label="Rhythm" value={rhythm.rhythmRegularity} />
          <View style={styles.divider} />
          <InfoRow label="P Wave" value={rhythm.pWaveDescription} />
          <View style={styles.divider} />
          <InfoRow label="PR Interval" value={rhythm.prInterval} />
          <View style={styles.divider} />
          <InfoRow label="QRS Duration" value={rhythm.qrsDuration} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardTitleRow}>
          <Ionicons name="alert-circle" size={18} color={colors.light.accent} />
          <Text style={styles.cardTitle}>Key Identifying Features</Text>
        </View>
        <View style={styles.featureList}>
          {rhythm.keyFeatures.map((f, i) => (
            <View key={i} style={styles.featureRow}>
              <View style={styles.featureDot} />
              <Text style={styles.featureText}>{f}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={[styles.card, styles.cardAmber]}>
        <View style={styles.cardTitleRow}>
          <Ionicons name="medical" size={18} color="#92400e" />
          <Text style={[styles.cardTitle, { color: "#92400e" }]}>Clinical Significance</Text>
        </View>
        <Text style={styles.cardBodyAmber}>{rhythm.clinicalSignificance}</Text>
      </View>

      <View style={[styles.card, styles.cardGreen]}>
        <View style={styles.cardTitleRow}>
          <Ionicons name="heart" size={18} color="#166534" />
          <Text style={[styles.cardTitle, { color: "#166534" }]}>Treatment</Text>
        </View>
        <Text style={styles.cardBodyGreen}>{rhythm.treatment}</Text>
      </View>

      <View style={styles.navRow}>
        {prev ? (
          <TouchableOpacity
            style={styles.navBtn}
            onPress={() => router.replace(`/rhythm/${prev.id}` as any)}
            testID="button-prev-rhythm"
          >
            <Ionicons name="arrow-back" size={16} color={colors.light.primary} />
            <Text style={styles.navBtnText} numberOfLines={1}>{prev.name}</Text>
          </TouchableOpacity>
        ) : <View style={{ flex: 1 }} />}
        {next ? (
          <TouchableOpacity
            style={[styles.navBtn, styles.navBtnRight]}
            onPress={() => router.replace(`/rhythm/${next.id}` as any)}
            testID="button-next-rhythm"
          >
            <Text style={styles.navBtnText} numberOfLines={1}>{next.name}</Text>
            <Ionicons name="arrow-forward" size={16} color={colors.light.primary} />
          </TouchableOpacity>
        ) : <View style={{ flex: 1 }} />}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  content: { paddingHorizontal: 16, paddingTop: 16, gap: 16 },
  notFound: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
  notFoundText: { fontSize: 18, color: colors.light.mutedForeground },
  backBtn: { backgroundColor: colors.light.primary, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 },
  backBtnText: { color: "#fff", fontWeight: "600" as const },
  categoryPill: {
    alignSelf: "flex-start",
    backgroundColor: colors.light.muted,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  categoryPillText: { fontSize: 12, fontWeight: "500" as const, color: colors.light.mutedForeground },
  title: { fontSize: 26, fontWeight: "700" as const, color: colors.light.foreground, letterSpacing: -0.5, lineHeight: 32 },
  section: { gap: 8 },
  sectionLabel: { fontSize: 12, fontWeight: "500" as const, color: colors.light.mutedForeground, textTransform: "uppercase", letterSpacing: 0.5 },
  card: {
    backgroundColor: colors.light.card,
    borderRadius: colors.radius,
    borderWidth: 1,
    borderColor: colors.light.border,
    padding: 16,
    gap: 12,
  },
  cardAmber: { backgroundColor: "#fffbeb", borderColor: "#fde68a" },
  cardGreen: { backgroundColor: "#f0fdf4", borderColor: "#bbf7d0" },
  cardTitle: { fontSize: 15, fontWeight: "600" as const, color: colors.light.foreground },
  cardTitleRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  infoList: { gap: 0 },
  infoRow: { flexDirection: "row", alignItems: "flex-start", paddingVertical: 10, gap: 12 },
  infoLabel: { width: 100, fontSize: 13, color: colors.light.mutedForeground, fontWeight: "500" as const },
  infoValue: { flex: 1, fontSize: 13, color: colors.light.foreground, lineHeight: 19 },
  divider: { height: 1, backgroundColor: colors.light.border },
  featureList: { gap: 8 },
  featureRow: { flexDirection: "row", alignItems: "flex-start", gap: 10 },
  featureDot: { width: 7, height: 7, borderRadius: 3.5, backgroundColor: colors.light.primary, marginTop: 5, flexShrink: 0 },
  featureText: { flex: 1, fontSize: 14, color: colors.light.foreground, lineHeight: 20 },
  cardBodyAmber: { fontSize: 14, color: "#92400e", lineHeight: 21 },
  cardBodyGreen: { fontSize: 14, color: "#166534", lineHeight: 21 },
  navRow: { flexDirection: "row", gap: 10 },
  navBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: colors.light.card,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.light.border,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  navBtnRight: { justifyContent: "flex-end" },
  navBtnText: { flex: 1, fontSize: 13, color: colors.light.primary, fontWeight: "500" as const },
});
