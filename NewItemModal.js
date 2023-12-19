import { Modal, TouchableOpacity, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const NewItemModal = ({ showModal, setShowModal, addNewItem }) => {
  const [title, setTitle] = useState("");
  const submitItem = () => {
    setShowModal(false);
    addNewItem({ title: title, complete: false });
  };
  return (
    <Modal visible={showModal}>
      <View style={styles.container}>
        <Text style={styles.title}>Create New Task</Text>
        <Text>Title</Text>
        <TextInput
          value={title}
          onChangeText={(e) => setTitle(e)}
          placeholder="..."
          style={styles.titleInput}
        />
        <TouchableOpacity style={styles.modalBtn} onPress={submitItem}>
          <Text>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalBtn} onPress={() => setShowModal(false)}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default NewItemModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  modalBtn: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: "teal",
    alignSelf: "center",
  },
  title: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  titleInput: {
    backgroundColor: "#d3d3d3",
    padding: 15,
    borderRadius: 15,
  },
});
