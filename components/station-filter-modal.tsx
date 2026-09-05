import { useState } from "react";
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BackIcon } from "./icons";
import PrimaryButton from "./primary-button";

export interface StationFilters {
  intents: string[];
  connectors: string[];
  minPower: number | null;
  amenities: string[];
}

export const EMPTY_FILTERS: StationFilters = {
  intents: [],
  connectors: [],
  minPower: null,
  amenities: [],
};

interface Props {
  visible: boolean;
  initialFilters: StationFilters;
  onClose: () => void;
  onApply: (filters: StationFilters) => void;
}

const intentOptions = [
  "Carregar rápido",
  "Economizar",
  "Baixo movimento",
  "Aberto agora",
  "Confortável para esperar",
  "Seguro à noite",
];

const connectorOptions = ["CCS2", "CHAdeMO", "Tipo 2"];
const powerOptions = [50, 100, 150];
const amenityOptions = [
  "Café",
  "Restaurante",
  "Banheiro",
  "Wi-Fi",
  "Estacionamento",
  "Cobertura",
  "Acessibilidade",
];

function toggleInArray(arr: string[], value: string) {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

export default function StationFilterModal({
  visible,
  initialFilters,
  onClose,
  onApply,
}: Props) {
  const [filters, setFilters] = useState<StationFilters>(initialFilters);

  const handleClear = () => setFilters(EMPTY_FILTERS);

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.screen}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.backButton}>
            <BackIcon color="#374151" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Filtrar pontos</Text>
          <TouchableOpacity onPress={handleClear}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <View>
            <Text style={styles.sectionTitle}>
              O que é importante para você?
            </Text>
            <View style={styles.chipsWrap}>
              {intentOptions.map((option) => {
                const selected = filters.intents.includes(option);
                return (
                  <TouchableOpacity
                    key={option}
                    onPress={() =>
                      setFilters((f) => ({
                        ...f,
                        intents: toggleInArray(f.intents, option),
                      }))
                    }
                    style={[styles.chip, selected && styles.chipSelected]}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        selected && styles.chipTextSelected,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View>
            <Text style={styles.sectionTitle}>Conector</Text>
            <View style={styles.chipsWrap}>
              {connectorOptions.map((option) => {
                const selected = filters.connectors.includes(option);
                return (
                  <TouchableOpacity
                    key={option}
                    onPress={() =>
                      setFilters((f) => ({
                        ...f,
                        connectors: toggleInArray(f.connectors, option),
                      }))
                    }
                    style={[styles.chip, selected && styles.chipSelected]}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        selected && styles.chipTextSelected,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View>
            <Text style={styles.sectionTitle}>Potência mínima</Text>
            <View style={styles.chipsWrap}>
              {powerOptions.map((option) => {
                const selected = filters.minPower === option;
                return (
                  <TouchableOpacity
                    key={option}
                    onPress={() =>
                      setFilters((f) => ({
                        ...f,
                        minPower: f.minPower === option ? null : option,
                      }))
                    }
                    style={[styles.chip, selected && styles.chipSelected]}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        selected && styles.chipTextSelected,
                      ]}
                    >
                      {option} kW{option === 150 ? "+" : ""}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View>
            <Text style={styles.sectionTitle}>Comodidades</Text>
            <View style={{ gap: 8 }}>
              {amenityOptions.map((option) => {
                const selected = filters.amenities.includes(option);
                return (
                  <TouchableOpacity
                    key={option}
                    onPress={() =>
                      setFilters((f) => ({
                        ...f,
                        amenities: toggleInArray(f.amenities, option),
                      }))
                    }
                    style={styles.amenityRow}
                  >
                    <Text style={styles.amenityRowText}>{option}</Text>
                    <View
                      style={[
                        styles.checkbox,
                        selected && styles.checkboxSelected,
                      ]}
                    >
                      {selected && <View style={styles.checkboxDot} />}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <PrimaryButton
            label="Mostrar pontos"
            onPress={handleApply}
            gradientStyle={{ marginBottom: 0 }}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "white" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: { fontSize: 16, fontWeight: "700", color: "#111827" },
  clearText: { fontSize: 14, fontWeight: "600", color: "#9333EA" },
  content: { padding: 20, gap: 24 },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
  },
  chipsWrap: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    backgroundColor: "white",
  },
  chipSelected: { borderColor: "#9333EA", backgroundColor: "#F3E8FF" },
  chipText: { fontSize: 13, fontWeight: "500", color: "#4B5563" },
  chipTextSelected: { color: "#6D28D9" },
  amenityRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  amenityRowText: { fontSize: 14, color: "#374151" },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxSelected: { borderColor: "#9333EA" },
  checkboxDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#9333EA",
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
  },
});
