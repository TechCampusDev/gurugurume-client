import {StyleProp, StyleSheet, Text, View} from "react-native";
import React from "react";
import List from "../../components/list";
import Toggle from "../../components/toggle";
import {ScrollView} from "react-native-gesture-handler";

export default function StoreList() {
    return (
        <ScrollView style={{flex: 1, alignContent: "center"}}>
            <Text>test</Text>
            <Toggle />
            <List />
        </ScrollView>
    );
}