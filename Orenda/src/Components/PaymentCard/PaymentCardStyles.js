import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from 'Themes'

export default StyleSheet.create({    
    center:{
        alignItems:'center',
        backgroundColor: Colors.transparent,
        
    },
	textWidth:{
		width:Metrics.screenWidth - 120
	},
	textModalWidth:{
		width:Metrics.screenWidth - 150
	},
    caption:{
		fontFamily: Fonts.type.alt,
		textAlign: 'center',
		fontWeight:'600', //semibold
		color: Colors.darkText,
		fontSize:21, 
		width: Metrics.screenWidth - 40,
		marginRight: 20,
		marginLeft: 20
	},
    content: {
		fontFamily: Fonts.type.base,
		textAlign: 'center',
		color: Colors.dimText,
		fontSize:15, 
		lineHeight: 21,
		width: Metrics.screenWidth - 60,
		marginRight: 20,
		marginLeft: 20
	 },
});