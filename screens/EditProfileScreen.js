import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {colors} from '../constants/backgroundConstant';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import DynamicForm from '../components/ProfileComponents/dynamicForm';
export default function EditProfileScreen({navigation}) {
  const list = useSelector((state) => state.appReducer.profileList);
  const onMenuPress = () => {
    navigation.openDrawer();
  };
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 1, y: 1.0}}
      colors={colors}
      style={styles.screen}>
      <TouchableOpacity style={styles.button} onPress={() => onMenuPress()}>
        <Icon name="bars" size={25} color="white" />
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>Profil</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>
          Bilgilerinizi aşağıdan güncelleyebilirsiniz
        </Text>
      </View>

      <DynamicForm />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#2f738d',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    fontSize: 25,
    color: 'white',
    margin: 5,
    fontWeight: 'bold',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
  },

  button: {
    backgroundColor: 'transparent',
    marginBottom: 5,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    width: '15%',
  },
});
