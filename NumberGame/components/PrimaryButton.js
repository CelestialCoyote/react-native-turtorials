import { StyleSheet, Pressable, Text, View } from "react-native";


export default function PrimaryButton({ children, onPress }) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed })  => 
                    pressed
                    ? [styles.buttonInnerContainer, styles.pressed]
                    : styles.buttonInnerContainer
                }
                onPress={onPress}
                android_ripple={{ color: "#640233" }}
            >
                <Text style={styles.buttoText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    );
};


const styles = StyleSheet.create({
    buttonInnerContainer: {
        backgroundColor: "#72063C",
        elevation: 2,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden"
    },
    buttoText: {
        color: "white",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75
    }
});