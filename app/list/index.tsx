import {View} from "react-native";
import {Text} from "react-native";
import React from "react";
import ListItem from "../../components/list_item";

export default function List() {
    return (
        <View style={{flex: 1}}>
            <Text>test</Text>
            <ListItem itemName={"name"} favorite={false} />
            <ListItem itemName={"name"} favorite={false} />
        </View>
    );
}