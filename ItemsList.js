import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Item from "./Item";
import NewItemModal from "./NewItemModal";

const ItemsList = () => {
  const [items, setItems] = useState([
    { title: "Brush teeth", complete: false },
    { title: "Wash clothes", complete: true },
    { title: "Check smoke detector", complete: false },
  ]);
  const [showModal, setShowModal] = useState(false);
  const addNewItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginVertical: 50, alignSelf: "center" }}>
        <TouchableOpacity style={styles.plusBtn} onPress={() => setShowModal(true)}>
          {/* Unicode character for a plus symbol (\u002B) */}
          <Text style={{ fontSize: 20 }}>{"\u002B"}</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>Add Item</Text>
      </View>
      <View>
        {items.map((item) => (
          <Item item={item} />
        ))}
      </View>
      <NewItemModal
        showModal={showModal}
        setShowModal={setShowModal}
        addNewItem={addNewItem}
      />
    </ScrollView>
  );
};

export default ItemsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 10,
  },
  plusBtn: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: "teal",
    flex: 1,
    alignItems: "center",
  },
});
