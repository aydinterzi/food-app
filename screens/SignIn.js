import { View, TextInput, Button, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { signIn, signUp } from "../config/firebase";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    console.log(email);
    console.log(password);
    const user = await signUp(email, password);
    console.log(user);
  };

  return (
    <KeyboardAvoidingView className="flex-1 justify-center items-center">
      <TextInput
        placeholder="Email"
        className="w-1/2"
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <TextInput
        placeholder="Password"
        className="w-1/2"
        onChangeText={(text) => setPassword(text)}
      ></TextInput>
      <Button onPress={handleSignIn} title="Learn More" />
    </KeyboardAvoidingView>
  );
}
