import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const DetailScreen = ({ navigation, route }) => {
  const { id, name, price, unit, description, image } = route.params;
  return (
    <SafeAreaView className="flex-1 border">
      <Image
        className="w-40 h-40 rounded-t-sm self-center"
        source={{
          uri: "https://links.papareact.com/wru",
        }}
      />
      <View className="flex flex-row justify-center gap-5">
        <Text>{name}</Text>
        <Text>{price}</Text>
      </View>
      <View className="flex flex-row justify-center gap-5">
        <Text>{unit}</Text>
        <Text>{description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
