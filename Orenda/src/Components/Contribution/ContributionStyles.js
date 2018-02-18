import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from 'Themes'

export default StyleSheet.create({

    container: {
		flex: 1,
		backgroundColor: Colors.background,
		width: Metrics.screenWidth - 40,
		paddingRight: 20,
		paddingLeft: 20
		
	},
    center: {
		alignItems : 'center',
		width: Metrics.screenWidth - 20,
		marginLeft: 10,
		marginRight: 10,
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
	leftView:{
        width:(Metrics.screenWidth - 20) / 2,
    },
    rightView:{
        width:(Metrics.screenWidth - 20) / 2,
    },
	
    textCaption: {
		fontFamily: Fonts.type.alt,
		textAlign: 'left',
		fontWeight:'600', //semibold
		color: Colors.darkText,
		fontSize:15, 
		width:(Metrics.screenWidth - 20) / 2,
		marginRight: 20,
		marginLeft: 20
     },
     
     textContent: {
		fontFamily: Fonts.type.base,
		textAlign: 'left',
		color: Colors.dimText,
		fontSize:12, 
		lineHeight: 20,
		width:(Metrics.screenWidth - 20) / 2,
		marginRight: 20,
		marginLeft: 20
	 },
});