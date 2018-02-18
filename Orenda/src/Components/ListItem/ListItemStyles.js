import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from 'Themes'

export default StyleSheet.create({
  defaultItem: {
    paddingLeft:0,
    marginLeft:0,
    width:Metrics.screenWidth,
	  height: 60,
    borderColor:Colors.borderColor,
    borderWidth:1,
  },
  
  defaultText:{
    fontFamily:"Futura Medium",
    color: '#838383',
    fontSize:18,
    marginLeft:20,
    width:Metrics.screenWidth - 50
  },
  
});