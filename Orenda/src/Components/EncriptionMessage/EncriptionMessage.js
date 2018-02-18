import React, { Component } from 'react';
import { Text, Image, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Images, Colors, Metrics, Locale } from 'Themes'

import styles from './EncriptionMessageStyles'

export default class EncriptionMessage extends Component {
  render() {
	  return (
				<View style={styles.container}>
					<Text style={styles.encryption}>
							<Image resizeMode="contain" source={Images.lockpadding} style={{width: 16, height: 16}}/>&nbsp;
							{Locale.t("We use the same 256-bit SSL encryption and security protocols banks use so your information is never at risk.")}
					</Text>
				</View>
			);
  }
}