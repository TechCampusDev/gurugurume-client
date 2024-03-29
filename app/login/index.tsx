import { Button, StyleSheet, View } from "react-native";
import Auth from "../../auth/auth";
import { Stack, useRouter } from "expo-router";
import AppRoute from "../../app_route/app_route";

export default function Login() {
  const auth = Auth.getInstance();
  const router = useRouter();

  const redirectToRoot = () => {
    router.replace(AppRoute.root);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Button
          title="ログイン"
          onPress={() => {
            auth.login();
            redirectToRoot();
          }}
        />
        <View style={{ height: 16 }} />
        <Button
          title="アカウント登録"
          onPress={() => {
            auth.signUp();
            redirectToRoot();
          }}
        />
        <View style={{ height: 16 }} />
        <Button
          title="登録なしで始める"
          onPress={() => {
            auth.signUpAnonymously();
            redirectToRoot();
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
