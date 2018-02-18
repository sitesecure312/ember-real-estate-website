import React, { Component } from 'react';
import { Text, Image, View, Platform, TouchableOpacity, Keyboard, ScrollView } from 'react-native'
import SearchBar from 'react-native-searchbar';

import styles from './SelectRecipesScreenStyles';
import { Images, Metrics, Colors } from 'Themes'
import { Button, TextInput, ListItem } from 'Components'

import * as firebase from 'firebase';

import { startMainTab } from '../../app';

export default class SelectRecipesScreen extends React.Component {
    static navigatorStyle = {
        navBarTextFontFamily:'Futura Heavy',
        navBarNoBorder:true,
        navBarTitleTextCentered: true
    };

    constructor(props){
        super(props);    
        this.state = {
            coffeeName: this.props.coffeeName,
            recipes:[
                {
                    userprofile:Images.userprofile_1,
                    recipe:Images.recipe_1_selected,
                    desc:'Ripple Coffee - PERU',
                    selectd:true,
                },
                {
                    userprofile:Images.userprofile_1,
                    recipe:Images.recipe_2_selected,
                    desc:'Roaster - Recommended Setting',
                    selectd:true,
                },
                {
                    userprofile:Images.userprofile_2,
                    recipe:Images.recipe_3_selected,
                    desc:'Roaster - Recommended Setting',
                    selectd:true,
                },
                {
                    userprofile:Images.userprofile_3,
                    recipe:Images.recipe_1_selected,
                    desc:'Roaster - Recommended Setting',
                    selectd:false,
                },
                {
                    userprofile:Images.userprofile_3,
                    recipe:Images.recipe_3_selected,
                    desc:'User B Favourite Setting',
                    selectd:false,
                },
                {
                    userprofile:Images.userprofile_1,
                    recipe:Images.recipe_4_selected,
                    desc:'Roaster - Taste Filght',
                    selectd:false,
                }
            ]
        }     
    }


    goToNextScreen(){
        startMainTab()
    }

    setRecipesStatus(idx){
        let {recipes} = this.state;  
        for(let i in recipes){
            if(i == idx){
                recipes[i].selectd = !recipes[i].selectd;
                break;
            }
        }
         this.setState({recipes});
    }

    getRecipes(){
        let recipes = this.state.recipes.map((result, i) => {
            return  <TouchableOpacity style={{marginTop:5}} key={i} onPress={()=>{ 
                            this.setRecipesStatus(i)
                        }}>
                        {
                            result.selectd ? 
                                <View style={[styles.list, {backgroundColor:'#999999'}]}>
                                    <Image style={{marginTop:15, marginLeft:10, width:40 * Metrics.scaleWidth, height:40 * Metrics.scaleWidth}} source={result.userprofile} />
                                    <Image style={{marginTop:13, marginLeft:10, width:1, height:50 * Metrics.scaleHeight}} source={Images.line_selected}/>
                                    <Image style={{marginTop:15, marginLeft:10, width:40 * Metrics.scaleWidth, height:40 * Metrics.scaleHeight}} source={result.recipe}/>
                                    <Text style={{width:Metrics.screenWidth / 2, marginTop:18, marginLeft:10, fontFamily:"Futura Medium", textAlign: 'left', fontWeight:'400', color: '#ffffff', fontSize:10, }}>
                                        {result.desc}
                                    </Text>
                                    <Image style={{marginTop:15, marginLeft:20, width:38 * Metrics.scaleWidth, height:30 * Metrics.scaleHeight}} source={Images.arrow_icon}/>
                                </View>     
                            :
                                <View style={[styles.list, {backgroundColor:'#ffffff'}]}>
                                    <Image style={{marginTop:15, marginLeft:10, width:40 * Metrics.scaleWidth, height:40 * Metrics.scaleWidth}} source={result.userprofile} />
                                    <Image style={{marginTop:13, marginLeft:10, width:1, height:50 * Metrics.scaleHeight}} source={Images.line_unselected}/>
                                    <Image style={{marginTop:15, marginLeft:10, width:40 * Metrics.scaleWidth, height:40 * Metrics.scaleHeight}} source={result.recipe}/>
                                    <Text style={{width:Metrics.screenWidth / 2, marginTop:18, marginLeft:10, fontFamily:"Futura Medium", textAlign: 'left', fontWeight:'400', color: '#582b1f', fontSize:10}}>
                                        {result.desc}
                                    </Text>
                                    <Image style={{marginTop:15, marginLeft:20, width:38 * Metrics.scaleWidth, height:30 * Metrics.scaleHeight}} source={Images.i_icon}/>
                                </View>
                        }
                        
                    </TouchableOpacity>
        });
        return recipes;
    }

    render () {

        return (
            <View style={styles.container}>
                <ScrollView ref="scroll">
                    <View style={[styles.center, {paddingTop:60 * Metrics.scaleHeight}]}>
                        <Text style={[styles.textCaption,{textAlign:'left', fontSize:15, color:'#676767'}]}>Please Select The Recipes Which Recommended
                        </Text> 
                        <View style={{flexDirection:'row', width: Metrics.screenWidth - 40, marginRight: 20, marginLeft: 20}}>
                            <Text style={{textAlign:'left',fontFamily:"Futura Medium", fontWeight:'400', fontSize:15, color:'#676767'}}>For </Text>
                            <Text style={{textAlign:'left',fontFamily:"Futura Medium", fontWeight:'400', fontSize:15, color:'#582b1f'}}>{this.state.coffeeName}</Text>
                        </View>
                        <View style={{paddingTop:40 * Metrics.scaleHeight}} />
                        <Text style={[styles.textContent,{textAlign:'left', fontSize:14, color:'#b8b8b8'}]}>
                            Recommended Recipes
                        </Text>
                        {this.getRecipes()}
                    </View>
                    <TouchableOpacity style={{marginTop: 80 * Metrics.scaleHeight, alignItems:'center'}} onPress={()=>{  
                        this.goToNextScreen();            
                        }} >
                        <Image style={{width:708 * Metrics.scaleWidth, height: 80 * Metrics.scaleHeight}} source={Images.confirm_btn} />
                    </TouchableOpacity> 
                </ScrollView>
            </View>
        )
    }
}