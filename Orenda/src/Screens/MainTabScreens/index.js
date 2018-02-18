import {Navigation} from 'react-native-navigation';
import {Colors} from 'Themes';

import MainTabScreen from './MainTabScreen'; 
import DeviceScreen from './DeviceScreen'; 
import ExploreScreen from './ExploreScreen'; 
import CommunityScreen from './CommunityScreen'; 
import MeScreen from './MeScreen';
import CustomerizePopupScreen from './CustomerizePopupScreen'; 


export function startMain(navigator){
    Navigation.registerComponent('Orenda.MainTabScreen', () => MainTabScreen);
    Navigation.registerComponent('Orenda.DeviceScreen', () => DeviceScreen);
    Navigation.registerComponent('Orenda.ExploreScreen', () => ExploreScreen);
    Navigation.registerComponent('Orenda.CommunityScreen', () => CommunityScreen);
    Navigation.registerComponent('Orenda.MeScreen', () => MeScreen);
    Navigation.registerComponent('Orenda.CustomerizePopupScreen', () => CustomerizePopupScreen);

    navigatorStyle= {
        navBarBackgroundColor: '#eeeeee',
		navBarTextFontFamily:'Futura Heavy',
		navBarTextColor: Colors.primary,
		navBarSubtitleTextColor: Colors.primary,
		navBarButtonColor: Colors.primary,
		statusBarTextColorScheme: 'light',
		drawUnderNavBar: false,
		navBarHidden: true,
    };

    Navigation.startSingleScreenApp({
        screen: {
            screen: 'Orenda.MainTabScreen',
            navigatorStyle: {...navigatorStyle}
        }
    });
}