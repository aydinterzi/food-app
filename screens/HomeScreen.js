import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import FoodCard from "../components/FoodCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { getFood } from "../utils/http";
import { signOutFunc } from "../config/firebase";

const HomeScreen = () => {
  const [food, setFood] = useState([]);

  const getFoods = async () => {
    const response = await getFood();
    setFood(response.data);
  };

  useEffect(() => {
    getFoods();
  }, []);

  const signOut = async () => {
    const response = await signOutFunc();
    console.log(response);
  };

  return (
    <SafeAreaView className="flex-1 flex-col bg-gray-100">
      <View className="flex-row justify-between p-2 mb-5">
        <View className="flex-row gap-4">
          <Image
            className="w-16 h-16 rounded-full"
            source={{
              uri: "https://links.papareact.com/wru",
            }}
          />
          <Text>Current location</Text>
        </View>
        <Pressable onPress={signOut}>
          <Text>User</Text>
        </Pressable>
      </View>
      <View className="mb-3">
        <Text className="text-2xl font-bold">What would you like to eat?</Text>
      </View>
      <View>
        <Text className="text-xl font-medium">Appetizers</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {food.appetizers &&
          food.appetizers.map((item, index) => (
            <FoodCard {...item} id={index} />
          ))}
      </ScrollView>
      <View>
        <Text className="text-xl font-medium">Entrees</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {food.entrees && food.entrees.map((item) => <FoodCard {...item} />)}
      </ScrollView>
      <View>
        <Text className="text-xl font-medium">Desserts</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        className="mb-5"
      >
        {food.desserts && food.desserts.map((item) => <FoodCard {...item} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
