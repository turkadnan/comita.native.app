import React, {useState} from 'react';
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

export default function DynamicComp() {
  const list = useSelector((state) => state.appReducer.profileList);

  const postList = [];

  const handleCallback = (data) => {
    const index = postList.findIndex((index) => index.id == data.id);
    if (typeof postList[index] === 'undefined') {
      postList.push(data);
    } else {
      postList[index] = data;
    }
    console.log(postList);
  };

  return (
    <ScrollView>
      <View style={styles.inputContainer}>
        {list.map((item) => {
          if (item.control_type == 'select') {
            return (
              <Select
                parentCallback={handleCallback}
                key={item.id}
                data={item}
              />
            );
          } else if (item.control_type == 'date') {
            return (
              <DatePickerComp
                parentCallback={handleCallback}
                key={item.id}
                data={item}
              />
            );
          } else if (item.control_type == 'text') {
            return (
              <TextComp
                parentCallback={handleCallback}
                key={item.id}
                data={item}
              />
            );
          } else if (item.control_type == 'number') {
            return (
              <NumberComp
                parentCallback={handleCallback}
                key={item.id}
                data={item}
              />
            );
          } else if (item.control_type == 'radio') {
            return (
              <RadioButtonComp
                parentCallback={handleCallback}
                key={item.id}
                data={item}
              />
            );
          } else if (item.control_type == 'textarea') {
            return (
              <TextAreaComp
                parentCallback={handleCallback}
                key={item.id}
                data={item}
              />
            );
          } else if (item.control_type == 'bool') {
            return (
              <BoolComp
                parentCallback={handleCallback}
                key={item.id}
                data={item}
              />
            );
          } else if (item.control_type == 'check') {
            return (
              <CheckBox
                parentCallback={handleCallback}
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
