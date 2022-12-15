import { View, Text } from "react-native";
import React from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function ColorButton({ onPress, text, classes, textClasses }) {
  return (
    <View className={classes}>
      <Pressable onPress={onPress}>
        <Text className={textClasses}>{text}</Text>
      </Pressable>
    </View>
  );
}
