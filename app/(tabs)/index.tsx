import { Link, router } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function HomePage() {
  return (
    <View>
      <Text>HomePage</Text>
      <Link href="/users/1">Go User 1</Link>
      <Pressable
        onPress={() =>
          router.push({ pathname: "/users/[id]", params: { id: 2 } })
        }
      >
        <Text>Go to User 2</Text>
      </Pressable>
    </View>
  );
}
