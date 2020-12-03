import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Select from './select';
import DatePickerComp from './date';
import TextComp from './text';
import NumberComp from './number';
import RadioButtonComp from './radioButton';
import TextAreaComp from './textarea';
import BoolComp from './bool';
import CheckBox from './checkBox';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';

export default function DynamicComp(props) {
  const list = useSelector((state) => state.appReducer.profileList);

  const changeHandler = (text, id) => {
    props.changeHandler(text, id);
  };

  return (
    <ScrollView>
      <View style={styles.inputContainer}>
        {list.map((item) => {
          if (item.control_type == 'select') {
            return (
              <Select key={item.id} data={item} changeHandler={changeHandler} />
            );
          } else if (item.control_type == 'date') {
            return (
              <DatePickerComp
                changeHandler={changeHandler}
                key={item.id}
                data={item}
              />
            );
          } else if (item.control_type == 'text') {
            return (
              <TextComp
                key={item.id}
                data={item}
                changeHandler={changeHandler}
              />
            );
          } else if (item.control_type == 'number') {
            return (
              <NumberComp
                changeHandler={changeHandler}
                key={item.id}
                data={item}
              />
            );
          } else if (item.control_type == 'radio') {
            return (
              <RadioButtonComp
                changeHandler={changeHandler}
                key={item.id}
                data={item}
              />
            );
          } else if (item.control_type == 'textarea') {
            return (
              <TextAreaComp
                changeHandler={changeHandler}
                key={item.id}
                data={item}
              />
            );
          } else if (item.control_type == 'bool') {
            return (
              <BoolComp
                changeHandler={changeHandler}
                key={item.id}
                data={item}
              />
            );
          } else if (item.control_type == 'check') {
            return (
              <CheckBox
                changeHandler={changeHandler}
                key={item.id}
                data={item}
              />
            );
          } else {
            return null;
          }
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    margin: 15,
  },
});
