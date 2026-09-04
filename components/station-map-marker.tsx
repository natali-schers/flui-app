import { Station } from "@/lib/types";
import { getStatusColor } from "@/lib/utils";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  station: Station;
  selected?: boolean;
}

export default function StationMapMarker({ station, selected }: Props) {
  const color = getStatusColor(station.status);

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.bubble,
          { backgroundColor: color },
          selected && styles.bubbleSelected,
        ]}
      >
        <Ionicons name="location" size={16} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  bubble: {
    borderRadius: 32,
    alignItems: "center",
    elevation: 4,
    padding: 8,
    textAlign: "center",
  },
  bubbleSelected: {
    backgroundColor: "#9333EA",
    borderWidth: 2,
    borderColor: "white",
  },
});
