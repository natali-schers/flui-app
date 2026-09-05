import { LinearGradient } from "expo-linear-gradient";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";

interface PrimaryButtonProps extends TouchableOpacityProps {
  label: string;
  loading?: boolean;
  loadingLabel?: string;
  gradientStyle?: StyleProp<ViewStyle>;
}

export default function PrimaryButton({
  label,
  loading = false,
  loadingLabel,
  disabled,
  gradientStyle,
  ...touchableProps
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={disabled ?? loading}
      {...touchableProps}
    >
      <LinearGradient
        colors={["#7C3AED", "#9333EA"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.button, { opacity: loading ? 0.8 : 1 }, gradientStyle]}
      >
        {loading ? (
          <View style={styles.loadingRow}>
            <ActivityIndicator color="white" size="small" />
            <Text style={styles.text}>{loadingLabel ?? label}</Text>
          </View>
        ) : (
          <Text style={styles.text}>{label}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#7C3AED",
    shadowOpacity: 0.4,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  text: { color: "white", fontWeight: "700", fontSize: 14 },
  loadingRow: { flexDirection: "row", alignItems: "center", gap: 8 },
});
