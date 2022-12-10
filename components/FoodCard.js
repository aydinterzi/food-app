import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const FoodCard = ({
  id,
  price = 5,
  unit,
  name = "karniyarik",
  description,
  image = "https://links.papareact.com/wru",
}) => {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("Detail", {
      id,
      name,
      price,
      unit,
      description,
      image,
    });
  }

  return (
    <View className="flex w-36 h-36  bg-orange-400 rounded-2xl mr-5">
      <Pressable
        className="flex items-center justify-evenly h-full w-full"
        onPress={handlePress}
      >
        <Image
          className="w-16 h-16 rounded-t-sm"
          source={{
            uri: "https://links.papareact.com/wru",
          }}
        />
        <View className="flex  flex-row justify-evenly">
          <Text className="basis-1/2">{name}</Text>
          <Text>{price} ₺</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default FoodCard;
