import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from 'Themes'

export default StyleSheet.create({

	container:{
		flexDirection: 'row',
	  alignItems:'center',
		width: Metrics.screenWidth - 40,
		marginRight: 20,
		marginLeft: 20,
	},
  encryption:{
  	fontFamily: Fonts.type.base,
    fontSize:13,
		color: Colors.dimmerText,
		lineHeight: 20,
		paddingBottom:10,
		textAlign: 'center',

  }
});