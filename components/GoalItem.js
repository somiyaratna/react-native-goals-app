import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ text, onDeleteGoal, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{ color: '#210644' }} onPress={onDeleteGoal.bind(this, id)} style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
  },
  goalText: {
    padding: 8,
    color: '#ffffff',
  },
  pressedItem: {
    color: '#210644',
    opacity: 0.9,
  }
});

export default GoalItem;
