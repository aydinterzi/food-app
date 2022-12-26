import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import CartScreen from "../screens/CartScreen";
import MapScreen from "../screens/MapScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name="cart"
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeStack} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
