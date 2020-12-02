import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import NumericInput from 'react-native-numeric-input';

export default function NumberComp(props) {
  const [number, setNumber] = useState();
  const [answer, setAnswer] = useState({
    id: props.data.id,
    values: '',
  });

  const getValue = (val) => {
    setNumber(val);
    setAnswer({
      id: props.data.id,
      values: number,
    });
    props.parentCallback(answer);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.data.control_text} :</Text>
      <View style={styles.input}>
        <NumericInput
          value={number}
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
