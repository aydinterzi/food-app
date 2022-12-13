import { View, TextInput, Button, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { signIn, signUp } from "../config/firebase";
import ColorButton from "../components/ColorButton";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    const user = await signIn(email, password);
    console.log(user);
  };

  const handleSignUp = async () => {
    const user = await signUp(email, password);
    console.log(user);
  };

  return (
    <KeyboardAvoidingView className="flex-1 justify-center items-center">
      <TextInput
        placeholder="Email"
        className="w-1/2 border rounded-md mb-3 p-1"
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <TextInput
        placeholder="Password"
        className="w-1/2 border rounded-md mb-3 p-1"
        onChangeText={(text) => setPassword(text)}
      ></TextInput>
      <View className="flex-row flex">
        <ColorButton
          onPress={handleSignIn}
          text="Sign In"
          classes="border rounded-md p-2 mr-3"
        />
        <ColorButton
          onPress={handleSignUp}
          text="Sign Up"
          classes="border rounded-md p-2"
        />
      </View>
    </KeyboardAvoidingView>
  );
}
