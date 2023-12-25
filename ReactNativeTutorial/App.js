import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";


export default function App() {
	const [goalText, setGoalText] = useState("");
	const [goals, setGoals] = useState([]);

	const goalInputHandler = (enteredText) => {
		// console.log(enteredText);
		setGoalText(enteredText);
	};

	const addGoalHandler = () => {
		// console.log(goalText);
		setGoals(currentGoals => [...currentGoals, goalText]);
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
				/>
				<Button
					title="Add Goal"
					onPress={addGoalHandler}
				/>
			</View>

			<View style={styles.goalsContainer}>
				{goals.map((goal) =>
					<View
						key={goal}
						style={styles.goalItem}
					>
						<Text>{goal}</Text>
					</View>
				)}
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
	inputContainer: {
		alignItems: "center",
		borderBottomColor: "#CCCCCC",
		borderBottomWidth: 1,
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 24
	},
	textInput: {
		borderColor: "#CCCCCC",
		borderWidth: 1,
		marginRight: 8,
		padding: 8,
		width: "70%",
	},
	goalsContainer: {
		flex: 5,
	},
	goalItem: {
		backgroundColor: "gold",
		borderRadius: 8,
		color: "green",
		margin: 4,
		padding: 8,
	}
});
