import { StyleSheet, Text, View } from "react-native";


export default function GameScreen() {
    return (
        <View style={styles.screen}>
            <Text>Game Screen!</Text>

            <View>
                <Text>Higher or Lower?</Text>
                {/* + - */}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
});
