import React, { Component } from 'react';
import { Text, Image, View, Platform, TouchableOpacity, ScrollView } from 'react-native'

import styles from './MainTabScreensStyles';
import { Images, Metrics, Colors } from 'Themes'
import { Button, TextInput } from 'Components'


export default class DeviceScreen extends React.Component {
    static navigatorStyle = {
        navBarTextFontFamily:'Futura Heavy',
        navBarHidden: true
    };
    constructor(props){
        super(props);   
        this.state = {
            coffeeName:'Ripple Coffee - PERU',
            scrollDown:false,
            brewingSwipe:false,
            page:0,
            recipes:[
                {
                    icon:Images.recipe_1_unselected,
                    title:'Pour-Over',
                    name:'Ripple Coffee - PERU',
                    userProfile:Images.userprofile_1,
                    desc:'By Roaster  Recent Update: 3days ago',
                    recipe_content:Images.recipe_content_1,
                    extend:true,
                    notification:false,
                },
                {
                    icon:Images.recipe_1_unselected,
                    title:'Pour-Over',
                    name:'Ripple Coffee - PERU',
                    userProfile:Images.userprofile_1,
                    desc:'By Roaster  Recent Update: 3days ago',
                    recipe_content:Images.recipe_content_2,
                    extend:false,
                    notification:true,
                },
                {
                    icon:Images.recipe_4_selected,
                    title:'Pour-Over',
                    name:'Taste Filght - First Coffee Tasting',
                    userProfile:Images.userprofile_1,
                    desc:'By Roaster  Recent Update: 3days ago',
                    recipe_content:Images.recipe_content_3,
                    extend:false,
                    notification:true,
                },
                {
                    icon:Images.recipe_4_selected,
                    title:'Pour-Over',
                    name:'Taste Filght - First Coffee Tasting',
                    userProfile:Images.userprofile_2,
                    desc:'By Roaster  Recent Update: 3days ago',
                    recipe_content:Images.recipe_content_4,
                    extend:false,
                    notification:false,
                },
                {
                    icon:Images.recipe_4_selected,
                    title:'Pour-Over',
                    name:'Taste Filght - First Coffee Tasting',
                    userProfile:Images.userprofile_2,
                    desc:'By Roaster  Recent Update: 3days ago',
                    recipe_content:Images.recipe_content_5,
                    extend:false,
                    notification:false,
                }
            ]
        }     
    }  
    

    showLightBox(){
        this.props.navigator.showLightBox({
                screen: 'Orenda.CustomerizePopupScreen',		
                style: {
                    backgroundBlur: "none", // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
                    backgroundColor: "rgba(0, 0, 0, 0.5)" // tint color for the background, you can specify alpha here (optional)
                },
                // animationType: 'slide-up',
            });
    }

    getRecipes(){
        let recipes = this.state.recipes.map((result, i) => {
            return  <View style={{}} key={i}>
                        {
                            result.extend ?
                                <Image style={{width:745 * Metrics.scaleWidth, height:316 * Metrics.scaleHeight}} source={result.recipe_content} >
                                    <TouchableOpacity style={{marginTop:40 * Metrics.scaleHeight, marginLeft:50 * Metrics.scaleWidth}} onPress={()=>{
                                            this.setState({scrollDown:false})
                                        }} >
                                        <View style={{flexDirection:'row', width:709 * Metrics.scaleWidth}}>
                                            <Image style={{width:60 * Metrics.scaleWidth, height:60 * Metrics.scaleWidth}} source={result.icon}/>
                                            <View style={{marginLeft:8}}>
                                                <Text style={[styles.textCaption, {width:'auto', fontSize:10, textAlign: 'left', lineHeight:14, marginLeft:0, marginRight:0}]}>{result.title}</Text>
                                                <Text style={[styles.textCaption, {width:'auto', fontSize:14, textAlign: 'left', lineHeight:14, marginLeft:0, marginRight:0}]}>{result.name}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{flexDirection:'row', width:709 * Metrics.scaleWidth, paddingLeft:65 * Metrics.scaleWidth, paddingTop:30 * Metrics.scaleHeight}}>
                                        <Image style={{width:40 * Metrics.scaleWidth, height:40 * Metrics.scaleWidth}} source={result.userProfile}/>
                                        <Text style={[styles.textContent, {paddingLeft:40 * Metrics.scaleWidth}]}>{result.desc}</Text>
                                    </View>
                                    <View style={{flexDirection:'row', width:709 * Metrics.scaleWidth, paddingLeft:65 * Metrics.scaleWidth, paddingTop:30 * Metrics.scaleHeight}}>
                                        <Text style={[styles.textContent, {paddingTop:30 * Metrics.scaleHeight, width: 709 * Metrics.scaleWidth / 2, color:'#ff8900', fontSize:12}]}>customize this</Text>
                                        <TouchableOpacity style={{marginLeft:60 * Metrics.scaleWidth}} onPress={()=>{
                                            this.state.scrollDown = false;
                                            this.setState({brewingSwipe:true})
                                        }} >
                                            <Image style={{width:224 * Metrics.scaleWidth, height:64 * Metrics.scaleHeight, }} source={Images.brew_now_btn} />
                                        </TouchableOpacity>
                                    </View>
                                </Image>
                            :
                                <Image style={{width:745 * Metrics.scaleWidth, height:160 * Metrics.scaleHeight}} source={result.recipe_content} >
                                    <TouchableOpacity style={{}} onPress={()=>{
                                        }} >
                                        <View style={{flexDirection:'row', width:709 * Metrics.scaleWidth, paddingLeft:65 * Metrics.scaleWidth, paddingTop:50 * Metrics.scaleHeight}}>
                                            <Image style={{width:49* Metrics.scaleWidth, height:49*Metrics.scaleWidth}} source={result.userProfile} />
                                            <Image style={{marginLeft:10, width:1, height:50 * Metrics.scaleHeight}} source={Images.line_unselected}/>
                                            <Image style={{marginTop:5, marginLeft:10, width:40 * Metrics.scaleWidth, height:40 * Metrics.scaleHeight}} source={result.icon}/>
                                            <Text style={{marginTop:5, marginLeft:10, fontFamily:"Futura Medium", textAlign: 'left', fontWeight:'400', color: '#582b1f', fontSize:12}}>
                                                {result.desc}
                                            </Text>
                                        </View>
                                        {
                                            result.notification && 
                                                <View style={[styles.dotStyle, {top:10, right:10}]} />
                                        }
                                    </TouchableOpacity>
                                </Image>
                        }                        
                    </View>
        });
        return recipes;
    }

    render () {
        let recipe;
        if(!this.state.scrollDown){
            recipe = this.state.recipes[0];
        }

        return (
            <View style={styles.container}>
                {
                    (!this.state.scrollDown && !this.state.brewingSwipe) && 
                        <Image style={styles.coverImage} source={Images.brew_bg}>
                            <View style={styles.center}>
                                <View style={{width: Metrics.screenWidth - 40,	marginRight: 20, marginLeft: 20, alignItems : 'flex-end'}}>
                                    <TouchableOpacity style={{marginTop: 60 * Metrics.scaleHeight}} onPress={()=>{ 
                                    }}>
                                        <Image style={{width:46 * Metrics.scaleWidth, height: 46 * Metrics.scaleWidth}} source={Images.setting_btn} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{paddingTop:80 * Metrics.scaleHeight}}/>

                                <Image style={{width:547*Metrics.scaleWidth, height:401 * Metrics.scaleHeight}} source={Images.product} />

                                <View style={{paddingTop:30 * Metrics.scaleHeight}}/>

                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontFamily:'Futura Medium', fontSize:10, color:'#838383', paddingTop:4}}>Status:</Text>
                                    <Text style={{fontFamily:'Futura Medium', fontSize:14, color:'#838383'}}>Connected</Text>
                                </View>

                                <View style={{paddingTop:10 * Metrics.scaleHeight}}/>

                                <View style={{flexDirection:'row'}}>
                                    <Image style={{marginTop:3, width:27 * Metrics.scaleWidth, height:30 * Metrics.scaleHeight}} source={Images.coffee_icon2} />
                                    <Text style={[styles.textCaption ,{paddingLeft:5, width:'auto', marginLeft:0, marginRight:0}]}>{this.state.coffeeName}</Text>
                                </View>

                                <View style={{paddingTop:40 * Metrics.scaleHeight}}/>
                                <Image style={{width:709 * Metrics.scaleWidth, height:333 * Metrics.scaleHeight}} source={Images.recipe_content} >
                                    <TouchableOpacity style={{marginTop:40 * Metrics.scaleHeight, marginLeft:30 * Metrics.scaleWidth}} onPress={()=>{
                                            this.setState({scrollDown:true})
                                        }} >
                                        <View style={{flexDirection:'row', width:709 * Metrics.scaleWidth}}>
                                            <Image style={{width:60 * Metrics.scaleWidth, height:60 * Metrics.scaleWidth}} source={recipe.icon}/>
                                            <View style={{marginLeft:8}}>
                                                <Text style={[styles.textCaption, {width:'auto', fontSize:10, textAlign: 'left', lineHeight:14, marginLeft:0, marginRight:0}]}>{recipe.title}</Text>
                                                <Text style={[styles.textCaption, {width:'auto', fontSize:14, textAlign: 'left', lineHeight:14, marginLeft:0, marginRight:0}]}>{recipe.name}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{flexDirection:'row', width:709 * Metrics.scaleWidth, paddingLeft:45 * Metrics.scaleWidth, paddingTop:30 * Metrics.scaleHeight}}>
                                        <Image style={{width:40 * Metrics.scaleWidth, height:40 * Metrics.scaleWidth}} source={recipe.userProfile}/>
                                        <Text style={[styles.textContent, {paddingLeft:40 * Metrics.scaleWidth}]}>{recipe.desc}</Text>
                                    </View>
                                    <View style={{flexDirection:'row', width:709 * Metrics.scaleWidth, paddingLeft:45 * Metrics.scaleWidth, paddingTop:30 * Metrics.scaleHeight}}>
                                        <Text style={[styles.textContent, {paddingTop:30 * Metrics.scaleHeight, width: 709 * Metrics.scaleWidth / 2, color:'#ff8900', fontSize:12}]}>customize this</Text>
                                        <TouchableOpacity style={{marginLeft:60 * Metrics.scaleWidth}} onPress={()=>{
                                            this.state.scrollDown = false;
                                            this.setState({brewingSwipe:true})
                                        }} >
                                            <Image style={{width:224 * Metrics.scaleWidth, height:64 * Metrics.scaleHeight, }} source={Images.brew_now_btn} />
                                        </TouchableOpacity>
                                    </View>
                                </Image>

                                <TouchableOpacity style={{marginTop: 10 * Metrics.scaleHeight}} onPress={()=>{ 
                                        this.setState({scrollDown:true})
                                    }}>
                                    <Image style={{width:90 * Metrics.scaleWidth, height: 90 * Metrics.scaleWidth}} source={Images.scrolldown_btn} />
                                </TouchableOpacity>
                            </View>
                        </Image>
                }
                {
                    (!this.state.scrollDown && this.state.brewingSwipe) && 
                        <Image style={{width:750 * Metrics.scaleWidth, height: 1334 * Metrics.scaleHeight}} source={Images.brewing_bg}>
                            <View style={styles.center} >
                                <View style={{paddingTop:240 * Metrics.scaleHeight}}/>
                                {
                                    this.state.page == 0 && 
                                        <TouchableOpacity style={{}} onPress={()=>{
                                                this.setState({page:1})
                                            }}>                                            
                                            <Text style={[styles.textCaption, {}]}>Your Machine Is Preparing</Text>
                                            <Text style={[styles.textContent, {textAlign: 'center', fontSize:14}]}>Please prepare your cup and enjoy your coffee</Text>
                                            <View style={{paddingTop:80 * Metrics.scaleHeight}}></View>
                                            <View style={styles.center}>
                                                <Image style={{width:750 * Metrics.scaleWidth, height: 460 * Metrics.scaleHeight}} source={Images.product_1} />
                                                <View style={{paddingTop:50 * Metrics.scaleHeight}}></View>
                                                <Image style={{width:450 * Metrics.scaleWidth, height: 80 * Metrics.scaleHeight}} source={Images.progress_line_1} />
                                            </View>
                                        </TouchableOpacity>
                                }
                                {
                                    this.state.page == 1 && 
                                        <TouchableOpacity style={{}} onPress={()=>{
                                                this.setState({page:2})
                                            }}>                                            
                                            <Text style={[styles.textCaption, {}]}>Your Coffee Is Brewing Now</Text>
                                            <Text style={[styles.textContent, {textAlign: 'center', fontSize:14}]}>Please prepare your cup and enjoy your coffee.</Text>
                                            <View style={{paddingTop:80 * Metrics.scaleHeight}}></View>
                                            <View style={styles.center}>
                                                <Image style={{width:750 * Metrics.scaleWidth, height: 460 * Metrics.scaleHeight}} source={Images.product_2} />
                                                <View style={{paddingTop:50 * Metrics.scaleHeight}}></View>
                                                <Image style={{width:450 * Metrics.scaleWidth, height: 80 * Metrics.scaleHeight}} source={Images.progress_line_2} />
                                            </View>
                                        </TouchableOpacity>
                                }
                                {
                                    this.state.page == 2 && 
                                        <TouchableOpacity style={{}} onPress={()=>{
                                                this.showLightBox()
                                            }}>                                            
                                            <Text style={[styles.textCaption, {}]}>Your Coffee Is Ready</Text>
                                            <Text style={[styles.textContent, {textAlign: 'center', fontSize:14}]}>Please prepare your cup and enjoy your coffee</Text>
                                            <View style={{paddingTop:80 * Metrics.scaleHeight}}></View>
                                            <View style={styles.center}>
                                                <Image style={{width:750 * Metrics.scaleWidth, height: 460 * Metrics.scaleHeight}} source={Images.product_3} />
                                                <View style={{paddingTop:50 * Metrics.scaleHeight}}></View>
                                                <Image style={{width:450 * Metrics.scaleWidth, height: 80 * Metrics.scaleHeight}} source={Images.progress_line_3} />
                                            </View>
                                        </TouchableOpacity>
                                }
                                
                            </View>
                        </Image>
                }
                {
                    (this.state.scrollDown && !this.state.brewingSwipe) &&
                        <ScrollView ref="scroll">
                            <View style={styles.center}>
                                <View style={{flexDirection:'row',paddingTop:30 * Metrics.scaleHeight, width:Metrics.screenWidth, alignItems:'flex-start'}} >
                                    <Image style={{width:246* Metrics.scaleWidth, height:180 * Metrics.scaleHeight}} source={Images.product} />
                                    <View style={{paddingTop:30 * Metrics.scaleHeight}}>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={{fontFamily:'Futura Medium', fontSize:10, color:'#838383', paddingTop:4}}>Status:</Text>
                                            <Text style={{fontFamily:'Futura Medium', fontSize:14, color:'#838383'}}>Connected</Text>
                                        </View>
                                        <View style={{flexDirection:'row', paddingTop:15 * Metrics.scaleHeight}}>
                                            <Image style={{marginTop:3, width:27 * Metrics.scaleWidth, height:30 * Metrics.scaleHeight}} source={Images.coffee_icon2} />
                                            <Text style={[styles.textCaption ,{paddingLeft:5, width:'auto', marginLeft:0, marginRight:0}]}>{this.state.coffeeName}</Text>
                                        </View>                                    
                                    </View>
                                </View>
                                <View style={{paddingTop:30 * Metrics.scaleHeight}}/>
                                {this.getRecipes()}
                                <TouchableOpacity style={{marginTop:30 * Metrics.scaleHeight}} onPress={()=>{
                                    }}>
                                    <Image style={{width:714 * Metrics.scaleWidth, height:80 * Metrics.scaleHeight}} source={Images.edit_recipe_btn} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginTop:30 * Metrics.scaleHeight}} onPress={()=>{
                                    }}>
                                    <Image style={{width:714 * Metrics.scaleWidth, height:80 * Metrics.scaleHeight}} source={Images.create_recipe_btn} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginTop:30 * Metrics.scaleHeight}} onPress={()=>{
                                        this.setState({scrollDown:false})
                                    }}>
                                    <Image style={{width:90 * Metrics.scaleWidth, height:90 * Metrics.scaleHeight}} source={Images.scrollUp_btn} />
                                </TouchableOpacity>
                                <View style={{paddingTop:120 * Metrics.scaleHeight}}/>
                            </View>
                        </ScrollView>
                }
                
            </View>
        )
    }
}