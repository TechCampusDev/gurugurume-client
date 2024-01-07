import { Drawer } from "expo-router/drawer";
import { useNavigation } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          title: "グルグルメ",
        }}
      />
      <Drawer.Screen
        name="setting"
        options={{
          drawerLabel: "設定",
          title: "",
          headerLeft: (_) => {
            const navigation = useNavigation();
            return (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 16 }}
              >
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Drawer>
  );
}
