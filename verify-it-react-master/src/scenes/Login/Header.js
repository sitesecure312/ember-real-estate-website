import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { BORDER_GRAY, LABEL_DARK_COLOR } from 'AppColors';

const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: BORDER_GRAY
  },
  iconContainer: {
    width: 60,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 18,
    width: 18,
    height: 13
  },
  label: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'stretch',
    lineHeight: 75,
    fontSize: 20,
    fontFamily: 'Open Sans',
    color: LABEL_DARK_COLOR,
    backgroundColor: 'transparent'
  }
});
export const Header = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.iconContainer}>
      <Image source={require('img/icon_menu.png')} style={styles.icon} />
    </TouchableOpacity>
    <Text style={styles.label}>Log in</Text>
    <View style={styles.iconContainer} />
  </View>
);
