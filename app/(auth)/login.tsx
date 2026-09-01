import { LinearGradient } from "expo-linear-gradient";
import { router, useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import FormField from "../../components/form-field";
import PasswordField from "../../components/password-field";
import PrimaryButton from "../../components/primary-button";

interface Props {
  onLogin: () => void;
  onRegister: () => void;
  onBack: () => void;
}

export default function LoginScreen({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setEmail("");
      setPassword("");
      setErrors({});
    }, []),
  );

  const validate = () => {
    const e: Record<string, string> = {};
    if (!email.trim()) e.email = "Informe seu e-mail.";
    else if (!email.includes("@")) e.email = "Digite um e-mail válido.";
    if (!password) e.password = "Informe sua senha.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1200);
  };

  const handleRegisterRedirect = () => {
    router.push("/(auth)/register");
  };

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={["#3B0764", "#7C3AED"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.6, y: 1 }}
        style={styles.header}
      >
        <SafeAreaView>
          <Text style={styles.logo}>flui</Text>
          <Text style={styles.title}>Bem-vindo de volta</Text>
          <Text style={styles.subtitle}>
            Entre para encontrar os melhores pontos de recarga
          </Text>
        </SafeAreaView>
      </LinearGradient>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.formScroll}
          contentContainerStyle={styles.formCard}
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ gap: 12, marginBottom: 20 }}>
            <FormField
              label="E-mail"
              value={email}
              onChangeText={(v) => {
                setEmail(v);
                if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
              }}
              placeholder="seu@email.com.br"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              error={errors.email}
            />

            <PasswordField
              label="Senha"
              value={password}
              onChangeText={(v) => {
                setPassword(v);
                if (errors.password)
                  setErrors((prev) => ({ ...prev, password: "" }));
              }}
              placeholder="••••••••"
              autoComplete="password"
              error={errors.password}
            />
          </View>

          <PrimaryButton
            label="Entrar"
            loadingLabel="Entrando…"
            loading={loading}
            onPress={handleLogin}
          />

          <View style={{ alignItems: "center" }}>
            <Text style={styles.footerText}>
              Não tem uma conta?{" "}
              <Text style={styles.footerLink} onPress={handleRegisterRedirect}>
                Criar conta
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F9FAFB" },
  header: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 32 },
  logo: {
    color: "white",
    fontSize: 30,
    fontWeight: "900",
    letterSpacing: -0.9,
    marginTop: 24,
  },
  title: {
    color: "white",
    fontWeight: "700",
    fontSize: 24,
    marginTop: 8,
    lineHeight: 28,
  },
  subtitle: { color: "rgba(255,255,255,0.6)", fontSize: 14, marginTop: 4 },
  formScroll: { flex: 1, marginTop: -16 },
  formCard: {
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 24,
    flexGrow: 1,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -2 },
    elevation: 4,
  },
  footerText: { fontSize: 14, color: "#6B7280" },
  footerLink: { fontWeight: "700", color: "#6D28D9" },
});
