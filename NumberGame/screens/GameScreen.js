import { useEffect, useState } from "react";
import { StyleSheet, Alert, Text, View } from "react-native";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";


const generateRandomBetween = (min, max, exclude) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
};

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);


    const nextGuessHandler = (direction) => {
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "greater" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", "You know that is wrong...",
                [{ text: "Sorry!", style: "cancel" },]
            );
            return;
        };

        if (direction === "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        };

        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);

        setCurrentGuess(newRandomNumber);
    };

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(true);
        };
    }, [currentGuess, userNumber, onGameOver]);

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>

            <NumberContainer>
                {currentGuess}
            </NumberContainer>

            <Card>
                <InstructionText>Higher or Lower?</InstructionText>

                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                        -
                    </PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                        +
                    </PrimaryButton>
                </View>
            </Card>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
});
