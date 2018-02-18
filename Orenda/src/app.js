import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import registerScreens from './Screens';
import { startLaunch } from './Screens/LaunchScreens';
import { startLogin } from './Screens/LoginScreen';
import { startMain } from './Screens/MainTabScreens';
import * as firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyBl7VWsgEy9apeVe1WeAWU28kK442cvDDA",
    authDomain: "orenda-b656c.firebaseapp.com",
    databaseURL: "https://orenda-b656c.firebaseio.com",
    projectId: "orenda-b656c",
    storageBucket: "",
    messagingSenderId: "127934628378"
});

// screen related book keeping
registerScreens();

export function startFirstTimeUser()
{
  startLaunch();
}

export function startUserLogin(){
  startLogin();
}

export function startMainTab(){
  startMain()
}

startFirstTimeUser()


