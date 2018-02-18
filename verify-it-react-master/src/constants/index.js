/**
 * @providesModule AppConstant
 **/
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const WINDOW_WIDTH = width;
export const WINDOW_HEIGHT = height;
export const STATUSBAR_HEIGHT = 20;
export const NAVBAR_MARGIN_TOP = 30;
export const NAVBAR_MARGIN_HORIZONTAL = 15;
export const OPEN_MENU_OFFSET = WINDOW_WIDTH * 6 / 7;
export const NAVBAR_HEIGHT = 40;
