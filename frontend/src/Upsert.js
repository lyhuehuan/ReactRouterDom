import React, { useState, useContext, useRef } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { ShirtContext } from "../src/services/shirt.context";
import { Spacer } from "../src/style/spacer.style";
import { Text } from "../src/style/text.style";

export const Upsert = ({ onClose, updateShirt }) => {
  const { createShirt, update } = useContext(ShirtContext);
  let initialValue =
    updateShirt !== undefined
      ? {
          name: updateShirt.name,
          brand: updateShirt.brand,
          createdDate: new Date(updateShirt.createdDate),
          sex: updateShirt.sex,
          price: updateShirt.price,
        }
      : {
          name: "",
          brand: "",
          createdDate: new Date(),
          sex: false,
          price: "0",
        };
  const [formData, setFormData] = useState(initialValue);

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setFormData({ ...formData, date: selectedDate });
    }
  };

  const pickerSexRef = useRef();

  function openSex() {
    pickerSexRef.current.focus();
  }

  function closeSex() {
    pickerSexRef.current.blur();
  }

  const handleSubmit = () => {
    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = "Please input name";
    }

    if (!formData.brand) {
      validationErrors.brand = "Please input brand";
    }

    if (typeof formData.sex !== "boolean") {
      validationErrors.sex = "input sex";
    }

    if (
      !formData.price ||
      formData.price < 0 ||
      typeof formData.price !== "number"
    ) {
      validationErrors.price = "Please input price";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).price === 0) {
      if (updateShirt === undefined) {
        createShirt(formData);
      } else {
        update(updateShirt.id, formData);
      }

      alert("Saved successfully");
      onClose();
    }
  };

  return (
    <ScrollView>
      <TextInput
        label="Name"
        value={formData.name}
        onChangeText={(text) => handleInputChange("name", text)}
        error={!!errors.name}
        style={styles.textInput}
      />
      {errors.name && <Text variant="error">{errors.name}</Text>}
      <Spacer position="bottom" size="medium" />
      <TextInput
        label="Brand"
        value={formData.brand}
        onChangeText={(text) => handleInputChange("brand", text)}
        error={!!errors.brand}
        style={styles.textInput}
      />
      {errors.location && <Text variant="error">{errors.location}</Text>}
      <Spacer position="bottom" size="medium" />
      <TextInput
        label="Created date"
        value={formData.createdDate.toLocaleDateString()}
        onFocus={() => setShowDatePicker(true)}
        style={styles.textInput}
      />
      {showDatePicker && (
        <DateTimePicker
          value={formData.date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <Spacer position="bottom" size="medium" />
      <TextInput
        label="Sex"
        value={formData.sex ? "Male" : "Female"}
        error={!!errors.sex}
        onFocus={() => openSexex()}
        onBlur={() => closeSex()}
        style={styles.textInput}
      />
      <View style={{ display: "none" }}>
        <Picker
          ref={pickerPackingRef}
          selectedValue={formData.sex}
          onValueChange={(itemValue, itemIndex) =>
            setFormData({ ...formData, sex: itemValue === "true" })
          }
        >
          <Picker.Item label="Please Choose Option" value="" />
          <Picker.Item label="Male" value="true" />
          <Picker.Item label="Female" value="false" />
        </Picker>
      </View>

      {errors.sex && <Text variant="error">{errors.sex}</Text>}
      <Spacer position="bottom" size="medium" />
      <TextInput
        label="Price"
        value={formData.lengthOfHike}
        onChangeText={(text) => handleInputChange("price", Number(text))}
        error={!!errors.price}
        style={styles.textInput}
      />
      {errors.price && <Text variant="error">{errors.price}</Text>}
      <Spacer position="bottom" size="medium" />
      <Button
        style={styles.buttonSubmit}
        mode="contained"
        onPress={handleSubmit}
      >
        Submit
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
  },
  buttonSubmit: {
    backgroundColor: "blue",
  },
});
