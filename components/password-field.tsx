import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View,
} from "react-native";
import { EyeIcon } from "./icons";

interface PasswordFieldProps extends Omit<
  TextInputProps,
  "style" | "secureTextEntry"
> {
  label: string;
  error?: string;
}

export default function PasswordField({
  label,
  error,
  ...inputProps
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={{ position: "relative", justifyContent: "center" }}>
        <TextInput
          placeholderTextColor="#9CA3AF"
          secureTextEntry={!visible}
          style={[
            styles.input,
            { paddingRight: 48 },
            error ? styles.inputError : null,
          ]}
          {...inputProps}
        />
        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          style={styles.eyeButton}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <EyeIcon visible={visible} />
        </TouchableOpacity>
      </View>
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
  eyeButton: {
    position: "absolute",
    right: 16,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
});
