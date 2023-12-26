import { useState } from "react";
import {
	StyleSheet,
	View,
	Button,
	TextInput,
	FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItems";


export default function App() {
	const [goalText, setGoalText] = useState("");
	const [goals, setGoals] = useState([]);

	return (
		<View style={styles.appContainer}>
			<GoalInput />

			<View style={styles.goalsContainer}>
				<FlatList
					data={goals}
					renderItem={itemData => {
						return <GoalItem text={itemData.item.text} />;
					}}
					keyExtractor={(item, index) => {
						return item.id;
					}}
					alwaysBounceVertical={false}
				/>
			</View>
		</View>
	);
};


const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingHorizontal: 16,
		paddingTop: 50,
	},
	
	goalsContainer: {
		flex: 5,
	},
});
