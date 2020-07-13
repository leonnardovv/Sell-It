//Stringify(json, parse)
//Serializatiom + Deserialization
import { AsyncStorage } from "react-native";
import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(), //to see when it was created and if it's expired or not
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  //this is one responsibility -> checking if is expired
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, "minutes") > expiryInMinutes; //difference between now and storedTime in minutes
};

const get = async (key) => {
  try {
    // DO NOT VIOLATE the Single Responsibility Principle

    // this is one responsibility -> getting the item from the cash
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      // Command Query Separation (CQS)
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(errror);
  }
};

export default {
  store,
  get,
};
