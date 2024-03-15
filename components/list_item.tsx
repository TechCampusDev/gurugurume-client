import {Button, StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {useState} from "react";
import {FontAwesome5} from "@expo/vector-icons"

interface ListItemInterface {
    itemName: string,
    favorite: boolean,
}

const ListItem: React.FC<ListItemInterface> = ({itemName, favorite}) => {
    const [favoriteState, setFavoriteState] = useState(favorite);
    const favoriteChange = () => {
        setFavoriteState(!favoriteState);
        console.log(`press ${favoriteState}`);
    }

    return (
        <View style={styles.item}>
            <Text>{itemName}</Text>
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
        height: "auto",
        flexDirection: "row",
        // alignContent: "space-between"
        justifyContent: "space-between",
    },
    icon: {
        backgroundColor: "#fff",
        // color: "#ff0000",
        paddingRight: 0,
        // paddingHorizontal: 10
    }
})