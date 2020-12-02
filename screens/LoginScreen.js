import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constants/backgroundConstant';
import LinearGradient from 'react-native-linear-gradient';
import Api from '../Api/Api';
import {signIn, verifyProfile} from '../store/actions/ActionCreator';
import {useDispatch} from 'react-redux';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const input = useRef(null);

  const dispatch = useDispatch();

  const onLoginPress = () => {
    if (email == '' || password == '') {
      alert('Lütfen e-mail ve parolanızı girin!');
      return;
    }

    dispatch(signIn(email, password));
  };

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 1, y: 1.0}}
      colors={colors}
      style={styles.screen}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Comita</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          autoFocus={true}
          autoCapitalize="none"
          placeholder="E-Mail"
          placeholderTextColor="#aaaaaa"
          selectionColor={'white'}
          onSubmitEditing={() => input.current.focus()}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry
          onSubmitEditing={() => onLoginPress()}
          ref={input}
          placeholder="Parola"
          placeholderTextColor="#aaaaaa"
          selectionColor={'white'}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
        <Text style={styles.buttonTitle}>Giriş Yap</Text>
      </TouchableOpacity>

      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          Hesabınız yok mu?
          <Text
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={styles.footerLink}>
            {' '}
            Kayıt olun
          </Text>
        </Text>
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
    borderColor: 'white',
    margin: 15,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    fontSize: 20,
    color: 'white',
    margin: 4,
    paddingLeft: 10,
  },
  inputContainer: {
    alignItems: 'center',
    margin: 20,
  },
  input: {
    borderColor: '#e7e7de',
    borderWidth: 1,
    margin: 5,
    color: 'white',
    fontSize: 15,
    borderRadius: 20,
    padding: 10,
    width: '80%',
  },

  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: 'transparent',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d',
  },
  footerLink: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
