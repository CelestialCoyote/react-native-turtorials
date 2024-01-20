import { StyleSheet, Pressable, Text, View } from "react-native";
import { Colors } from "../../constants/colors";


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
                android_ripple={{ color: Colors.primary600 }}
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
        backgroundColor: Colors.primary500,
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