import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppRoute from "../../app_route/app_route";
import React from "react";
import RoundButton from "../../components/round_button";
import Logo from "../../components/logo";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        {/* トップバー */}
        <TopBar />
        {/* ボディー */}
        <Text style={{ fontSize: 24 }}>Home</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const TopBar = () => {
  const router = useRouter();

  const goToSetting = () => {
    router.push(AppRoute.setting);
  };

  return (
    <View style={styles.topBar}>
      <Logo />
      <View style={{ flex: 1 }} />
      <RoundButton iconName={"refresh"} onPress={() => console.log("更新")} />
      <View style={{ width: 16 }} />
      <RoundButton iconName={"menu"} onPress={goToSetting} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topBar: {
    position: "absolute",
    top: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 24,
  },
});
