import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import NumericInput from 'react-native-numeric-input';

export default function NumberComp(props) {
  const [number, setNumber] = useState(null);

  const getValue = (val) => {
    setNumber(val);
    props.changeHandler(val, props.data.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.data.control_text} :</Text>
      <View style={styles.input}>
        <NumericInput
          value={props.deger || number}
          minValue={0}
          maxValue={100}
          onChange={getValue}
          onLimitReached={(isMax, msg) => console.log(isMax, msg)}
          totalWidth={150}
          totalHeight={50}
          iconSize={25}
          step={1}
          valueType="integer"
          rounded
          textColor="white"
          iconStyle={{color: 'white'}}
          rightButtonBackgroundColor="transparent"
          leftButtonBackgroundColor="transparent"
        />
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
