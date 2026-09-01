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
    TouchableOpacity,
    View,
} from "react-native";
import { CheckIcon } from "../../components/eye-icon";
import FormField from "../../components/form-field";
import PasswordField from "../../components/password-field";
import PrimaryButton from "../../components/primary-button";

const vehicles = [
  "BYD Dolphin",
  "BYD Seal",
  "Volvo EX30",
  "Volvo XC40 Elétrico",
  "GM Bolt",
  "VW ID.4",
  "Outro",
];
const batteryOptions = ["40", "50", "60", "75", "100", "82"];

function PasswordStrength({ password }: { password: string }) {
  const checks = [
    { label: "8+ caracteres", ok: password.length >= 8 },
    { label: "Letra maiúscula", ok: /[A-Z]/.test(password) },
    { label: "Número", ok: /[0-9]/.test(password) },
  ];
  const score = checks.filter((c) => c.ok).length;
  const colors = ["", "#EF4444", "#F59E0B", "#22C55E"];
  const labels = ["", "Fraca", "Média", "Forte"];

  if (!password) return null;

  return (
    <View style={{ marginTop: 8 }}>
      <View style={{ flexDirection: "row", gap: 4, marginBottom: 6 }}>
        {[1, 2, 3].map((i) => (
          <View
            key={i}
            style={{
              flex: 1,
              height: 4,
              borderRadius: 999,
              backgroundColor: i <= score ? colors[score] : "#E5E7EB",
            }}
          />
        ))}
      </View>
      <View style={styles.rowBetween}>
        <View style={{ flexDirection: "row", gap: 12 }}>
          {checks.map((c) => (
            <View
              key={c.label}
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Text
                style={{ fontSize: 10, color: c.ok ? "#16A34A" : "#9CA3AF" }}
              >
                {c.ok ? "✓" : "○"}
              </Text>
              <Text
                style={{ fontSize: 10, color: c.ok ? "#16A34A" : "#9CA3AF" }}
              >
                {c.label}
              </Text>
            </View>
          ))}
        </View>
        {score > 0 && (
          <Text
            style={{ fontSize: 10, fontWeight: "600", color: colors[score] }}
          >
            {labels[score]}
          </Text>
        )}
      </View>
    </View>
  );
}

type Step = "account" | "vehicle" | "done";

export default function RegisterScreen() {
  const [step, setStep] = useState<Step>("account");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [batteryKwh, setBatteryKwh] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setErrors({});
      setName("");
      setEmail("");
      setPassword("");
      setVehicle("");
      setBatteryKwh("");
      setStep("account");
    }, []),
  );

  const clearError = (field: string) => {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateAccount = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Informe seu nome completo.";
    if (!email.includes("@")) e.email = "Digite um e-mail válido.";
    if (password.length < 8)
      e.password = "A senha deve ter ao menos 8 caracteres.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (step === "account" && validateAccount()) setStep("vehicle");
  };

  const handleFinish = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("done");
      setTimeout(() => router.push("/(auth)/register"), 1500);
    }, 1400);
  };

  const handleLoginRedirect = () => {
    router.push("/(auth)/login");
  };

  const stepIndex = step === "account" ? 0 : step === "vehicle" ? 1 : 2;

  if (step === "done") {
    return (
      <SafeAreaView style={styles.doneScreen}>
        <LinearGradient
          colors={["#7C3AED", "#B747F8"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.doneIcon}
        >
          <CheckIcon />
        </LinearGradient>
        <Text style={styles.doneTitle}>Conta criada!</Text>
        <Text style={styles.doneSubtitle}>
          Bem-vindo à Flui, {name.split(" ")[0]}.
        </Text>
        <Text style={styles.doneHint}>Preparando sua experiência…</Text>
        <View style={{ marginTop: 24, flexDirection: "row", gap: 4 }}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </SafeAreaView>
    );
  }

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
          <Text style={styles.title}>
            {step === "account" ? "Crie sua conta" : "Seu veículo"}
          </Text>
          <Text style={styles.subtitle}>
            {step === "account"
              ? "Cadastre-se e encontre os melhores pontos de recarga"
              : "Assim personalizamos as recomendações para você (opcional)"}
          </Text>

          <View style={{ flexDirection: "row", gap: 6, marginTop: 24 }}>
            {["Conta", "Veículo"].map((label, i) => (
              <View key={label} style={{ flex: 1, gap: 4 }}>
                <View
                  style={{
                    height: 4,
                    borderRadius: 999,
                    backgroundColor:
                      i <= stepIndex ? "white" : "rgba(255,255,255,0.25)",
                  }}
                />
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "500",
                    color: i === stepIndex ? "white" : "rgba(255,255,255,0.45)",
                  }}
                >
                  {label}
                </Text>
              </View>
            ))}
          </View>
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
          {step === "account" && (
            <View style={{ gap: 12, marginBottom: 20 }}>
              <FormField
                label="Nome completo"
                value={name}
                onChangeText={(v: React.SetStateAction<string>) => {
                  setName(v);
                  clearError("name");
                }}
                placeholder="Natali Schers"
                error={errors.name}
              />
              <FormField
                label="E-mail"
                value={email}
                onChangeText={(v: React.SetStateAction<string>) => {
                  setEmail(v);
                  clearError("email");
                }}
                placeholder="seu@email.com.br"
                keyboardType="email-address"
                autoCapitalize="none"
                error={errors.email}
              />
              <View>
                <PasswordField
                  label="Senha"
                  value={password}
                  onChangeText={(v: React.SetStateAction<string>) => {
                    setPassword(v);
                    clearError("password");
                  }}
                  placeholder="••••••••"
                  error={errors.password}
                />
                <PasswordStrength password={password} />
              </View>
            </View>
          )}

          {step === "vehicle" && (
            <View style={{ gap: 16, marginBottom: 20 }}>
              <View>
                <Text style={[styles.label, { marginBottom: 8 }]}>
                  Modelo do veículo
                </Text>
                <View style={styles.vehicleGrid}>
                  {vehicles.map((v) => {
                    const selected = vehicle === v;
                    return (
                      <TouchableOpacity
                        key={v}
                        onPress={() => setVehicle(v)}
                        activeOpacity={0.7}
                        style={[
                          styles.vehicleChip,
                          selected && styles.vehicleChipSelected,
                        ]}
                      >
                        <Text
                          style={[
                            styles.vehicleChipText,
                            selected && styles.vehicleChipTextSelected,
                          ]}
                        >
                          {v}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>

              <View>
                <Text style={styles.label}>Capacidade da bateria (kWh)</Text>
                <View style={styles.batteryRow}>
                  {batteryOptions.map((kwh) => {
                    const selected = batteryKwh === kwh;
                    return (
                      <TouchableOpacity
                        key={kwh}
                        onPress={() => setBatteryKwh(kwh)}
                        style={[
                          styles.batteryChip,
                          selected && styles.vehicleChipSelected,
                        ]}
                      >
                        <Text
                          style={[
                            styles.batteryChipText,
                            selected && styles.vehicleChipTextSelected,
                          ]}
                        >
                          {kwh} kWh
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>

              <View style={styles.infoBox}>
                <Text style={styles.infoText}>
                  🎯 Com essas informações, a Flui calcula sua autonomia e
                  sugere paradas ideais para suas viagens.
                </Text>
              </View>
            </View>
          )}

          {step === "account" && (
            <PrimaryButton label="Continuar" onPress={handleNext} />
          )}

          {step === "vehicle" && (
            <View style={{ gap: 12, marginBottom: 20 }}>
              <PrimaryButton
                label="Criar minha conta"
                loadingLabel="Criando conta…"
                loading={loading}
                onPress={handleFinish}
                gradientStyle={{ marginBottom: 0 }}
              />
            </View>
          )}

          <View style={{ alignItems: "center" }}>
            <Text style={styles.footerText}>
              Já tem uma conta?{" "}
              <Text style={styles.footerLink} onPress={handleLoginRedirect}>
                Entrar
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
  label: { fontSize: 12, fontWeight: "600", color: "#4B5563", marginBottom: 6 },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  vehicleGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  vehicleChip: {
    width: "48%",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    backgroundColor: "white",
  },
  vehicleChipSelected: { borderColor: "#9333EA", backgroundColor: "#F3E8FF" },
  vehicleChipText: { fontSize: 14, fontWeight: "500", color: "#4B5563" },
  vehicleChipTextSelected: { color: "#6D28D9" },
  batteryRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  batteryChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    backgroundColor: "white",
  },
  batteryChipText: { fontSize: 14, fontWeight: "600", color: "#6B7280" },
  infoBox: {
    backgroundColor: "#FAF5FF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#F3E8FF",
  },
  infoText: { fontSize: 12, color: "#7E22CE", lineHeight: 17 },
  footerText: { fontSize: 14, color: "#6B7280" },
  footerLink: { fontWeight: "700", color: "#6D28D9" },
  doneScreen: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  doneIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#7C3AED",
    shadowOpacity: 0.4,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  doneTitle: {
    fontWeight: "900",
    color: "#111827",
    fontSize: 24,
    marginBottom: 4,
  },
  doneSubtitle: { fontSize: 14, color: "#6B7280", marginBottom: 8 },
  doneHint: { fontSize: 12, color: "#9CA3AF" },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#9333EA" },
});
