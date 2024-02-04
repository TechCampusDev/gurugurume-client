import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppRoute from "../../app_route/app_route";
import React, { useEffect, useState } from "react";
import RoundButton from "../../components/round_button";
import Logo from "../../components/logo";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

export default function Home() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<String>("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("位置情報の取得を許可してください。");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (location !== null) {
      setErrorMsg("");
      return;
    }
    setErrorMsg("取得中...");
  }, [location]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        {/* ボディー */}
        {location !== null ? (
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0461,
              longitudeDelta: 0.021,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
            />
          </MapView>
        ) : (
          <Text>{errorMsg}</Text>
        )}

        {/* トップバー */}
        <TopBar />

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
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
  safeAreaView: {
    flex: 1,
  },
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
  map: {
    width: "100%",
    height: "100%",
  },
});
