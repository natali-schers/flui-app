import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  onLogin: () => void;
  onRegister: () => void;
}

const perks = [
  { icon: "⚡", text: "Flui Score: a melhor opção para o seu momento" },
  { icon: "📍", text: "Disponibilidade em tempo real e avaliações confiáveis" },
];

export default function WelcomeScreen({ onLogin, onRegister }: Props) {
  return (
    <LinearGradient
      colors={["#3B0764", "#6D28D9", "#9333EA", "#B747F8"]}
      locations={[0, 0.4, 0.75, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.7, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topArea}>
          <View style={styles.logoBlock}>
            <Text style={styles.logo}>flui</Text>
            <View style={styles.divider} />
            <Text style={styles.tagline}>
              Não mostramos apenas onde carregar.{"\n"}
              <Text style={styles.taglineBold}>
                Mostramos onde vale a pena.
              </Text>
            </Text>
          </View>

          <View style={styles.phoneCard}>
            <View style={{ gap: 10 }}>
              <View style={styles.rowBetween}>
                <View style={{ gap: 4 }}>
                  <View style={styles.barWide} />
                  <View style={styles.barNarrow} />
                </View>
                <View style={styles.scoreBadge}>
                  <Text style={styles.scoreValue}>94</Text>
                  <Text style={styles.scoreLabel}>SCORE</Text>
                </View>
              </View>

              <View style={{ flexDirection: "row", gap: 6 }}>
                <View style={styles.pill}>
                  <View style={styles.pillDot} />
                  <View style={styles.pillBar} />
                </View>
              </View>

              <View style={styles.hr} />

              <View style={{ gap: 6 }}>
                {[1, 2].map((i) => (
                  <View key={i} style={styles.listRow}>
                    <View style={styles.listIcon}>
                      <Text style={{ fontSize: 10 }}>⚡</Text>
                    </View>
                    <View style={{ flex: 1, gap: 4 }}>
                      <View style={styles.listBarWide} />
                      <View style={styles.listBarNarrow} />
                    </View>
                    <LinearGradient
                      colors={["#7C3AED", "#B747F8"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.listScore}
                    >
                      <Text style={styles.listScoreText}>
                        {i === 1 ? 82 : 71}
                      </Text>
                    </LinearGradient>
                  </View>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.perksList}>
            {perks.map((perk) => (
              <View key={perk.text} style={styles.perkRow}>
                <Text style={styles.perkIcon}>{perk.icon}</Text>
                <Text style={styles.perkText}>{perk.text}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.ctaArea}>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={onRegister}
            style={styles.primaryButton}
          >
            <Text style={styles.primaryButtonText}>Criar minha conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={onLogin}
            style={styles.secondaryButton}
          >
            <Text style={styles.secondaryButtonText}>Já tenho conta</Text>
          </TouchableOpacity>

          <Text style={styles.terms}>
            Ao criar uma conta você concorda com os{" "}
            <Text style={styles.underline}>Termos de Uso</Text> e{" "}
            <Text style={styles.underline}>Política de Privacidade</Text> da
            Flui.
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  topArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  logoBlock: { marginBottom: 32, alignItems: "center" },
  logo: {
    color: "white",
    fontSize: 52,
    fontWeight: "900",
    letterSpacing: -1.5,
    lineHeight: 54,
  },
  divider: {
    width: 40,
    height: 2,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 999,
    marginTop: 16,
    marginBottom: 16,
  },
  tagline: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "center",
    maxWidth: 280,
  },
  taglineBold: { color: "white", fontWeight: "600" },
  phoneCard: {
    width: 180,
    borderRadius: 16,
    marginBottom: 32,
    padding: 14,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  barWide: {
    height: 8,
    width: 80,
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 999,
  },
  barNarrow: {
    height: 6,
    width: 56,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 999,
  },
  scoreBadge: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.25)",
  },
  scoreValue: {
    color: "white",
    fontWeight: "900",
    fontSize: 14,
    lineHeight: 14,
  },
  scoreLabel: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 6,
    lineHeight: 7,
    marginTop: 2,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(34,197,94,0.3)",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  pillDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#4ADE80" },
  pillBar: {
    height: 6,
    width: 40,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 999,
  },
  hr: { height: 1, backgroundColor: "rgba(255,255,255,0.15)" },
  listRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 12,
    padding: 8,
  },
  listIcon: {
    width: 24,
    height: 24,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  listBarWide: {
    height: 6,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 999,
    width: 64,
  },
  listBarNarrow: {
    height: 4,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 999,
    width: 40,
  },
  listScore: {
    width: 20,
    height: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  listScoreText: { color: "white", fontWeight: "900", fontSize: 8 },
  perksList: { width: "100%", maxWidth: 320, gap: 12 },
  perkRow: { flexDirection: "row", alignItems: "flex-start", gap: 12 },
  perkIcon: { color: "#D8B4FE", fontSize: 14, marginTop: 2 },
  perkText: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 12,
    lineHeight: 17,
    flex: 1,
  },
  ctaArea: {
    paddingHorizontal: 24,
    paddingBottom: 64,
    gap: 12,
  },
  primaryButton: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  primaryButtonText: { color: "#581C87", fontWeight: "700", fontSize: 14 },
  secondaryButton: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.3)",
    alignItems: "center",
  },
  secondaryButtonText: { color: "white", fontWeight: "600", fontSize: 14 },
  terms: {
    textAlign: "center",
    fontSize: 10,
    lineHeight: 14,
    color: "rgba(255,255,255,0.4)",
    paddingHorizontal: 16,
  },
  underline: { textDecorationLine: "underline" },
});
