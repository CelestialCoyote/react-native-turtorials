import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";


export default function GoalInput(props) {
	const [goalText, setGoalText] = useState("");

	const goalInputHandler = (enteredText) => {
		setGoalText(enteredText);
	};

	function addGoalHandler() {
		props.addGoal(goalText);
		setGoalText("");
	}

	return (
		<Modal
			visible={props.visible}
			animationType="slide"
		>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					value={goalText}
					onChangeText={goalInputHandler}
				/>
				<Button
					title="Add Goal"
					onPress={addGoalHandler}
				/>
			</View>
		</Modal>
	);
};


const styles = StyleSheet.create({
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
});
