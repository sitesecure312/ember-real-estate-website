import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Metrics, Fonts, Images, Locale } from 'Themes'
import { Button, TextInput, EncriptionMessage } from 'Components'
import styles from './InsightCardStyles'


export default class InsightCard extends Component {
    constructor(props){
        super(props);
            
        this.state = { 
            text: ''
        };
            
    }

    render() {  
        let pictures;	
        if(this.props.pictures) {
            pictures = this.props.pictures.map((s, i)=>{
                return <Image key={i} style={{width:34, height:34}} source={s} />
                    
            });
        }        
        


        return (
            <View style={styles.center}>
                {
                    this.props.headerText &&
                        <Text style={[styles.textContent, {paddingTop:13, paddingBottom:39, fontSize:12, lineHeight:15, color:Colors.contentText}]}>
                            {Locale.t(this.props.headerText)}
                        </Text> 
                }
                {
                    this.props.pictures &&
                        <View style={{flexDirection:'row', justifyContent : 'center', paddingTop:28, paddingBottom:20, width: Metrics.screenWidth - 20, marginLeft: 10,marginRight: 10}} >
                            {pictures}
                        </View>
                }
                {
                    this.props.title &&
                        <Text style={[styles.textCaption, {paddingBottom:19}]}>
                            {Locale.t(this.props.title)}
                        </Text>   
                }
                {
                    this.props.content &&
                        <Text style={[styles.textContent, {paddingBottom:25, color:Colors.subTitle, fontSize:12}]}>
                            {Locale.t(this.props.content)}
                        </Text> 
                }                
                {
                    this.props.buttonText &&                     
                        (this.props.inactive ?
                            <View style={{paddingBottom:25}}>
                                <Button 
                                    block                                 
                                    goal
                                    inactive
                                    disabled={true}
                                    onPress={() => {
                                    }}
                                >
                                {Locale.t(this.props.buttonText).toUpperCase()}
                                </Button>
                            </View>     
                        :
                            <View style={{paddingBottom:25}}>
                                <Button 
                                    block                                 
                                    goal
                                    onPress={() => {
                                        this.props.onCustomPress()
                                    }}
                                >
                                {Locale.t(this.props.buttonText).toUpperCase()}
                                </Button>
                            </View>)                    
                }  
            </View>
        );
    }
}