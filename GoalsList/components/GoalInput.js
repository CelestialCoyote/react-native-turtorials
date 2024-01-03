import { useState } from "react";
import { 
	StyleSheet,
	Button,
	Image,
	Modal,
	TextInput,
	View,
} from "react-native";


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
				<Image
					style={styles.image}
					source={require("../assets/images/goal.png")}
				/>

				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					value={goalText}
					onChangeText={goalInputHandler}
				/>

				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="Add Goal"
							color="cyan"
							onPress={addGoalHandler}
						/>
					</View>

					<View style={styles.button}>
						<Button
							title="Cancel"
							color="red"
							onPress={props.onCancel}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};


const styles = StyleSheet.create({
	inputContainer: {
		alignItems: "center",
		backgroundColor: "blue",
		borderBottomColor: "#CCCCCC",
		flex: 1,
		justifyContent: "center",
		padding: 16
	},
	textInput: {
		backgroundColor: "yellow",
		borderColor: "yellow",
		borderRadius: 6,
		borderWidth: 1,
		color: "blue",
		padding: 12,
		width: "100%",
	},
	buttonContainer: {
		flexDirection: "row",
		marginTop: 16
	},
	button: {
		marginHorizontal: 8,
		width: 100
	},
	image: {
		height:100,
		margin: 20,
		width: 100
	}
});
