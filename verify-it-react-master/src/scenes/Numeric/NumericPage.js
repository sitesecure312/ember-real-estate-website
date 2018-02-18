import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { CurrencyUtils } from 'AppServices';
import { NumericActions } from 'ReduxActions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex         : 1,
    margin       : 0.5,
  },
  numericButton: {
    color   : 'white',
    fontSize: 25
  }
});
const labelButtons = [
  ['£ ¥ ₤\n ₣ ₰', '$', '€', '%'],
  ['7', '8', '9', 'Swap'],
  ['4', '5', '6', 'Stake'],
  ['1', '2', '3', 'Transfer'],
  ['0', '.', 'A/C'],
];
class NumericPage extends Component {
  constructor(props) {
    super(props);

    this.flagInputNumeric = true;
    this.flagDecimal      = false;
    this.decimalSize      = 0;
    this.state            = {

    };
  }


  onButtonPressed(rowIndex, colIndex) {
    if (rowIndex === 0) {
      // update numeric currency type
      let newCurrencyType = labelButtons[rowIndex][colIndex];
      const oldCurrencyType = this.props.numericCurrencyType;

      if (colIndex === 0) {
        if (oldCurrencyType === '$' || oldCurrencyType === '€') {
          newCurrencyType = '£';
        } else if (oldCurrencyType === '£') {
          newCurrencyType = '¥';
        } else if (oldCurrencyType === '¥') {
          newCurrencyType = '₤';
        } else if (oldCurrencyType === '₤') {
          newCurrencyType = '₣';
        } else if (oldCurrencyType === '₣') {
          newCurrencyType = '₰';
        } else if (oldCurrencyType === '₰') {
          newCurrencyType = '£';
        }
      }
      this.convertCurrency(newCurrencyType);
    }

    if (rowIndex > 0 && rowIndex < 4) {
      // update numeric type 'swap, stake, loan'
      if (colIndex === 3) {
        this.props.dispatch(NumericActions.updateNumericType(labelButtons[rowIndex][colIndex]));
      } else {
        // tap number from '1 ~ 9'
        this.updateNumericValue(labelButtons[rowIndex][colIndex]);
      }
    }

    if (rowIndex === 4) {
      if (colIndex === 0) {
        // tap number value '0'
        this.updateNumericValue(labelButtons[rowIndex][colIndex]);
      } else if (colIndex === 1) {
        // tap '.'
        if (this.flagDecimal === false) {
          this.flagDecimal = true;
          this.decimalSize = 1;
        }
      } else if (colIndex === 2) {
        // tap 'clear'
        this.clearNumericPanel();
      }
    }

    if (rowIndex === 5) {
      if (colIndex === 1) {
        // tap 'A/C'
        this.clearNumericPanel();
      }
    }
  }
  updateNumericValue(newValue) {
    if (this.flagInputNumeric) {
      let value = this.props.numericValue;
      if (!this.flagDecimal) {
        value = (value * 10) + parseInt(newValue);
      } else {
        value = (parseFloat(value) + (newValue / (Math.pow(10, this.decimalSize)))).toFixed(5);
        this.decimalSize += 1;
      }
      this.props.dispatch(NumericActions.updateNumericValue(Number(value)));
    }
  }

  convertCurrency(newCurrencyType) {
    this.flagInputNumeric = false;
    const { numericValue, numericCurrencyType, dispatch } = this.props;
    const oldCurrencyType = this.props.numericCurrencyType;
    if (numericCurrencyType !== newCurrencyType) {
      const value = CurrencyUtils.convertCurrency(numericValue, oldCurrencyType, newCurrencyType);
      if (value !== 0) {
        dispatch(NumericActions.updateCurrencyType(newCurrencyType));
        dispatch(NumericActions.updateNumericValue(Number(value.toFixed(5))));
      } else {
        dispatch(NumericActions.updateCurrencyType(newCurrencyType));
      }
    }
  }

  clearNumericPanel() {
    this.flagDecimal = false;
    this.props.dispatch(updateNumericValue(0));
    this.flagInputNumeric = true;
  }

  renderColumnSection(rowIndex) {
    const size = labelButtons[rowIndex].length;
    return _.map(_.range(size), (colIndex) => {
      const style = {
        flex            : 1,
        borderRightWidth: 1,
        borderColor     : '#797676'
      };
      if (rowIndex === 0) {
        style.backgroundColor = '#5C5B5A';
        style.flex = 1;
      } else {
        style.backgroundColor = '#CACBCF';
      }
      if (colIndex === size - 1) {
        style.backgroundColor = '#959595';
        style.flex = 1.4;
      }
      if (rowIndex === 4) {
        if (colIndex === 0) {
          style.flex = 2;
          style.paddingLeft = 1;
        }
      }
      return (
        <TouchableOpacity
          key={colIndex}
          style={[style, { alignItems: 'center', justifyContent: 'center' }]}
          onPress={() => this.onButtonPressed(rowIndex, colIndex)}
        >
          <Text style={styles.numericButton}>
            {labelButtons[rowIndex][colIndex]}
          </Text>
        </TouchableOpacity>
      );
    });
  }

  renderRowSection(rowIndex) {
    const style = {
      flexDirection : 'row',
      flex          : 1,
      borderTopWidth: 1,
      borderColor   : '#797676',
    };

    if (rowIndex === 0) {
      style.borderTopWidth = 0;
    }
    return (
      <View style={style} key={rowIndex}>
        {this.renderColumnSection(rowIndex)}
      </View>
    );
  }

  renderNumericView() {
    const size = labelButtons.length;
    return _.map(_.range(size), rowIndex => this.renderRowSection(rowIndex));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderNumericView()}
      </View>
    );
  }
}

export default connect()(NumericPage);
