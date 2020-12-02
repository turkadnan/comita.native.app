import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = 'key';

export const saveDataToStorage = async (guid) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, guid);
  } catch (e) {
    console.log(e);
  }
};

export const readDataFromStorage = async () => {
  try {
    let userData = await AsyncStorage.getItem(STORAGE_KEY);
    return userData;
  } catch (error) {
    console.log(error);
  }
};

export const clearDataFromStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};
