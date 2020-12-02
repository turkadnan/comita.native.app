import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export default function TextAreaComp(props) {
  const [text, setText] = useState('');
  const [answer, setAnswer] = useState({
    id: props.data.id,
    values: '',
  });

  const getValue = (val) => {
    setText(val);
    setAnswer({
      id: props.data.id,
      values: text,
    });
    props.parentCallback(answer);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.data.control_text} :</Text>
      <TextInput
        placeholderTextColor="lightgrey"
        multiline={true}
        numberOfLines={4}
        style={styles.input}
        value={text}
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
});
