import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {colors} from '../constants/backgroundConstant';
import {editProfileScreenStyle} from '../Style/Styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import DynamicForm from '../components/ProfileComponents/dynamicForm';
import {useSelector} from 'react-redux';

export default function EditProfileScreen({navigation}) {
  const onMenuPress = () => {
    navigation.openDrawer();
  };

  //const profileDetail = useSelector(state => state.appReducer.profileDetail);
  const [textValue, SetTextValue] = useState([]);
  const onSavePress = () => {
    console.log(textValue);
    //dispatch(fillProfile(textValue));
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
      style={editProfileScreenStyle.screen}>
      <TouchableOpacity
        style={editProfileScreenStyle.button}
        onPress={() => onMenuPress()}>
        <Icon name="bars" size={25} color="white" />
      </TouchableOpacity>

      <View style={editProfileScreenStyle.headerContainer}>
        <Text style={editProfileScreenStyle.header}>Profil</Text>
      </View>
      <View style={editProfileScreenStyle.info}>
        <Text style={editProfileScreenStyle.infoText}>
          Bilgilerinizi aşağıdan güncelleyebilirsiniz
        </Text>
      </View>

      <DynamicForm changeHandler={controlChangeHandler} />

      <View style={editProfileScreenStyle.saveButtonContainer}>
        <TouchableOpacity
          style={editProfileScreenStyle.saveButton}
          onPress={() => onSavePress()}>
          <Text style={editProfileScreenStyle.saveButtonTitle}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
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
  },
});
