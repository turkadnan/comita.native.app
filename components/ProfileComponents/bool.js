import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

export default function BoolComp(props) {
  const [choice, setChoice] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  var radio_props = [
    {label: 'Evet', value: 'evet'},
    {label: 'Hayır', value: 'hayır'},
  ];
  const [answer, setAnswer] = useState({
    id: props.data.id,
    values: '',
  });

  const onSelect = (val, i) => {
    setChoice(val);
    setSelectedIndex(i);
    setAnswer({
      id: props.data.id,
      values: choice,
    });
    props.parentCallback(answer);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.data.control_text} :</Text>
      <View style={styles.input}>
        <RadioForm formHorizontal={true} animation={true}>
          {radio_props.map((obj, i) => (
            <RadioButton labelHorizontal={true} key={i}>
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={selectedIndex === i}
                onPress={(val, i) => onSelect(val, i)}
                borderWidth={1}
                buttonInnerColor={'white'}
                buttonOuterColor={selectedIndex === i ? 'white' : 'white'}
                buttonSize={15}
                buttonOuterSize={25}
                buttonStyle={{}}
                buttonWrapStyle={{marginLeft: 10}}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelHorizontal={true}
                onPress={onSelect}
                labelStyle={{fontSize: 15, color: 'white'}}
                labelWrapStyle={{}}
              />
            </RadioButton>
          ))}
        </RadioForm>
      </View>
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
    alignItems: 'center',
  },
});
