import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, Switch } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Metrics, Fonts, Images, Locale } from 'Themes'
import { Button, TextInput } from 'Components'
import styles from './PaymentCardStyles'


export default class PaymentCard extends Component {
    constructor(props){
        super(props);
        this.state ={
            defaultValue:this.props.defaultValue
        }
        // alert("ok");
         
    }
    

    render() {  	 
        style = styles.textWidth;
        if(this.props.modal)
            style = styles.textModalWidth;     

        return (
            <View style={{flexDirection:'row',borderColor:Colors.borderColor, borderWidth:1}}>
                <View style={{paddingLeft:14, paddingTop:25, paddingBottom:25}}>
                    <Image style={{width:16, height:16}} source={Images.bmo}/>
                </View>
                <View style={[style,{paddingTop:15}]}>
                    <Text style={[styles.caption, {fontSize:15, width:'auto', marginLeft:11, marginRight:0, textAlign:'left'}]}>{this.props.title}</Text>
                    <Text style={[styles.content, {fontSize:12, width:'auto', marginLeft:11, marginRight:0, textAlign:'left'}]}>{this.props.content}</Text>
                </View>
                <View style={{paddingTop:18, paddingRight:14}}>
                    <Switch
                      onValueChange={(value) => {                        
                            this.props.onCustomValueChange(value);
                        }}
                      value={this.state.defaultValue} />
                </View>                            
            </View>
        );
    }
}