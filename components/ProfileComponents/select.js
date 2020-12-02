import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function Select(props) {
  const [pickerAnswer, setPickerAnswer] = useState({
    id: props.data.id,
    values: '',
  });

  const getValue = (val) => {
    setPickerAnswer({
      id: props.data.id,
      values: val,
    });

    props.parentCallback(pickerAnswer);
  };

  return (
    <View key={props.data.id} style={styles.container}>
      <Text style={styles.text}>{props.data.control_text} :</Text>

      <Picker
        onValueChange={getValue}
        selectedValue={pickerAnswer.values}
        dropdownIconColor="white"
        style={styles.input}
        mode="dropdown">
        {props.data.Answers.map((item) => (
          <Picker.Item key={item.key} label={item.key} value={item.value} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  text: {
    fontSize: 18,
    color: 'white',
    width: '50%',
  },
  input: {
    margin: 3,
    color: 'white',
    width: '70%',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'white',
  },
});
