import { StyleSheet, FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";



const renderCategoryItem = (itemData) => {
    return (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
        />
    );
};

export default function CategoriesScreen() {
    return (
        // <View>
            <FlatList
                keyExtractor={(item) => item.id}
                data={CATEGORIES}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        // </View>
    );
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});