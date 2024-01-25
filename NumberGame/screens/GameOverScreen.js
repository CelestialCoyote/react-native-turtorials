import { StyleSheet, Dimensions, Image, ScrollView, Text, View, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import { Colors } from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";


export default function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    };

    if (height < 450) {
        imageSize = 80;
    };

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    };

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>Game Over</Title>

                <View style={[styles.imageContainer, imageStyle]}>
                    <Image
                        style={styles.image}
                        source={require("../assets/images/success.png")}
                    />
                </View>

                <Text style={styles.summaryText}>
                    Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
                </Text>

                <PrimaryButton onPress={onStartNewGame}>
                    Start New Game
                </PrimaryButton>
            </View>
        </ScrollView>
    );
};


// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },
    imageContainer: {
        borderColor: Colors.primary800,
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        // height: deviceWidth < 380 ? 150 : 300,
        margin: 36,
        overflow: "hidden",
        // width: deviceWidth < 380 ? 150 : 300
    },
    image: {
        height: "100%",
        width: "100%"
    },
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 24,
        marginBottom: 24,
        textAlign: "center"
    },
    highlight: {
        fontFamily: "open-sans-bold",
        color: Colors.primary500
    }
});
