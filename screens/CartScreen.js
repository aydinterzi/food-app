import { View, Text, Image, Pressable } from "react-native";
import React, { useContext } from "react";
import { CartContext } from "../context/store";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ColorButton from "../components/ColorButton";

export default function CartScreen() {
  const { cart, updateQuantity } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <SafeAreaView className="flex-1 p-2 bg-gray-100 justify-between">
      <View>
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
                <Ionicons
                  name={item.quantity === 1 ? "trash" : "remove"}
                  size={24}
                  color="white"
                />
              </Pressable>
              <Text className="mx-3 text-white">{item.quantity}</Text>
              <Pressable onPress={() => updateQuantity(item.id, 1)}>
                <Ionicons name="add" size={24} color="white" />
              </Pressable>
            </View>
          </View>
        ))}
      </View>

      <View className="bg-white flex-row px-4 py-2 items-center">
        <View className="flex-col items-center mr-5">
          <Text>Toplam Tutar</Text>
          <Text>{total} ₺</Text>
        </View>

        <ColorButton
          classes="flex-1 bg-orange-600 p-3 rounded-xl"
          text="Confirm Cart"
          textClasses="text-center text-white font-bold text-lg"
          onPress={() => console.log("asd")}
        />
      </View>
    </SafeAreaView>
  );
}
