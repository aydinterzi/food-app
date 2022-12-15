import { StatusBar } from "expo-status-bar";
import RootNavigation from "./navigation";
import { CartProvider } from "./context/store";
export default function App() {
  return (
    <>
      <CartProvider>
        <StatusBar backgroundColor="gray" />
        <RootNavigation />
      </CartProvider>
    </>
  );
}
