import { StyleSheet, Text, View, Button } from "react-native";


export default function App() {
	return (
		<View style={styles.container}>
			<View>
				<Text>Open up App.js to start working on your app!</Text>
			</View>

			<Text style={{margin: 16, borderWidth: 2, borderColor: "red", padding: 16}}>
				Hello World.
			</Text>

			<Button title="Click Me!" />
		</View>
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
