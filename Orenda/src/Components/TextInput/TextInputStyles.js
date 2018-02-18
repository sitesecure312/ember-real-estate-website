import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from 'Themes'

export default StyleSheet.create({
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
  	wide:{
		marginLeft:20, 
		marginRight:20, 
		width: Metrics.screenWidth - 40, 
  	},
	amount:{
		width:(Metrics.screenWidth - 20) / 2
	},
	amountInput:{
		fontFamily: Fonts.type.alt,
		textAlign: 'center',
		fontWeight:'400', //semibold
		color: Colors.primary,
		fontSize:52, 
		width: 'auto',	
	},

	goal:{
		marginLeft:60, 
		marginRight:60, 
		width: Metrics.screenWidth - 120,
	},

	goalCreateLabel:{
		fontSize:12,
	},
	personal:{
		width:Metrics.screenWidth - 100, 
		
	},
	goalCreateInput:{
		fontSize:8,
		fontFamily: Fonts.type.input,
		color: Colors.brownishGrey,
	}
});
