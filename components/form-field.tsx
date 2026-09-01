import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
} from "react-native";

interface FormFieldProps extends Omit<TextInputProps, "style"> {
  label: string;
  error?: string;
}

/**
 * Input de texto padrão com label acima e, quando `error` é passado,
 * borda vermelha + mensagem de erro abaixo (mesmo padrão usado em
 * toda a tela de cadastro).
 */
export default function FormField({
  label,
  error,
  ...inputProps
}: FormFieldProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor="#9CA3AF"
        style={[styles.input, error ? styles.inputError : null]}
        {...inputProps}
      />
      {error ? <Text style={styles.fieldError}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 12, fontWeight: "600", color: "#4B5563", marginBottom: 6 },
  input: {
    width: "100%",
    backgroundColor: "#F9FAFB",
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 14,
    color: "#111827",
  },
  inputError: { borderColor: "#FCA5A5" },
  fieldError: { fontSize: 12, color: "#EF4444", marginTop: 4, marginLeft: 4 },
});
