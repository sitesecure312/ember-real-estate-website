import { StyleSheet } from 'react-native'
import { Metrics } from 'Themes'

export default StyleSheet.create({
	swipeWrapper: {
		top:300,
		height:500,
		margin:0,
		paddingTop:10,

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

	paginationContainer: {
		position: 'absolute',
		bottom: 100,
		left: 0,
		right: 0,
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
	},

	paginationContainer1:{
		position: 'absolute',
		top: 250,
		left: 0,
		right: 0,
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
	},
	
	bottom:{
		position:'absolute',
		alignItems:'center',
		width:Metrics.screenWidth,
		bottom:-40,    
	},
 
})
