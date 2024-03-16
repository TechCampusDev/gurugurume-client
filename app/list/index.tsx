import React, {useState} from "react";
import List from "../../components/list";
import Toggle from "../../components/toggle";
import {ScrollView} from "react-native-gesture-handler";
import {Stack} from "expo-router";


export default function StoreList() {
    const [isFavoriteList, setIsFavoriteList] = useState(false);

    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "履歴・お気に入りリスト",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 16
                    }
                }}
            />
            <ScrollView style={{flex: 1, alignContent: "center"}}>
                <Toggle isFavoriteList={isFavoriteList} setIsFavoriteList={setIsFavoriteList}/>
                <List isFavoriteList={isFavoriteList}/>
            </ScrollView>
        </>
    );
}
