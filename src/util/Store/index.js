import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`@${storageKey}`, jsonValue);
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getData = async storageKey => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@${storageKey}`);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export {storeData, getData};
