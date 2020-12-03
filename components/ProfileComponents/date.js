import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import {buttonBackgroundColor} from '../../constants/backgroundConstant';

export default function DatePickerComp(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date(null));

  const dayIn = date.getUTCDate();
  const monthIn = date.getUTCMonth() + 1;
  const yearIn = date.getUTCFullYear();
  const newDateIn = dayIn + '/' + monthIn + '/' + yearIn;

  const getValue = (val) => {
    const day = val.getUTCDate();
    const month = val.getUTCMonth() + 1;
    const year = val.getUTCFullYear();
    const newDate = day + '/' + month + '/' + year;

    props.changeHandler(newDate, props.data.id);
    setDate(val);
  };

  const onPress = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <View key={props.data.id} style={styles.container}>
        <Text style={styles.text}>{props.data.control_text} :</Text>

        <TouchableOpacity
          style={styles.input}
          onPress={() => setModalVisible(!isModalVisible)}>
          <Text style={styles.inputText}>{props.deger || newDateIn}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Modal
          backdropColor="white"
          backdropOpacity={0.6}
          animationInTiming={500}
          animationOutTiming={500}
          onBackButtonPress={() => setModalVisible(!isModalVisible)}
          isVisible={isModalVisible}>
          <LinearGradient
            start={{x: 0.0, y: 0.0}}
            end={{x: 1, y: 1.0}}
            colors={buttonBackgroundColor}
            style={styles.popupContainer}>
            <View style={styles.datePickerContainer}>
              <DatePicker
                date={date}
                onDateChange={getValue}
                minimumDate={new Date(1920, 1, 1)}
                maximumDate={new Date(2020, 1, 1)}
                mode="date"
                androidVariant="nativeAndroid"
                textColor="white"
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.buttonTitle}>Seç</Text>
            </TouchableOpacity>
          </LinearGradient>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  text: {
    fontSize: 18,
    color: 'white',
    width: '50%',
  },
  input: {
    borderColor: '#e7e7de',
    borderWidth: 1,
    borderRadius: 15,
    margin: 3,
    color: 'white',
    fontSize: 15,
    width: '70%',
    padding: 5,
  },
  inputText: {
    fontSize: 20,
    color: 'white',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 20,
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

  datePickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    borderColor: 'white',
  },
});
