import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const FoodCard = ({
  id,
  price = 5,
  unit,
  name = "karniyarik",
  description,
  imageURL = "https://links.papareact.com/wru",
}) => {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("Detail", {
      id,
      name,
      price,
      unit,
      description,
      imageURL,
    });
  }

  return (
    <View className="flex w-1/4">
      <Pressable onPress={handlePress}>
        <Image
          className="w-16 h-16 rounded-t-sm self-center"
          source={{
            uri: imageURL,
          }}
        />
        <View className="flex flex-row justify-center gap-4">
          <Text>{name}</Text>
          <Text>{price}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default FoodCard;
