import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
export default function CheckBoxComp(props) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [answer, setAnswer] = useState({
    id: props.data.id,
    values: '',
  });

  const onCheck = (val) => {
    setToggleCheckBox(val);

    setAnswer({
      id: props.data.id,
      values: choice,
    });
    props.parentCallback(answer);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.data.control_text} :</Text>
      <CheckBox
        style={styles.input}
        tintColors={{true: 'white', false: 'black'}}
        disabled={false}
        value={toggleCheckBox}
        onValueChange={onCheck}
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
    width: '70%',
  },
});
