import { View, Text, Image, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartContext } from "../context/store";

const DetailScreen = ({ navigation, route }) => {
  const { id, name, price, unit, description, image } = route.params;
  const cartContext = useContext(CartContext);
  function handleAddtoCart() {
    cartContext.addToCart({
      id,
      name,
      price,
      unit,
      piece: 1,
    });
    console.log(cartContext.cart);
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="bg-white shadow-2xl shadow-slate-700">
        <Image
          className="w-40 h-40 rounded-t-sm self-center mb-20 mt-10"
          source={{
            uri: "https://links.papareact.com/wru",
          }}
        />
        <View className="flex items-center gap-5 border-t-[1px] border-indigo-200 mt-3">
          <Text className="font-extrabold text-2xl">{name}</Text>
          <Text className="font-bold text-lg">{price} ₺</Text>
        </View>
      </View>

      <View className="bg-white mt-5 py-8 px-3">
        <Text className="text-lg font-medium">Description</Text>
        <Text className="text-sm">{description}</Text>
      </View>

      <View className="flex-1 items-center justify-end">
        <Pressable onPress={handleAddtoCart}>
          <View className="w-80 p-5 flex items-center bg-green-500 mb-4 rounded-full">
            <Text className="text-lg font-bold text-white">Add to cart</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
