import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface RoundButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  iconName: string;
}

const RoundButton: React.FC<RoundButtonProps> = ({
  onPress,
  style,
  iconName,
}) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle, style]} onPress={onPress}>
      <Icon name={iconName} size={30} color="black" />
    </TouchableOpacity>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
