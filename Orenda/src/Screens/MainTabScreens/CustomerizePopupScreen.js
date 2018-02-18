import React, { Component } from 'react';
import { Text, Image, View, Platform, TouchableOpacity, ScrollView } from 'react-native'
import styles from './MainTabScreensStyles';
import { Images, Metrics, Colors } from 'Themes'
import { Button, TextInput } from 'Components'

import { startMain } from './';

export default class DeviceScreen extends React.Component {
    static navigatorStyle = {
        navBarTextFontFamily:'Futura Heavy',
        navBarHidden: true
    };
    constructor(props){
        super(props);   
    }

    render () {
        return (
            <View style={[styles.container, {backgroundColor:'transparent'}]}>
               <View style={[styles.center, {paddingTop: Metrics.screenHeight / 4}]}>
                   <Image style={{width:686 * Metrics.scaleWidth, height:479 * Metrics.scaleHeight}} source={Images.customerize_content} >
                       <Text style={[styles.textCaption, {paddingTop:80 * Metrics.scaleHeight, color:"#838383", fontSize:16, width: 'auto', marginRight: 0, marginLeft: 0}]} >How to Improve Your Next Coffees</Text>
                       <Text style={[styles.textCaption, {paddingTop:30 * Metrics.scaleHeight, color:"#838383", fontSize:13, width: 'auto', marginRight: 0, marginLeft: 0}]}>
                           To find your prefect coffees{"\n"}
                           Just customize your recipes just answer few questions!
                       </Text>
                       <TouchableOpacity style={{marginTop:50 * Metrics.scaleHeight}} onPress={()=>{
                            }}>
                            <View style={styles.center}>
                                <Image style={{width:464 * Metrics.scaleWidth, height:64 * Metrics.scaleHeight}} source={Images.customize_recipe_btn} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:30 * Metrics.scaleHeight}} onPress={()=>{
                                this.props.navigator.dismissLightBox();
                                startMain()
                            }}>
                            <Text style={[styles.textCaption, {color:"#ff8900", fontSize:13, width: 'auto', marginRight: 0, marginLeft: 0}]} >skip it now</Text>
                        </TouchableOpacity>
                   </Image>
               </View> 
            </View>
            
        )
    }
}