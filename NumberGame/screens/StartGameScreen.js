import { StyleSheet, Alert, TextInput, View } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";


export default function StartGameScreen() {
    const [enteredNumber, setEnteredNumber] = useState("");

    const numberInputHandler = (enteredNumber) => {
        setEnteredNumber(enteredNumber);
    };

    const resetInputHandler = () => {
        setEnteredNumber("");
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Invalid Number",
                "Number must be between 1 and 99",
                [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
            );

            return;
        };

        console.log("Valid Number");
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
            />

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        onPress={resetInputHandler}
                    >
                        Reset
                    </PrimaryButton>
                </View>

                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        onPress={confirmInputHandler}
                    >
                        Confirm
                    </PrimaryButton>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        backgroundColor: "#3B021F",
        borderRadius: 8,
        elevation: 4,
        justifyContent: "center",
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
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    }
});
