import { Link, useLocalSearchParams } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function UserPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>UsersPage {id}</Text>
    </View>
  );
}
