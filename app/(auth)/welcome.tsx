import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function WelcomeScreen() {
  function onRegister() {
    router.push("/(auth)/register");
  }

  function onLogin() {
    router.push("/(auth)/login");
  }

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
  safeArea: { flex: 1, justifyContent: "center" },
  topArea: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logoBlock: { alignItems: "center" },
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
