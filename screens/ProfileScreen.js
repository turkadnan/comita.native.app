import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../constants/backgroundConstant';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import DynamicForm from '../components/ProfileComponents/dynamicForm';
import {signOut, fillProfile} from '../store/actions/ActionCreator';

export default function ProfileScreen({navigation}) {
  const dispatch = useDispatch();

  const onSavePress = () => {
    dispatch(fillProfile());
  };

  const onExitPress = () => {
    dispatch(signOut());
  };
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 1, y: 1.0}}
      colors={colors}
      style={styles.screen}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Profil</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>Lütfen eksik yerleri doldurun</Text>
      </View>

      <DynamicForm />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => onExitPress()}>
          <Text style={styles.buttonTitle}>Çıkış</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onSavePress()}>
          <Text style={styles.buttonTitle}>Kaydet</Text>
        </TouchableOpacity>
      </View>
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
    margin: 10,
    marginTop: 10,
  },
  header: {
    fontSize: 20,
    color: 'white',
    margin: 10,
    fontWeight: 'bold',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',

    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: 'transparent',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10,
    height: 48,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    width: '40%',
  },
});
