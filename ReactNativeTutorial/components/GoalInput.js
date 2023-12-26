import { StyleSheet, View, TextInput, Button } from "react-native";


export default function GoalInput() {
    const goalInputHandler = (enteredText) => {
		setGoalText(enteredText);
	};

	const addGoalHandler = () => {
		setGoals(currentGoals => [
			...currentGoals,
			{text: goalText, id: Math.random().toString()}
		]);
	};

    return (
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
