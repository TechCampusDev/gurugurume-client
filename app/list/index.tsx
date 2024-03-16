import React, {useState} from "react";
import List from "../../components/list";
import Toggle from "../../components/toggle";
import {ScrollView} from "react-native-gesture-handler";


export default function StoreList() {
    const [isFavoriteList, setIsFavoriteList] = useState(false);

    return (
        <ScrollView style={{flex: 1, alignContent: "center"}}>
            <Toggle isFavoriteList={isFavoriteList} setIsFavoriteList={setIsFavoriteList}/>
            <List isFavoriteList={isFavoriteList}/>
        </ScrollView>
    );
}
