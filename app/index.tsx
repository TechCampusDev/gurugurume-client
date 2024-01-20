import { Redirect } from "expo-router";
import AppRoute from "../app_route/app_route";
import Auth from "../auth/auth";

export default function Main() {
  const auth = Auth.getInstance();

  return auth.isAuthenticated ? (
    <Redirect href={AppRoute.home} />
  ) : (
    <Redirect href={AppRoute.home} />
  );
}
