import {StyleSheet, Text, View} from "react-native";
import {useState} from "react";
import {TouchableHighlight} from "react-native-gesture-handler";

const Toggle = () => {
    const [toggleStatus, setToggleStatus] = useState(false);
    return (
        <View style={styles().toggle}>
            <TouchableHighlight
                style={styles().backStyle}
                onPress={() => setToggleStatus(!toggleStatus)}
                underlayColor={"#bebebe"}
            >
                <>
                    <Text style={styles(!toggleStatus).childStyle}>no1</Text>
                    <Text style={styles(toggleStatus).childStyle}>no2</Text>
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