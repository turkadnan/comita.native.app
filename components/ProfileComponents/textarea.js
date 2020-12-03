import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export default function TextAreaComp(props) {
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState('');

  const getValue = (val) => {
    setText(val);
    props.changeHandler(val, props.data.id);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.data.control_text} :</Text>
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor="lightgrey"
        multiline={true}
        numberOfLines={4}
        style={focused ? styles.inputFocused : styles.input}
        value={props.deger || text}
        onChangeText={getValue}
        placeholder="Yazınız"
        selectionColor="white"
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
    textAlignVertical: 'top',
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
    textAlignVertical: 'top',
  },
});
