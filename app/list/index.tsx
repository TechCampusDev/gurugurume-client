import {StyleProp, StyleSheet, Text, View} from "react-native";
import React from "react";
import List from "../../components/list";

export default function StoreList() {
    return (
        <View style={{flex: 1}}>
            <Text>test</Text>
            <Toggle style={styles.toggle} />
            <List />
        </View>
    );
}

const Toggle = ({style}: StyleProp<any>) => {
    return (
        <View style={style}>
            <Text>toggle</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    toggle: {
        alignSelf: "center"
    }
});