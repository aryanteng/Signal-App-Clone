import { StyleSheet, Text, View } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { Button, Input } from "react-native-elements";
import { Icon } from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";

export default function AddChatScreen({ navigation }) {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a New Chat",
      headerBackTitle: "Chats",
    });
  }, []);

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a Chat Name"
        value={input}
        onChangeText={(text) => setInput(text)}
        // leftIcon={
        //   <Icon name="wechat" type="antdesign" size={24} color="black" />
        // }
      />
      <Button
        onPress={createChat}
        title="Create New Chat"
        style={{ width: 200 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
