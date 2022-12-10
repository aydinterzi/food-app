import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import FoodCard from "../components/FoodCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { getFood } from "../utils/http";

const HomeScreen = () => {
  const [food, setFood] = useState([]);

  const getFoods = async () => {
    const response = await getFood();
    setFood(response.data);
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <SafeAreaView className="flex">
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
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        className="mb-5"
      >
        {food.appetizers.map((item) => (
          <FoodCard {...item} />
        ))}
      </ScrollView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        className="mb-5"
      >
        {food.entrees.map((item) => (
          <FoodCard {...item} />
        ))}
      </ScrollView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        className="mb-5"
      >
        {food.appetizers.map((item) => (
          <FoodCard {...item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
