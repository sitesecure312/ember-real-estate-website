import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from 'Themes'

export default StyleSheet.create({
  button: {
  	backgroundColor: Colors.primary,
	  height: 50,
  },
  buttonGoal: {
    backgroundColor: Colors.primary,
    width:250,
	  height: 35,
  },
  inactive: {
    backgroundColor: Colors.inactive,
    height: 50,
  },
  inactiveGoal:{
    backgroundColor: Colors.inactive,
    width:250,
	  height: 35,
  },
  text: {
    color: Colors.primaryText,
    fontFamily: Fonts.type.control,
	  fontSize:15, 
	  letterSpacing: 1.5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  buttonTransparent: {
  	backgroundColor: Colors.transparent,
	  height: 50
  },
  textTransparent: {
    color: Colors.primary,
    fontFamily: Fonts.type.base,
	  fontWeight: 'bold',
    textAlign: 'center',
	  fontSize:15, 
	  lineHeight: 26,
    textDecorationLine: 'underline'
  },
  buttonWide: {
  	backgroundColor: Colors.primary,
  	width:250,
	  height: 50,
  },
  textWide: {
    color: Colors.primaryText,
    fontFamily: Fonts.type.alt,
	  fontSize:14, 
	  fontWeight: 'bold',
	  letterSpacing: 1,
    textAlign: 'center',
  	// width:250,
  },
  textGoal:{
    color: Colors.primaryText,
    fontFamily: Fonts.type.alt,
	  fontSize:12, 
	  fontWeight: 'bold',
	  letterSpacing: 1,
    textAlign: 'center',
  },
  disabledText: {
    color: '#dcdcdc',
  },
});