import { View, Text } from "react-native";
import React from "react";
import MapPicker from "../components/MapPicker";

export default function MapScreen() {
  return (
    <View className="flex-1">
      <MapPicker />
    </View>
  );
}
