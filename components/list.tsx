import {View} from "react-native";
import ListItem from "./list_item";

export default function List() {
    const input = {
        data: {
            items: [
                {
                    "id": 1,
                    "storeName": "レストラン桜木",
                    "favorite": true
                },
                {
                    "id": 2,
                    "storeName": "カフェ陽だまり",
                    "favorite": false
                },
                {
                    "id": 3,
                    "storeName": "居酒屋海風",
                    "favorite": true
                },
                {
                    "id": 4,
                    "storeName": "パスタ工房ベラ",
                    "favorite": false
                },
                {
                    "id": 5,
                    "storeName": "スイーツハウスあまい",
                    "favorite": true
                }
            ]
        }
    };

    return (
        <View>
            {
                input.data.items.map(item => {
                    return(
                        <ListItem
                            itemName={item.storeName}
                            favorite={item.favorite}
                            key={item.id}
                        />
                    );
                })
            }
        </View>
    );
}