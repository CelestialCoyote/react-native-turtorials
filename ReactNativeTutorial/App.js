import { StyleSheet, Text, View, Button, TextInput } from "react-native";


export default function App() {
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
				/>
				<Button title="Add Goal" />
			</View>

			<View style={styles.goalsContainer}>
				<Text>
					List of goals...
				</Text>
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
	}
});
