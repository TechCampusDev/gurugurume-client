import {StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import {FontAwesome5} from "@expo/vector-icons"

interface ListItemInterface {
    itemName: string,
    favorite: boolean,
}

const ListItem: React.FC<ListItemInterface> = ({itemName, favorite}) => {
    const [favoriteState, setFavoriteState] = useState(favorite);
    const favoriteChange = () => {
        setFavoriteState(!favoriteState);
    }

    return (
        <View style={styles.item}>
            <Text style={styles.text}>{itemName}</Text>
            <FontAwesome5.Button
                name={"heart"}
                size={16}
                color={"#ff0000"}
                style={styles.icon}
                regular={!favoriteState}
                solid={favoriteState}
                onPress={() => favoriteChange()}
            />
        </View>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    item: {
        flexWrap: "wrap",
        backgroundColor: "#fff",
        padding: 10,
        paddingLeft: 24,
        height: "auto",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: "#C7C7C7",
        borderBottomWidth: 2,
    },
    text: {
        maxWidth: 300
    },
    icon: {
        backgroundColor: "#fff",
        paddingRight: 0,
        textAlign: "center",
    }
})