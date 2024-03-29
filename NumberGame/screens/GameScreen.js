import { useEffect, useState } from "react";
import { StyleSheet, Alert, FlatList, Text, View, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";
import GuessLogItem from "../components/game/guessLogItem";


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
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    const { width, heigh } = useWindowDimensions();

    const guessRoundsListLength = guessRounds.length;


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
        setGuessRounds(prevGuessRounds => [newRandomNumber, ...prevGuessRounds]);
    };

    let content = (
        <>
            <Card>
                <NumberContainer>
                    {currentGuess}
                </NumberContainer>

                <InstructionText style={styles.instructionText}>
                    Higher or Lower?
                </InstructionText>

                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                            <Ionicons name="md-remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>

                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </>
    );

    if (width > 500) {
        content = (
            <>
                <View style={styles.buttonContainerWide}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                            <Ionicons name="md-remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>

                    <NumberContainer>
                        {currentGuess}
                    </NumberContainer>

                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </>
        );
    };

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        };
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1,
            maxBoundary = 100;
    }, []);

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>

            {content}

            <View style={styles.listContainer}>
                {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList
                    data={guessRounds}
                    renderItem={
                        (itemData) =>
                            <GuessLogItem
                                roundNumber={guessRoundsListLength - itemData.index}
                                guess={itemData.item}
                            />
                    }
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        padding: 24
    },
    instructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    },
    buttonContainerWide: {
        alignItems: "center",
        flexDirection: "row"
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
});
