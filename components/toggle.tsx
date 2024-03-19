import {Platform, StyleSheet, Text, View} from "react-native";
import {TouchableHighlight} from "react-native-gesture-handler";
import React from "react";

type StateProps = {
    isFavoriteList: boolean,
    setIsFavoriteList: React.Dispatch<React.SetStateAction<boolean>>
};

const Toggle = ({isFavoriteList, setIsFavoriteList}: StateProps) => {

    return (
        <View style={styles().toggle}>
            <TouchableHighlight
                style={styles().backStyle}
                onPress={() => {
                    setIsFavoriteList(!isFavoriteList);
                }}
                underlayColor={"#bebebe"}
            >
                <>
                    <Text style={styles(!isFavoriteList).childStyle}>履歴</Text>
                    <Text style={styles(isFavoriteList).childStyle}>お気に入り</Text>
                </>
            </TouchableHighlight>
        </View>
    )
};

export default Toggle;

const styles = (status?: boolean) => StyleSheet.create({
    toggle: {
        alignSelf: "center",
        paddingVertical: 30
    },
    backStyle: {
        backgroundColor: "rgba(199,199,199,0.3)",
        borderRadius: 10,
        flexDirection: "row",
        alignContent: "space-around",
        // flex: 1
    },
    childStyle: {
        margin: 3,
        padding: 7,
        paddingTop: Platform.OS === 'ios'? (status ? 7: 10) : 7,
        width: 125,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: status ? "#ffffff" : undefined,
        borderColor: "#FABB44",
        borderWidth: status? 3: 0,
        fontSize: 20,
        textAlign: "center",
        textAlignVertical: "center"
    }
});