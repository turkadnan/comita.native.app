import React, {useState, useRef} from 'react';
import {loginScreenStyle} from '../Style/Styles';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constants/backgroundConstant';
import LinearGradient from 'react-native-linear-gradient';
import {signIn} from '../store/actions/ActionCreator';
import {useDispatch} from 'react-redux';

export default function LoginScreen({navigation}) {
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
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
      style={loginScreenStyle.screen}>
      <View style={loginScreenStyle.headerContainer}>
        <Text style={loginScreenStyle.header}>Comita</Text>
      </View>
      <View style={loginScreenStyle.inputContainer}>
        <TextInput
          onFocus={() => setFocusedEmail(true)}
          onBlur={() => setFocusedEmail(false)}
          style={
            focusedEmail
              ? loginScreenStyle.inputFocused
              : loginScreenStyle.input
          }
          autoFocus={true}
          autoCapitalize="none"
          placeholder="E-Mail"
          placeholderTextColor="#aaaaaa"
          selectionColor={'white'}
          onSubmitEditing={() => input.current.focus()}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          onFocus={() => setFocusedPassword(true)}
          onBlur={() => setFocusedPassword(false)}
          style={
            focusedPassword
              ? loginScreenStyle.inputFocused
              : loginScreenStyle.input
          }
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

      <TouchableOpacity
        style={loginScreenStyle.button}
        onPress={() => onLoginPress()}>
        <Text style={loginScreenStyle.buttonTitle}>Giriş Yap</Text>
      </TouchableOpacity>

      <View style={loginScreenStyle.footerView}>
        <Text style={loginScreenStyle.footerText}>
          Hesabınız yok mu?
          <Text
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={loginScreenStyle.footerLink}>
            {' '}
            Kayıt olun
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
}
