import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BellIcon, SearchIcon } from "../../components/icons";
import PrimaryButton from "../../components/primary-button";
import StationCard from "../../components/station-card";
import { stations } from "../../lib/data";

export default function HomeScreen() {
  const featured = stations[0];
  const nearby = stations.slice(1, 3);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ flexGrow: 1 }}>
      <LinearGradient
        colors={["#F3E8FF", "#FAF5FF", "#F9FAFB"]}
        locations={[0, 0.5, 1]}
        style={styles.headerSection}
      >
        <View style={styles.topBar}>
          <Text style={styles.logo}>flui</Text>
          <View style={styles.topBarActions}>
            <TouchableOpacity style={styles.iconButton}>
              <BellIcon />
            </TouchableOpacity>
            <LinearGradient
              colors={["#A855F7", "#8B5CF6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.avatar}
            >
              <Text style={styles.avatarText}>N</Text>
            </LinearGradient>
          </View>
        </View>

        <View style={styles.greeting}>
          <Text style={styles.greetingHello}>Olá, Natali!</Text>
          <Text style={styles.greetingTitle}>Onde você quer carregar?</Text>
        </View>

        <TouchableOpacity
          //onPress={() => router.push("/results")}
          style={styles.searchBar}
          activeOpacity={0.8}
        >
          <SearchIcon />
          <Text style={styles.searchPlaceholder}>
            Digite um endereço, cidade ou local…
          </Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.body}>
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Melhor opção para você</Text>
            <TouchableOpacity //onPress={onOpenMap}
            >
              <Text style={styles.sectionLink}>Ver mapa</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.featuredCard}>
            <LinearGradient
              colors={["#EDE9FE", "#F3E8FF"]}
              style={styles.featuredHero}
            >
              <View style={styles.updatedBadge}>
                <Text style={styles.updatedBadgeText}>Atualizado agora</Text>
              </View>
            </LinearGradient>

            <View style={styles.featuredBody}>
              <View style={styles.featuredTopRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.featuredName}>{featured.name}</Text>
                  <View style={styles.ratingRow}>
                    <Text style={styles.stars}>{"★".repeat(5)}</Text>
                    <Text style={styles.ratingValue}>{featured.rating}</Text>
                  </View>
                </View>
                <LinearGradient
                  colors={["#7C3AED", "#B747F8"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.scoreBadge}
                >
                  <Text style={styles.scoreValue}>{featured.score}</Text>
                  <Text style={styles.scoreLabel}>FLUI SCORE</Text>
                </LinearGradient>
              </View>

              <View style={styles.metaRow}>
                <View style={styles.availabilityPill}>
                  <View style={styles.availabilityDot} />
                  <Text style={styles.availabilityText}>
                    {featured.available}/{featured.total} disponíveis
                  </Text>
                </View>
                <Text style={styles.metaText}>⚡ {featured.maxPower} kW</Text>
                <Text style={styles.metaText}>🕐 {featured.timeMin} min</Text>
              </View>

              <View style={styles.reasonBox}>
                <Text style={styles.reasonText}>
                  &ldquo;{featured.reason}&rdquo;
                </Text>
              </View>

              <PrimaryButton
                label="Ver ponto"
                onPress={() => router.push(`../station/${featured.id}`)}
                gradientStyle={styles.featuredCta}
              />
            </View>
          </View>
        </View>

        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Pontos próximos</Text>
            <TouchableOpacity //onPress={() => router.push("/travel")}
            >
              <Text style={styles.sectionLink}>Ver todos</Text>
            </TouchableOpacity>
          </View>
          <View style={{ gap: 12 }}>
            {nearby.map((s) => (
              <StationCard
                key={s.id}
                station={s}
                onPress={() => router.push(`../station/${s.id}`)}
                size="small"
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F9FAFB" },
  headerSection: { paddingHorizontal: 20, paddingTop: 32, paddingBottom: 24 },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  logo: {
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: -0.8,
    color: "#7C3AED",
  },
  topBarActions: { flexDirection: "row", alignItems: "center", gap: 8 },
  iconButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { color: "white", fontSize: 12, fontWeight: "700" },
  greeting: { marginBottom: 16 },
  greetingHello: { color: "#6B7280", fontSize: 14 },
  greetingTitle: {
    color: "#111827",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 2,
  },
  searchBar: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderColor: "#F3F4F6",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  searchPlaceholder: { color: "#9CA3AF", fontSize: 14, flex: 1 },
  body: { paddingHorizontal: 20, paddingBottom: 24, gap: 20 },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  sectionTitle: { fontWeight: "700", color: "#111827", fontSize: 16 },
  sectionLink: { fontSize: 12, fontWeight: "500", color: "#9333EA" },
  featuredCard: {
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#F3F4F6",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  featuredHero: { height: 80, alignItems: "center", justifyContent: "center" },
  featuredHeroIllustration: { opacity: 0.2 },
  updatedBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  updatedBadgeText: { fontSize: 11, fontWeight: "600", color: "#4B5563" },
  featuredBody: { padding: 16 },
  featuredTopRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 12,
  },
  featuredName: { fontWeight: "700", color: "#111827", fontSize: 16 },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 2,
  },
  stars: { color: "#FBBF24", fontSize: 12 },
  ratingValue: { fontSize: 12, fontWeight: "500", color: "#374151" },
  scoreBadge: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: "center",
  },
  scoreValue: {
    fontSize: 22,
    fontWeight: "800",
    color: "white",
    lineHeight: 24,
  },
  scoreLabel: {
    fontSize: 8,
    color: "rgba(255,255,255,0.85)",
    fontWeight: "600",
    marginTop: 1,
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 12,
    rowGap: 4,
    marginBottom: 12,
  },
  availabilityPill: { flexDirection: "row", alignItems: "center", gap: 4 },
  availabilityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#22C55E",
  },
  availabilityText: { fontSize: 12, fontWeight: "500", color: "#15803D" },
  metaText: { fontSize: 12, color: "#6B7280" },
  amenitiesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 12,
  },
  reasonBox: {
    backgroundColor: "#FAF5FF",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
  reasonText: { fontSize: 12, color: "#7E22CE", lineHeight: 17 },
  featuredCta: { paddingVertical: 10, borderRadius: 12, marginBottom: 0 },
});
