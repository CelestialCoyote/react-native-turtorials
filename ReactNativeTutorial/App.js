import { useState } from "react";
import {
	StyleSheet,
	Button,
	FlatList,
	View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItems";
import { StatusBar } from "expo-status-bar";


export default function App() {
	const [modalVisible, setModalVisible] = useState(false);
	const [goals, setGoals] = useState([]);

	const startAddGoalHandler = () => {
		setModalVisible(true);
	};

	const endAddGaolHandler = () => {
		setModalVisible(false);
	};

	const addGoalHandler = (goalText) => {
		setGoals(currentGoals => [
			...currentGoals,
			{ text: goalText, id: Math.random().toString() }
		]);

		endAddGaolHandler();
	};

	const deleteGoalHandler = (id) => {
		setGoals(currentGoals => {
			return currentGoals.filter((goal) => goal.id !== id);
		});
	}

	return (
		<>
			<StatusBar />

			<View style={styles.appContainer}>
				<Button
					title="Add New Goal"
					color="blue"
					onPress={startAddGoalHandler}
				/>

				<GoalInput
					visible={modalVisible}
					addGoal={addGoalHandler}
					onCancel={endAddGaolHandler}
				/>

				<View style={styles.goalsContainer}>
					<FlatList
						data={goals}
						renderItem={itemData => {
							return (
								<GoalItem
									id={itemData.item.id}
									text={itemData.item.text}
									onDeleteGoal={deleteGoalHandler}
								/>
							);
						}}
						keyExtractor={(item, index) => {
							return item.id;
						}}
						alwaysBounceVertical={false}
					/>
				</View>
			</View>
		</>
	);
};


const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: "skyblue",
		paddingHorizontal: 16,
		paddingTop: 50,
	},

	goalsContainer: {
		flex: 5,
	},
});
