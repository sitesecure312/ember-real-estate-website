import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from 'Themes'

export default StyleSheet.create({

	center: {
		alignItems : 'center'
	},
		
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
     
	coverImage:{
		resizeMode:"contain",
		width: Metrics.scaleWidth * 750,
		height: Metrics.scaleHeight * 1334,  
	},

	coverSignImage:{
		resizeMode:"contain",
		width: Metrics.scaleWidth * 708,
		height: Metrics.scaleHeight * 80,  
	},

	coverImageWide:{
		resizeMode:"contain",
		width: Metrics.screenWidth - 80,
		height:320
	},

	coverImageWider:{
		resizeMode:"contain", 
		width: Metrics.screenWidth - 40,
		height:330
	},

	textTitle:{
		fontFamily: Fonts.type.alt,
		textAlign: 'center',
		fontWeight:'600', //semibold
		color: Colors.primaryText,
		fontSize:22, 
		width: Metrics.screenWidth - 40,
		marginRight: 20,
		marginLeft: 20
	},
	
    textCaption: {
		fontFamily: Fonts.type.alt,
		textAlign: 'center',
		fontWeight:'600', //semibold
		color: Colors.darkText,
		fontSize:22, 
		width: Metrics.screenWidth - 40,
		marginRight: 20,
		marginLeft: 20
     },
     
     textContent: {
		fontFamily: Fonts.type.base,
		textAlign: 'center',
		color: Colors.dimText,
		fontSize:16, 
		lineHeight: 22,
		width: Metrics.screenWidth - 60,
		marginRight: 20,
		marginLeft: 20
	 },
     
     dotStyle: {
		 backgroundColor: 'rgba(109,109,109,.5)',
		 width: 8,
		 height: 8,
		 borderRadius: 7,
		 marginLeft: 7,
		 marginRight: 7,
		 marginTop: 7,
		 marginBottom: 7,
     },
     
     activeDotStyle: {
	     backgroundColor: '#6d6d6d',
     },
})
