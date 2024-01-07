import { Redirect } from "expo-router";
import AppRoute from "../app_route/app_route";

export default function Main() {
  return <Redirect href={AppRoute.home} />;
}
