import {StyleSheet, Text, View} from "react-native";
import {TouchableHighlight} from "react-native-gesture-handler";

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
                    console.log("pressed");
                    setIsFavoriteList(!isFavoriteList);
                }}
                underlayColor={"#bebebe"}
            >
                <>
                    <Text style={styles(!isFavoriteList).childStyle}>no1</Text>
                    <Text style={styles(isFavoriteList).childStyle}>no2</Text>
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
        backgroundColor: "#bebebe",
        borderRadius: 20,
        flexDirection: "row",
        alignContent: "space-around",
        // flex: 1
    },
    childStyle: {
        padding: 10,
        width: 100,
        borderRadius: 20,
        backgroundColor: status ? "#ff0000" : undefined,
        textAlign: "center",
    }
});