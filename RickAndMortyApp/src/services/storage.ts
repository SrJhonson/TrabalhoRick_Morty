import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = '@app_user';

export const saveUser = async (data: any) => {
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(data));
};

export const getUser = async () => {
  const result = await AsyncStorage.getItem(USER_KEY);
  return result ? JSON.parse(result) : null;
};
