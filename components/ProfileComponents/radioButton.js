import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

export default function RadioButtonComp(props) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  var radio_props = props.data.Answers.map((item) => ({
    label: item.key,
    value: item.value,
  }));

  const getValue = (val, i) => {
    setSelectedIndex(i);
    props.changeHandler(val, props.data.id);
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
                onPress={(val, i) => getValue(val, i)}
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
                onPress={getValue}
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
