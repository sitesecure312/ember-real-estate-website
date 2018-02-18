import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  dotStyle1: {
    backgroundColor: '#6a5e6d',
    width: 8,
    height: 8,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 7,
    marginBottom: 7,
  },
  dotStyle2: {
    backgroundColor: 'rgba(9, 115, 170, 1)',
    width: 8,
    height: 8,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 7,
    marginBottom: 7,
  },

  activeDotStyle1: {
    backgroundColor: '#fff',
  }, 
  activeDotStyle2: {
    backgroundColor: 'rgba(249, 249, 249, 1)',
  },
});

export const Dot = ({
  active,
  status
}) => {
  style1 = styles.dotStyle1;
  style2 = styles.activeDotStyle1;
  if(status == 1){
    style1 = styles.dotStyle2;
    style2 = styles.activeDotStyle2;
  }
  if (active) {
    return (
      <View
        style={[style1, style2]}
      />
    );
  } else {
    return (
      <View 
        style={style1} />
    );
  }
}

export const RenderDots = (index, total, status) => {
  let dots = [];
  for (let i = 0; i < total; i++) {
    dots.push(React.createElement(Dot, { 
      key: i,
      active: i === index,
      status
    }));
  }
  return dots;
}

export default RenderDots;