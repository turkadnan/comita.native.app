import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constants/backgroundConstant';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {signUp} from '../store/actions/ActionCreator';

export default function RegisterScreen({navigation}) {
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const onRegisterPress = () => {
    if (name == '') {
      alert('Lütfen isminizi girin!');
      return;
    }
    if (surname == '') {
      alert('Lütfen soyisminizi girin!');
      return;
    }
    if (email == '') {
      alert('Lütfen e-mailinizi girin!');
      return;
    }
    if (password.length < 6) {
      alert('Parolanız en az 6 hane olmalıdır!');
      return;
    }
    if (password !== confirmPassword) {
      alert('Girdiğiniz parola eşleşmiyor!');
      return;
    }
    dispatch(signUp(name, surname, email, password));
  };

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 1, y: 1.0}}
      colors={colors}
      style={styles.screen}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Yeni hesap oluştur</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          autoFocus={true}
          onSubmitEditing={() => input1.current.focus()}
          onChangeText={(text) => setName(text)}
          autoCapitalize="none"
          value={name}
          placeholderTextColor="#aaaaaa"
          placeholder="İsim"
          selectionColor={'white'}
        />

        <TextInput
          style={styles.input}
          onSubmitEditing={() => input2.current.focus()}
          onChangeText={(text) => setSurname(text)}
          ref={input1}
          autoCapitalize="none"
          value={surname}
          placeholderTextColor="#aaaaaa"
          placeholder="Soyisim"
          selectionColor={'white'}
        />

        <TextInput
          style={styles.input}
          onSubmitEditing={() => input3.current.focus()}
          ref={input2}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholderTextColor="#aaaaaa"
          placeholder="E-Mail"
          selectionColor={'white'}
        />

        <TextInput
          style={styles.input}
          onSubmitEditing={() => input4.current.focus()}
          ref={input3}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          placeholderTextColor="#aaaaaa"
          placeholder="Parola"
          selectionColor={'white'}
        />

        <TextInput
          style={styles.input}
          ref={input4}
          autoCapitalize="none"
          onSubmitEditing={() => onRegisterPress()}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry
          placeholderTextColor="#aaaaaa"
          placeholder="Parola doğrulama"
          selectionColor={'white'}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => onRegisterPress()}>
        <Text style={styles.buttonTitle}>Kayıt ol</Text>
      </TouchableOpacity>

      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          Hesabınız var mı?
          <Text
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={styles.footerLink}>
            {' '}
            Giriş yapın
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
    margin: 10,
    marginTop: 20,
  },
  header: {
    fontSize: 20,
    color: 'white',
    margin: 20,
    paddingLeft: 10,
    fontWeight: 'bold',
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
