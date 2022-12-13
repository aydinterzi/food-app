import { View, Text } from "react-native";
import React from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function ColorButton({ onPress, text, classes }) {
  return (
    <View className={classes}>
      <Pressable onPress={onPress}>
        <Text>{text}</Text>
      </Pressable>
    </View>
  );
}
