import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Item = ({ item }) => {
  const [isComplete, setIsComplete] = useState(item.complete);
  return (
    <TouchableOpacity style={styles.listItem} onPress={() => setIsComplete((p) => !p)}>
      {/* Unicode character for check mark (\u2611) and x mark (\u2610) */}
      <Text style={styles.checkBox}>{isComplete ? "\u2611" : "\u2610"}</Text>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  checkBox: {
    fontSize: 20,
    paddingEnd: 5,
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});
