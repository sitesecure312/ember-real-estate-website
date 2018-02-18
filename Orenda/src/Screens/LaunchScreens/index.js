/**
 * @providesModule LaunchScreens
 */
 
import {Navigation} from 'react-native-navigation';
import {Colors} from 'Themes';

export function startLaunch(navigator) {
  
	Navigation.startSingleScreenApp({
		screen: {
		   screen: 'Orenda.LaunchScreen',
		   navigatorStyle: {
				navBarBackgroundColor: '#eeeeee',
				navBarTextFontFamily:'Futura Heavy',
				navBarTextColor: Colors.primary,
				navBarSubtitleTextColor: Colors.primary,
				navBarButtonColor: Colors.primary,
				statusBarTextColorScheme: 'light',
				drawUnderNavBar: false,
				navBarHidden: true,
				
		   }
		}
	});

}

