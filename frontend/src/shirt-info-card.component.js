import React, { useContext } from "react";
import { Alert, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { IconButton, Colors } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  ShirtCard,
  Info,
  Section,
  ShirtTitle,
  ShirtDate,
  ShirtPrice,
  ShirtBrand,
  ShirtSex,
} from "./shirt-info-card.style";

import { ShirtContext } from "../src/services/shirt.context";

export const ShirtInfoCard = ({ onUpdate, shirt = {} }) => {
  const { deleteShirt } = useContext(ShirtContext);

  const onDelete = () => {
    Alert.alert("Confirm", "Are you sure you want to delete?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => deleteShirt(shirt.id) },
    ]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return month + "/" + day + "/" + year;
  };

  return (
    <ShirtCard elevation={5}>
      <Info>
        <Section>
          <View style={{ flex: 1 }}>
            <ShirtTitle varient="label">{shirt.name}</ShirtTitle>
          </View>
          <View style={styles.container}>
            <IconButton
              icon={() => <Icon name="update" size={20} color={"#ffffff"} />}
              onPress={() => onUpdate(shirt)}
              style={styles.buttonUpdate}
            />
            <IconButton
              icon={() => <Icon name="delete" size={20} color={"#ffffff"} />}
              onPress={() => onDelete(shirt)}
              style={styles.buttonDelete}
            />
          </View>
        </Section>
        <Section>
          <ShirtBrand varient="body">Brand: {shirt.brand}</ShirtBrand>
        </Section>
        <Section>
          <ShirtDate varient="body">
            Created Date: {formatDate(shirt.createdDate)}
          </ShirtDate>
        </Section>
        <Section>
          <ShirtSex varient="hint">Sex: {shirt.sex ? "YES" : "NO"}</ShirtSex>
        </Section>
        <Section>
          <ShirtPrice varient="body">Price: {shirt.price}</ShirtPrice>
        </Section>
      </Info>
    </ShirtCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 10,
  },
  buttonUpdate: {
    flex: 1,
    backgroundColor: "blue",
    padding: 10,
    margin: 7,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonDelete: {
    flex: 1,
    backgroundColor: "red",
    padding: 10,
    margin: 7,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
