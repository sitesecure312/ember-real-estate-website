//Swiper
import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Button } from 'Components';
import RenderDots from './Dots';
import Swiper from 'react-native-swiper';
import styles from './SwiperStyles.js'

export default class MySwiper extends React.Component {
   constructor(props){
      super(props);
      this.state = {
          showDots:true,
      };      
  }  

  renderPagination = (index, total, context) => {
  	if (this.props.onNewPage)
  	    this.props.onNewPage(index, total, context);
  			
    if (index === total - 1 && this.props.textLastButton) {
        this.state.showDots = false;

    } else {
        this.state.showDots = true;
    }

    if(!this.state.showDots){
        component = (<Button block onPress={this.props.onLastButtonPress}>
                        {this.props.textLastButton}
                    </Button>)
    }else{
        let status = 0;
        if(this.props.downPayment) status = 1
        component = RenderDots(index, total, status)
    }
    style = styles.paginationContainer;
    if(this.props.downPayment)
        style = styles.paginationContainer1;

    return (
        <View style={style}>
            {component}
        </View>
    );
  }
 render () {
    return (
        <Swiper {...this.props} 
            loop={this.props.loop ? this.props.loop : false}             
            showsButtons={false}  
            showsPagination={true}
            renderPagination={this.renderPagination}> 
		    {this.props.children}
        </Swiper>
    )
  }
}
