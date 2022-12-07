import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const FoodCard = ({ price, unit, name, description, imageURL }) => {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("Detail");
  }

  return (
    <View className="flex w-1/4">
      <Pressable onPress={handlePress}>
        <Image
          className="w-16 h-16 rounded-t-sm self-center"
          source={{
            uri: "https://links.papareact.com/wru",
          }}
        />
        <View className="flex flex-row justify-center gap-4">
          <Text>Yemek ismi</Text>
          <Text>5tl</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default FoodCard;
