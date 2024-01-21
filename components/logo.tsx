import { StyleProp, View, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface LogoProps {
  style?: StyleProp<ViewStyle>;
}

const Logo: React.FC<LogoProps> = ({ style }) => {
  // TODO: ロゴのImageに変更する
  return (
    <View style={style}>
      <Icon name="caret-up" size={32} color="black" />
    </View>
  );
};

export default Logo;
