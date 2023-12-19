import { useState } from "react";
import { StyleSheet, View } from 'react-native';
import { StatusBar } from "expo-status-bar";
// import ImagePicker from "expo-image-picker";
import { launchImageLibraryAsync } from "expo-image-picker";
import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";


const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
	const [selectedImage, setSelectedImage] = useState(null);
	const [showAppOptions, setShowAppOptions] = useState(false);

	const pickImageAsync = async () => {
		// let result = await ImagePicker.launchImageLibraryAsync({
		let result = await launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1,
		});

		if (!result.canceled) {
			// console.log(result);
			setSelectedImage(result.assets[0].uri);
			setShowAppOptions(true);
		} else {
			alert('You did not select any image.');
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageViewer
					placeholderImageSource={PlaceholderImage}
					selectedImage={selectedImage}
				/>
			</View>

			<View style={styles.footerContainer}>
				<Button
					theme="primary"
					label="Choose a photo"
					onPress={pickImageAsync}
				/>
				<Button label="Use this photo" />
			</View>

			<StatusBar style='auto' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#25292E',
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageContainer: {
		flex: 1,
		paddingTop: 58,
	},
	footerContainer: {
		flex: 1 / 3,
		alignItems: "center"
	},
});
