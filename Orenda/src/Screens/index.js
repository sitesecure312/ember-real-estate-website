import {Navigation} from 'react-native-navigation';

import LaunchScreen from './LaunchScreens/LaunchScreen';
import SignupScreen from './SignupScreen/SignupScreen';
import LoginScreen from './LoginScreen/LoginScreen';
import AddCoffeeBeanScreen from './AddCoffeeBeanScreen/AddCoffeeBeanScreen'
import SelectRecipesScreen from './SelectRecipesScreen/SelectRecipesScreen'

export default function () {

  Navigation.registerComponent('Orenda.LaunchScreen', () => LaunchScreen);
  Navigation.registerComponent('Orenda.SignupScreen', () => SignupScreen);
  Navigation.registerComponent('Orenda.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('Orenda.AddCoffeeBeanScreen', () => AddCoffeeBeanScreen);
  Navigation.registerComponent('Orenda.SelectRecipesScreen', () => SelectRecipesScreen);
}
