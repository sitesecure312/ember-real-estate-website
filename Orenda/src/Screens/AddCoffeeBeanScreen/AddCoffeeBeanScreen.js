import React, { Component } from 'react';
import { Text, Image, View, Platform, TouchableOpacity, Keyboard, ScrollView } from 'react-native'
import SearchBar from 'react-native-searchbar';

import styles from './AddCoffeeBeanScreenStyles';
import { Images, Metrics, Colors } from 'Themes'
import { Button, TextInput, ListItem } from 'Components'

import * as firebase from 'firebase';

export default class AddCoffeeBeanScreen extends React.Component {
    static navigatorStyle = {
        navBarTextFontFamily:'Futura Heavy',
        navBarNoBorder:true,
        navBarTitleTextCentered: true
    };

    constructor(props){
        super(props);
        this.state={
            coffeeName:'',
            searchStatus:false,
            selectItemStatus:false,
            searchText:'',
            items:['Blue Bottle Coffee, Peru', 'Blue Bottle Coffee, Colombia Organic', 'Blue Bottle Coffee, Three Africans', 'Blue Bottle Coffee, Africans Orgainc'],
            results: [],
        }

        this._handleResults = this._handleResults.bind(this);   
        this._handleChangeText = this._handleChangeText.bind(this);
        this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
        this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));   
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }

    keyboardDidShow(e) {
       
    }

    keyboardDidHide(e) {
        // this.setState({searchStatus: false})
    }
    

    _handleResults(results) {
        this.setState({ results });
    }

    _handleChangeText(value){
       this.setState({searchText:value});
    }

    onGoNextScreen(){
        this.props.navigator.showModal({
            screen: 'Orenda.SelectRecipesScreen',
            title: 'SELECT RECIPES',
            passProps: {coffeeName:this.state.coffeeName}
        });
    }

    render () {

        let resultItems = this.state.results.map((result, i) => {
            return  <View style={{}} key={i}>
                        <ListItem 
                            onPress={()=>{ 
                                this.state.coffeeName = result;
                                Keyboard.dismiss();
                                this.setState({selectItemStatus: true})
                            }}>
                            <Text>{result}</Text>
                        </ListItem>
                    </View>
        });
        
        

        return (
            <View style={styles.container}>
                {
                    !this.state.searchStatus ?
                    <Image style={{width:750 * Metrics.scaleWidth, height:1168 * Metrics.scaleHeight}} source={Images.addcoffee_bg}>
                    
                        <View style={[styles.center, {paddingTop:80 * Metrics.scaleHeight}]}>
                            <Image style={{width:160 * Metrics.scaleWidth, height:160 * Metrics.scaleWidth}} source={Images.coffee_icon} />
                            <Text style={[styles.textCaption, {paddingTop: 50 * Metrics.scaleHeight}]}>Please Select The Type Of Coffee</Text> 
                            <Text style={[styles.textContent, {paddingTop: 30 * Metrics.scaleHeight}]}>
                                Enter your coffee bean to record your recipe and {'\n'} Ordena will feed the roaster recommended recipes to you.
                            </Text> 

                            <View style={{paddingTop: 50 * Metrics.scaleHeight}} />
                            <TouchableOpacity style={{}} onPress={()=>{ 
                                 this.setState({searchStatus: true})
                                }}> 
                                <View style={{width: Metrics.screenWidth - 40, marginRight: 20, marginLeft: 20, borderBottomColor:Colors.selectGrey, borderBottomWidth:0.5}}>
                                    <Text style={[styles.labelTxt, {textAlign: 'left',height:38}]}>Enter Your Coffee Name</Text>
                                    
                                </View>
                            </TouchableOpacity>
                        </View>                        
                    </Image>
                    : 
                    !this.state.selectItemStatus ?
                    <View style={styles.center}>
                        <View style={{paddingTop:120 * Metrics.scaleHeight}} />
                        { resultItems }
                        <SearchBar
                            ref={(ref) => this.searchBar = ref}
                            data={this.state.items}
                            handleResults={this._handleResults}
                            showOnLoad
                            hideBack={true}
                            textColor={'#582b1f'}
                            fontFamily={'Futura Medium'}
                            handleChangeText={this._handleChangeText}
                        />
                    </View>
                    :
                    <View style={styles.center}>
                        <View style={{flexDirection:'row', width:Metrics.screenWidth, height:60, backgroundColor:'#fff', borderBottomColor:Colors.selectGrey, borderBottomWidth:0.5 }}>
                            <TouchableOpacity style={{width:Metrics.screenWidth - 40, paddingLeft:30, paddingTop:18}} onPress={()=>{
                                    this.onGoNextScreen() 
                                }}>
                                <Text style={[styles.labelTxt, {fontSize:20}]}>{this.state.coffeeName}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:40, paddingTop:20}} onPress={()=>{ 
                                this.state.results = []
                                this.setState({selectItemStatus:false})}}>
                                <Image style={{width:41 * Metrics.scaleWidth, height:41 * Metrics.scaleWidth}} source={Images.close_btn} />
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingTop: 220 * Metrics.scaleHeight}}>
                            <Text style={[styles.textCaption]}>No Coffee Bean Match</Text> 
                            <Text style={[styles.textContent, {paddingTop: 30 * Metrics.scaleHeight}]}>
                                Lorm ipsum dolor sit amet adipisciong elit, sed do eiusmod{"\n"} tempor incididunt ut labore et dolore magna aliqua.
                            </Text> 
                            <TouchableOpacity style={{marginTop: 80 * Metrics.scaleHeight}} onPress={()=>{  
                                    this.onGoNextScreen()
                                }} >
                                <View style={styles.center}>
                                    <Image style={styles.coverSignImage} source={Images.send_request_btn} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                
            </View>
        )
    }

}

                                