import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from 'Themes'

export default StyleSheet.create({

	center: {
		alignItems : 'center'
	},
		
	container: {
		flex: 1,
		// backgroundColor: '#f9f8f8',
	},

	tabStyle:{
		backgroundColor:Colors.background,
		borderTopColor:Colors.tabBorder,
		borderTopWidth:0.5,
	},
	activeTabStyle:{
		backgroundColor:Colors.background,
		
	},
	textStyle:{
		fontFamily: "Futura Heavy",
		textAlign: 'center',
		fontWeight:'600', //semibold
		color: '#b8b8b8',
		fontSize:10,
	},
	activeTextStyle:{
		fontFamily: "Futura Medium",
		textAlign: 'center',
		fontWeight:'600', //semibold
		color: '#582b1f',
		fontSize:10,
	},

	list:{		
		flexDirection:'row',
		width: Metrics.screenWidth - 40,
		marginRight: 20,
		marginLeft: 20,
		height:50,
		borderRadius: 10,
		borderColor:'#999999',
		borderWidth:1,
	},
     
	coverImage:{
		resizeMode:"contain",
		width:Metrics.scaleWidth * 750,
		height:Metrics.scaleHeight * 1334,
	},
	coverSignImage:{
		resizeMode:"contain",
		width: Metrics.scaleWidth * 708,
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
		lineHeight: 21,
		width: Metrics.screenWidth - 40,
		marginRight: 20,
		marginLeft: 20
    },
	labelTxt:{
		fontSize:14,
	},
	inputTxt:{
		fontSize: 18,
		fontFamily: Fonts.type.input,
		color: Colors.brownishGrey,
	},
     
     textContent: {
		fontFamily:"Futura Medium",		
		color: '#bdbdbd',
		fontSize:10, 
		lineHeight: 14,		
	 },
     
     badgeStyle: {
		 position:'absolute',
		 backgroundColor: '#ff0000',
		 width: 20,
		 height: 20,
		 borderRadius: 10,		
     },

	 dotStyle:{
		position:'absolute',
		backgroundColor: '#ff0000',
		width: 8,
		height: 8,
		borderRadius: 7,		
	 },
     
     activeDotStyle: {
	     backgroundColor: '#6d6d6d',
     },
})
