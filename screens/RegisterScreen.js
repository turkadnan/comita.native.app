import React, {useState, useRef} from 'react';
import {registerScreenStyle} from '../Style/Styles';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
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

  const [focusedNameStyle, setFocusedNameStyle] = useState(false);
  const [focusedSurnameStyle, setFocusedSurnameStyle] = useState(false);
  const [focusedEmailStyle, setFocusedEmailStyle] = useState(false);
  const [focusedPasswordStyle, setFocusedPasswordStyle] = useState(false);
  const [
    focusedConfirmedPasswordStyle,
    setFocusedConfirmPasswordStyle,
  ] = useState(false);

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
      style={registerScreenStyle.screen}>
      <View style={registerScreenStyle.headerContainer}>
        <Text style={registerScreenStyle.header}>Yeni hesap oluştur</Text>
      </View>

      <View style={registerScreenStyle.inputContainer}>
        <TextInput
          onFocus={() => setFocusedNameStyle(true)}
          onBlur={() => setFocusedNameStyle(false)}
          style={
            focusedNameStyle
              ? registerScreenStyle.inputFocused
              : registerScreenStyle.input
          }
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
          onFocus={() => setFocusedSurnameStyle(true)}
          onBlur={() => setFocusedSurnameStyle(false)}
          style={
            focusedSurnameStyle
              ? registerScreenStyle.inputFocused
              : registerScreenStyle.input
          }
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
          onFocus={() => setFocusedEmailStyle(true)}
          onBlur={() => setFocusedEmailStyle(false)}
          style={
            focusedEmailStyle
              ? registerScreenStyle.inputFocused
              : registerScreenStyle.input
          }
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
          onFocus={() => setFocusedPasswordStyle(true)}
          onBlur={() => setFocusedPasswordStyle(false)}
          style={
            focusedPasswordStyle
              ? registerScreenStyle.inputFocused
              : registerScreenStyle.input
          }
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
          onFocus={() => setFocusedConfirmPasswordStyle(true)}
          onBlur={() => setFocusedConfirmPasswordStyle(false)}
          style={
            focusedConfirmedPasswordStyle
              ? registerScreenStyle.inputFocused
              : registerScreenStyle.input
          }
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

      <TouchableOpacity
        style={registerScreenStyle.button}
        onPress={() => onRegisterPress()}>
        <Text style={registerScreenStyle.buttonTitle}>Kayıt ol</Text>
      </TouchableOpacity>

      <View style={registerScreenStyle.footerView}>
        <Text style={registerScreenStyle.footerText}>
          Hesabınız var mı?
          <Text
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={registerScreenStyle.footerLink}>
            {' '}
            Giriş yapın
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
}
