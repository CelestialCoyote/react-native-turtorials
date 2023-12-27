import { StyleSheet, View, Text, Pressable } from "react-native";


export default function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteGoal.bind(this, props.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>
                    {props.text}
                </Text>
            </View>
        </Pressable>
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
