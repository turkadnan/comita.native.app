import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import LinearGradient from 'react-native-linear-gradient';
import {buttonBackgroundColor} from '../constants/backgroundConstant';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function SurveyScreen({navigation}) {
  const onMenuPress = () => {
    navigation.openDrawer();
  };

  return (
    <>
      <WebView
        source={{
          uri:
            'http://comitasurvey.roitech.com.tr/anket/8a8800fd-8a72-4d43-8720-338a48247b4f',
        }}
      />

      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 1, y: 1.0}}
        colors={buttonBackgroundColor}
        style={styles.screen}>
        <TouchableOpacity style={styles.button} onPress={() => onMenuPress()}>
          <Icon name="bars" size={25} color="white" />
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    marginBottom: 3,
  },
});
