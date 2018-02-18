import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker'
import { Colors, Metrics, Fonts, Images, Locale } from 'Themes'
import { Button, TextInput, EncriptionMessage } from 'Components'
import styles from './GoalTimeHorizonStyles'


export default class GoalTimeHorizon extends Component {
    constructor(props){
        super(props);
            
        this.state={
            date:this.props.defaultDate
        }
            
    }

    render() {  	        
        return (
            <View style={[styles.center, {}]}>
                <View style={{flexDirection:'row', paddingTop:12, width: Metrics.screenWidth - 20}} >
                    <Text style={[styles.textContent, {width:'auto', fontSize:10, marginLeft:18, marginRight:0}]}>
                        {Locale.t("Desired achievement date")}
                    </Text> 
                    <View style={{width:(Metrics.screenWidth - 190)}}/>
                    <TouchableOpacity  onPress={() => {
                        alert("Edit");
                      }}>
                        <Text style={[styles.textContent, {width:'auto', fontSize:10, color:Colors.primary, marginLeft:0, marginRight:0}]}>
                            {Locale.t("Edit")}
                        </Text>
                    </TouchableOpacity> 
                </View>
                <View style={{paddingTop:11}}/>
                <DatePicker
                    style={{width: Metrics.screenWidth - 100, marginLeft:30, marginRight:70}}
                    date={this.props.defaultDate}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"            
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => {
                        this.props.onDateChange(date);              
                    }}
                />
                <View style={{paddingTop:18}}/>
            </View>
        );
    }
}