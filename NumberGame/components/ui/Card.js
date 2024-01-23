import { StyleSheet, Dimensions, View } from "react-native";
import { Colors } from "../../constants/colors";


export default function Card({ children }) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
};


const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        justifyContent: "center",
        marginHorizontal: 24,
        marginTop: deviceWidth < 380 ? 18 : 36,
        padding: 16,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
});
