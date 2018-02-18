import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from 'Themes'

export default StyleSheet.create({

    container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
    center: {
		alignItems : 'center',
		width: Metrics.screenWidth,
		borderWidth: 0.5,
		borderColor: Colors.borderColor,
		shadowColor: Colors.shadowColor,
		shadowOffset:{
			width: 0, 
			height: 3
		},
		shadowRadius:3,
		shadowOpacity:1.0,
	},
    textCaption: {
		fontFamily: Fonts.type.alt,
		textAlign: 'left',
		fontWeight:'400', //semibold
		color: Colors.darkText,
		fontSize:15, 		
     },
     textContent: {
		fontFamily: Fonts.type.base,
		textAlign: 'left',
		color: Colors.dimText,
		fontSize:10, 
		lineHeight: 20,
	 },
});