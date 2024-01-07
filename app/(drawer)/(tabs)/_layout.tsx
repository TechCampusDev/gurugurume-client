import { Tabs } from "expo-router";
import { ReactNode } from "react";
import { Animated } from "react-native";
import { DrawerLayout } from "react-native-gesture-handler";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          tabBarLabel: "User",
          title: "User",
        }}
      />
    </Tabs>
  );
}
