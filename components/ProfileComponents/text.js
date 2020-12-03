import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export default function TextComp(props) {
  const [focused, setFocused] = useState(false);

  const getValue = (val) => {
    props.changeHandler(val, props.data.id);
  };

  return (
    <View key={props.data.id} style={styles.container}>
      <Text style={styles.text}>{props.data.control_text}:</Text>
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={focused ? styles.inputFocused : styles.input}
        onChangeText={getValue}
        placeholder="Yazınız"
        placeholderTextColor="lightgrey"
        selectionColor="white"
        value={props.deger}
      />
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
    borderRadius: 20,
    borderColor: 'white',
    paddingLeft: 10,
  },
  inputFocused: {
    margin: 3,
    marginBottom: 2,
    color: 'white',
    width: '70%',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'white',
    paddingLeft: 10,
  },
});
