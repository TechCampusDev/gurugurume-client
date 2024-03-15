import {Text} from "react-native";

interface ListItemInterface {
    itemName: string,
    favorite: boolean,
}

const ListItem: React.FC<ListItemInterface> = ({itemName, favorite}) => {
    return (
        <>
            <Text>item test</Text>
        </>
    );
}

export default ListItem;