import { useState } from "react";
import {
	StyleSheet,
	View,
	FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItems";


export default function App() {
	const [goals, setGoals] = useState([]);

	const addGoalHandler = (goalText) => {
		setGoals(currentGoals => [
			...currentGoals,
			{text: goalText, id: Math.random().toString()}
		]);
	};

	return (
		<View style={styles.appContainer}>
			<GoalInput addGoal={addGoalHandler}/>

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
