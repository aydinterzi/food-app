import { View, Text, Image, Pressable } from "react-native";
import React, { useContext } from "react";
import { CartContext } from "../context/store";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartScreen() {
  const { cart, updateQuantity } = useContext(CartContext);
  return (
    <SafeAreaView className="m-4 bg-gray-100">
      {cart.map((item) => (
        <View
          key={item.id}
          className="flex-row mb-4 p-4 justify-between items-center bg-white rounded-xl"
        >
          <View className="basis-2/3 flex-row">
            <Image
              className="w-16 h-16"
              source={{
                uri: "https://links.papareact.com/wru",
              }}
            />
            <View className="flex-col justify-around ml-4">
              <Text>{item.name}</Text>
              <Text>{item.price} ₺</Text>
            </View>
          </View>
          <View className="flex-row bg-green-500 rounded-2xl px-3 py-2">
            <Pressable onPress={() => updateQuantity(item.id, -1)}>
              <Ionicons name="remove" size={24} color="white" />
            </Pressable>
            <Text className="mx-3 text-white">{item.quantity}</Text>
            <Pressable onPress={() => updateQuantity(item.id, 1)}>
              <Ionicons name="add" size={24} color="white" />
            </Pressable>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
}
