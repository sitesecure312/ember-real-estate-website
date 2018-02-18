import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf    : 'stretch',
    marginTop    : 3,
  },
  item: {
    flexDirection: 'row',
    alignSelf    : 'stretch',
    alignItems   : 'center',
    marginTop    : 3,
  },
  itemText: {
    flex      : 1,
    marginLeft: 20,
    textAlign : 'left',
    fontSize  : 35,
    color     : 'black'
  },
  payIcon: {
    marginLeft: 20,
    width     : 35,
    height    : 35,
  }
});

class PayArea extends Component {
  constructor(props) {
    super(props);
  }
  
  renderSwapArea() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.itemText}>Swap</Text>
          <Text style={styles.itemText}>{`${this.props.amount} ${this.props.currencyType}`}</Text>
        </View>
      </View>
    );
  }

  renderTransferArea() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.itemText}>Received</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>{`${this.props.amount} ${this.props.currencyType}`}</Text>
        </View>
      </View>
    );
  }

  renderStakePage() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.itemText}>Buy</Text>
          <Text style={styles.itemText}>{`${this.props.amount} ${this.props.currencyType}`}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Rate</Text>
          <Text style={styles.itemText}>1</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Paid?</Text>
          <View style={{ flex: 1 }}>
            <Image style={styles.payIcon} source={require('img/icon_paid_off.png')} />
          </View>
        </View>
      </View>
    );
  }

  render() {
    if (this.props.pageType === 'Swap') {
      return this.renderSwapArea();
    }

    if (this.props.pageType === 'Transfer') {
      return this.renderTransferArea();
    }

    if (this.props.pageType === 'Stake') {
      return this.renderStakePage();
    }
    return (
      <View style={styles.container} />
    );
  }
}
export default PayArea;
