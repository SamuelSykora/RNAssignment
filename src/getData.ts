import {ICarousels} from './Screens/HomeScreen';

export const getData = async () => {
  let result = null;
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/24i/smartapps-test/main/data.json',
    );
    const parsedData = await response.json();
    if (!parsedData?.carousels) {
      result = parsedData as ICarousels;
    }
  } catch (e) {
    console.error('Fetching failed: ', e);
  }
  if (!result) {
    result = require('./data.json') as ICarousels;
  }
  return result;
};
