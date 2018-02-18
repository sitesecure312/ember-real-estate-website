/**
 * Created by kitty on 11/5/16.
 */
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { BLACK, WHITE } from 'AppColors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#1c1c1c'
  },
  logo: {
    width: 200,
    resizeMode: 'contain'
  },
  menuItemContainer: {
    height: 50,
    paddingLeft: 30,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: BLACK
  },
  textMenu: {
    backgroundColor: 'transparent',
    color: WHITE,
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: '800'
  }
});
const menuItems = ['LOGIN', 'CREATE CONTRACTS', 'YOUR CONTRACTS'];
const MenuItem = ({ item }) => (
  <TouchableOpacity style={styles.menuItemContainer}>
    <Text style={styles.textMenu}>{item}</Text>
  </TouchableOpacity>
)
export const Menu = () => (
  <View style={styles.container}>
    <Image source={require('img/icon_menu_logo.png')} style={styles.logo} />
    {menuItems.map((item, i) => <MenuItem item={item} key={i} />)}
  </View>
)