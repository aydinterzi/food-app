import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import FoodCard from "../components/FoodCard";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row justify-between p-2">
        <View className="flex-row gap-4">
          <Image
            className="w-16 h-16 rounded-full"
            source={{
              uri: "https://links.papareact.com/wru",
            }}
          />
          <Text>Current location</Text>
        </View>
        <Text>User</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ScrollView>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ScrollView>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ScrollView>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
