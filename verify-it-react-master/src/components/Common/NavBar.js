import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { WINDOW_WIDTH } from 'AppConstant';
import { DARK_GRAY } from 'AppColors';

const styles = StyleSheet.create({
  navButtonContainer: {
    width          : WINDOW_WIDTH,
    flexDirection  : 'row',
    justifyContent : 'center',
    alignItems     : 'center',
    backgroundColor: 'black',
    marginTop      : 3,
    height         : 65
  },
  navButton: {
    flex: 1
  },
  leftContainer: {
    justifyContent: 'center',
    flex          : 1,
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems    : 'center',
    flex          : 1
  },
  centerContainer: {
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems    : 'center',
    flex          : 0.5,
  },
  titleWrapper: {
    width         : WINDOW_WIDTH * 0.6,
    height        : 66 / 2,
    alignItems    : 'center',
    justifyContent: 'center',
  },
  navTitle: {
    backgroundColor: 'transparent',
    color          : DARK_GRAY,
    fontSize       : 32,
  },
  navText: {
    color          : DARK_GRAY,
    backgroundColor: 'transparent',
    fontSize       : 20,
    marginBottom   : 10
  },
});
class NavBar extends Component {
  formatNumber(num) {
    const n = num.toString();
    const p = n.indexOf('.');
    return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (arg, i) => (
      p < 0 || i < p ? `${arg},`: arg
    ));
  }

  renderLeftIcon() {
    const { leftImage, leftIconStyle } = this.props;
    if (leftImage) {
      return (
        <View style={styles.leftContainer}>
          <Image style={leftIconStyle} source={leftImage} resizeMode={Image.resizeMode.contain} />
        </View>
      );
    }
    return (<View />);
  }

  renderRightIcon() {
    const { rightImage, rightIconStyle } = this.props;
    if (rightImage) {
      return (
        <View style={styles.rightContainer}>
          <Image style={rightIconStyle} source={rightImage} resizeMode={Image.resizeMode.contain} />
        </View>
      );
    }
    return (<View />);
  }

  renderLeft() {
    return (
      <TouchableOpacity
        style={[styles.navButton]}
        onPress={() => this.props.onLeftPress && this.props.onLeftPress()}
      >
        {this.renderLeftIcon()}
      </TouchableOpacity>
    );
  }

  renderCenter() {
    const value = this.formatNumber(this.props.numericValue);
    return (
      <View style={styles.titleWrapper}>
        <Text style={styles.navTitle}>{`${this.props.numericCurrencyType}${value}`}</Text>
      </View>
    );
  }

  renderRight() {
    return (
      <TouchableOpacity
        underlayColor="transparent"
        style={[styles.navButton, { paddingRight: 10, alignItems: 'flex-end' }]}
        onPress={() => this.props.onRightPress && this.props.onRightPress()}
      >
        {this.renderRightIcon()}
      </TouchableOpacity>
    );
  }

  render() {
    let prefix = '';
    if (this.props.navTitlePrefix) {
      prefix = this.props.navTitlePrefix;
    }
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.navButtonContainer}>
          {this.renderLeft()}
          {this.renderCenter()}
          {this.renderRight()}
        </View>
        {!this.props.noNumericType &&
        <Text style={styles.navText}>{this.props.numericType + prefix}</Text>
        }
      </View>
    );
  }
}

export default connect()(NavBar);
