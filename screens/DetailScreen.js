import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const DetailScreen = () => {
  return (
    <SafeAreaView className="flex-1 border">
      <Image
        className="w-40 h-40 rounded-t-sm self-center"
        source={{
          uri: "https://links.papareact.com/wru",
        }}
      />
    </SafeAreaView>
  );
};

export default DetailScreen;
