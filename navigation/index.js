import React from "react";
import { useAuth } from "../hooks/useAuth";
import AuthStack from "./authStack";
import UserStack from "./userStack";
export default function RootNavigation() {
  const { user } = useAuth();

  return user ? <UserStack /> : <AuthStack />;
}
