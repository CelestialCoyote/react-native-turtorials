import { StyleSheet, Dimensions, Text, View } from "react-native";
import { Colors } from "../../constants/colors";


export default function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
    );
};

const deviceWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 4,
        borderColor: Colors.accent500,
        justifyContent: "center",
        margin: deviceWidth < 380 ? 12 : 24,
        padding: deviceWidth < 380 ? 12 : 24
    },
    numberText: {
        color: Colors.accent500,
        fontFamily: "open-sans-bold",
        fontSize: deviceWidth < 380 ? 28 : 36
    }
});