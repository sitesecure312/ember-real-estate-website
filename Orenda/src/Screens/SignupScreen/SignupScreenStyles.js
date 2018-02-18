import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from 'Themes'

export default StyleSheet.create({

	center: {
		alignItems : 'center'
	},
		
	container: {
		flex: 1,
		backgroundColor: '#f9f8f8',
	},
     
	coverImage:{
		resizeMode:"contain",
	},
	coverSignImage:{
		resizeMode:"contain",
		width: Metrics.scaleWidth * 664,
		height: Metrics.scaleHeight * 80,  
	},
	avatar: {
		borderRadius: 50,
		width: 100,
		height: 100,
		borderColor:'#000',
		borderWidth:0.5,
	},
	avatarEdit: {
		position:'absolute',
		top: 180 * Metrics.scaleHeight,
		left:70,
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
	
     textCaption: {
		fontFamily:"Futura Medium",
		textAlign: 'center',
		fontWeight:'400', //semibold
		color: '#582b1f',
		fontSize:20, 
		width: Metrics.screenWidth - 40,
		marginRight: 20,
		marginLeft: 20
     },

	label:{
		fontFamily:"Futura Medium",
		fontSize:14,
		color: '#582b1f',
	},
	input:{
		fontSize: 18,
		fontFamily:"Futura Medium",
		color: '#582b1f',
	},
     
     textContent: {
		fontFamily:"Futura Medium",
		textAlign: 'center',
		color: '#bababa',
		fontSize:12, 
		lineHeight: 14,
		width: Metrics.screenWidth - 40,
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
