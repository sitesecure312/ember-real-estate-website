import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from 'Themes'

export default StyleSheet.create({    
	myGoal:{
		alignItems:'center',
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
	linearGradient: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 3
    },
    buttonText: {
        fontSize: 10,
        fontFamily: Fonts.type.alt,
        textAlign: 'center',
        margin: 3,
        color: Colors.primaryText,
        backgroundColor: 'transparent',
    },	
	
    textCaption: {
		fontFamily: Fonts.type.alt,
		textAlign: 'center',
		fontWeight:'600', //semibold
		color: Colors.darkText,
		fontSize:18, 
		width: Metrics.screenWidth - 40,
		marginRight: 20,
		marginLeft: 20
     },
     
     textContent: {
		fontFamily: Fonts.type.base,
		textAlign: 'center',
		color: Colors.dimText,
		fontSize:12, 
		lineHeight: 20,
		width: Metrics.screenWidth - 60,
		marginRight: 20,
		marginLeft: 20
	 },
});