import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";


export default function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <PrimaryButton>
                Reset
            </PrimaryButton>

            <PrimaryButton>
                Confirm
            </PrimaryButton>
        </View>
    );
};


const styles = StyleSheet.create({
	inputContainer: {
        backgroundColor: "#4E0329",
        borderRadius: 8,
        elevation: 4,
        marginHorizontal: 24,
        marginTop: 100,
        padding: 16,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        borderBottomColor: "#DDB52F",
        borderBottomWidth: 2,
        color: "#DDB52F",
        fontSize: 32,
        fontWeight: "bold",
        height: 50,
        marginVertical: 8,
        textAlign: "center",
        width: 50,
    }
});
