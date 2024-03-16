import {View} from "react-native";
import ListItem from "./list_item";

export default function List({isFavoriteList}: {isFavoriteList: boolean}) {
    let input = {
        data: {
            items: [
                {
                    "id": 1,
                    "storeName": "手作りパンと自家製ジャムのカフェ・レストラン森の小径",
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
                },
                {
                    "id": 6,
                    "storeName": "ビストロ太陽",
                    "favorite": false
                },
                {
                    "id": 7,
                    "storeName": "寿司処海山",
                    "favorite": true
                },
                {
                    "id": 8,
                    "storeName": "バーベキューガーデン",
                    "favorite": false
                },
                {
                    "id": 9,
                    "storeName": "サンドイッチステーション",
                    "favorite": true
                },
                {
                    "id": 10,
                    "storeName": "カレーコーナー spice up",
                    "favorite": false
                },
                {
                    "id": 11,
                    "storeName": "ヌードルショップ春雨",
                    "favorite": true
                },
                {
                    "id": 12,
                    "storeName": "オーガニックサラダバー緑風",
                    "favorite": false
                },
                {
                    "id": 13,
                    "storeName": "焼肉ハウス炎",
                    "favorite": true
                },
                {
                    "id": 14,
                    "storeName": "鉄板ダイニング火花",
                    "favorite": false
                },
                {
                    "id": 15,
                    "storeName": "タパス・バル風来",
                    "favorite": true
                },
                {
                    "id": 16,
                    "storeName": "デザートカフェ甘露",
                    "favorite": false
                },
                {
                    "id": 17,
                    "storeName": "ワインバー葡萄の樹",
                    "favorite": true
                },
                {
                    "id": 18,
                    "storeName": "ラーメン激戦区",
                    "favorite": false
                },
                {
                    "id": 19,
                    "storeName": "イタリアン・トラットリア海の幸",
                    "favorite": true
                },
                {
                    "id": 20,
                    "storeName": "フレンチレストラン花椿",
                    "favorite": false
                }
            ]

        }
    };

    return (
        <View style={{marginBottom: 35}}>
            {
                isFavoriteList && input.data.items.map(item => {
                    return(
                        item.favorite &&
                            <ListItem
                                itemName={item.storeName}
                                favorite={item.favorite}
                                key={item.id}
                            />
                    );
                })
            }
            {
                !isFavoriteList && input.data.items.map(item => {
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