import { StyleSheet, View, Text, Pressable } from "react-native";


export default function GoalItem(props) {
    return (

        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: "orange"}}
                style={({ pressed }) => pressed && styles.pressedItem}
                onPress={props.onDeleteGoal.bind(this, props.id)}
            >
                <Text style={styles.goalText}>
                    {props.text}
                </Text>
            </Pressable>
        </View >

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
    pressedItem: {
        opacity: 0.5
    }
});
