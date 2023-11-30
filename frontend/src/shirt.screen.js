import React, { useContext, useState } from "react";
import { Spacer } from "../../../components/spacer/spacer.components";
import { FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import { ShirtContext } from "../src/services/shirt.context";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { ShirtInfoCard } from "./shirt-info-card.component";
import { Modal } from "react-native-paper";
import { Upsert } from "./Upsert";

const ShirtScreen = () => {
  const { shirts } = useContext(ShirtContext);
  const [visible, setVisible] = useState(false);
  const [updateShirt, setUpdateShirt] = useState(undefined);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onUpdate = (shirt) => {
    setUpdateShirt(shirt);
    showModal();
  };
  const onCreate = () => {
    setUpdateShirt(undefined);
    showModal();
  };

  return (
    <SafeArea>
      <Search />
      <FlatList
        data={shirts}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="medium">
            <ShirtInfoCard onUpdate={onUpdate} shirt={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity onPress={onCreate} style={styles.createButton}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
      >
        <UpSert updateShirt={updateShirt} onClose={() => setVisible(false)} />
      </Modal>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "white",
    padding: 20,
    width: 300,
  },
  createButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "blue",
    borderRadius: 50,
    width: 65,
    height: 65,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    margin: 20,
  },
});

export default ShirtScreen;
