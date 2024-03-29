import { StyleSheet, Alert, Dimensions, KeyboardAvoidingView, ScrollView, TextInput, View, useWindowDimensions } from "react-native";
import { useState } from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Colors } from "../constants/colors";


export default function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("");

    const { width, height } = useWindowDimensions();

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

        onPickNumber(chosenNumber);
    };

    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView
                style={styles.screen}
                behavior="position"
            >
                <View style={[styles.rootContainer, { narginTop: marginTopDistance }]}>
                    <Title>Guess My Number</Title>

                    <Card>
                        <InstructionText>
                            Enter a Number
                        </InstructionText>

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
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};


//const deviveHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        //marginTop: deviveHeight < 380 ? 30 : 100,
        alignItems: "center",
    },
    numberInput: {
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
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
