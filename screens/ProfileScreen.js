import React, {useState} from 'react';
import {profileScreenStyle} from '../Style/Styles';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../constants/backgroundConstant';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import DynamicForm from '../components/ProfileComponents/dynamicForm';
import {signOut, fillProfile} from '../store/actions/ActionCreator';
export default function ProfileScreen({navigation}) {
  const [textValue, SetTextValue] = useState([]);

  const dispatch = useDispatch();

  const onSavePress = () => {
    console.log(textValue);
    dispatch(fillProfile(textValue));
    console.log(textValue);
  };

  const onExitPress = () => {
    dispatch(signOut());
  };

  const controlChangeHandler = (text, id) => {
    SetTextValue((prev) => {
      const index = prev.findIndex((index) => index.id == id);
      if (typeof prev[index] === 'undefined') {
        return [
          ...prev,
          {
            id: id,
            value: text,
          },
        ];
      } else {
        prev[index] = {
          id: id,
          value: text,
        };
        return [...prev];
      }
    });
  };

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 1, y: 1.0}}
      colors={colors}
      style={profileScreenStyle.screen}>
      <View style={profileScreenStyle.headerContainer}>
        <Text style={profileScreenStyle.header}>Profil</Text>
      </View>
      <View style={profileScreenStyle.info}>
        <Text style={profileScreenStyle.infoText}>
          Lütfen eksik yerleri doldurun
        </Text>
      </View>

      <DynamicForm changeHandler={controlChangeHandler} data={textValue} />
      <View style={profileScreenStyle.buttonContainer}>
        <TouchableOpacity
          style={profileScreenStyle.button}
          onPress={() => onExitPress()}>
          <Text style={profileScreenStyle.buttonTitle}>Çıkış</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={profileScreenStyle.button}
          onPress={() => onSavePress()}>
          <Text style={profileScreenStyle.buttonTitle}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
