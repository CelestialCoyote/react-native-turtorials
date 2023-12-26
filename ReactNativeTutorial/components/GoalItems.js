import { StyleSheet, View, Text } from "react-native";


export default function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>
                {props.text}
            </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: "yellow",
        borderRadius: 8,
        margin: 4,
        padding: 8,
    },
    goalText: {
        color: "red",
    },
});
