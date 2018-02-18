/**
 * Created by baebae on 6/26/16.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
} from 'react-native';
import _, { isEqual } from 'lodash';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { ContractSelector, AccountSelector } from 'ReduxSelectors';
import { ContractActions } from 'ReduxActions';

const colorSelected = '#77CCA4';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex         : 1,
  },
  listview: {
    flex: 1
  },
  contractInfoContainer: {
    flex         : 1,
    flexDirection: 'row',
    alignSelf    : 'stretch',
  },
  itemBlock: {
    flex           : 1,
    margin         : 10,
    marginVertical : 5,
    padding        : 4,
    backgroundColor: '#D8D8D8',
    borderColor    : '#979797',
    borderWidth    : 1,
    borderRadius   : 10,
    justifyContent : 'center',
    alignItems     : 'center',
  },
  amount: {
    textAlign: 'center',
    alignSelf: 'stretch',
    width    : 60,
  },
  currency: {
    textAlign: 'center',
    alignSelf: 'stretch',
    width    : 60,
  },
  type: {
    textAlign: 'center',
    alignSelf: 'stretch',
    width    : 60,
  },
  created: {
    flex     : 1,
    alignSelf: 'stretch',
  }
});

class SearchResultContract extends Component {
  constructor(props) {
    super(props);
    this.pageIndex = 1;
    this.state = {
      selectedIndex: -1,
      dataSource   : new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
    this.renderContractRow = this.renderContractRow.bind(this);
  }

  componentDidMount() {
    if (this.props.token && this.props.token.length > 0) {
      // this.createTestContract(this.props);
      this.getContracts(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.token, nextProps.token)) {
      if (nextProps.token && nextProps.token.length > 0) {
        // this.createTestContract(nextProps);
        this.getContracts(nextProps);
      }
    }
  }

  onSelectRow(selectedIndex) {
    this.setState({ selectedIndex });
  }

  getContracts(props) {
    const { pageIndex } = this;
    props.dispatch(ContractActions.getContracts(pageIndex));
  }

  getMoreContracts() {
    const { contracts } = this.props;
    if (this.pageIndex < contracts.pages) {
      this.pageIndex += 1;
    }
    this.props.dispatch(ContractActions.getContracts(this.pageIndex));
  }

  filterContract() {
    const { keyword, contracts } = this.props;
    if (contracts.total > 0) {
      return _.filter(contracts.docs, (contract) => {
        let ret = false;
        if (keyword === '') {
          return true;
        }
        _.forEach(contract, (value) => {
          if (typeof value === 'string' && value.indexOf(keyword) > -1) {
            ret = true;
          } else if (value && typeof value === 'object' && value.amount) {
            const amount = value.amount;
            if (amount.toString().indexOf(keyword) > -1) {
              ret = true;
            }
          }
        });
        return ret;
      });
    }
    return [];
  }

  renderContractRow(contract, sectionID, rowID) {
    let rowStyle = styles.itemBlock;
    if (rowID === this.state.selectedIndex) {
      rowStyle = [styles.itemBlock, { backgroundColor: colorSelected }];
    }
    const { type, currency, date_created } = contract;
    const { amount } = contract[type];
    const date =  new Date(date_created);
    return (
      <TouchableHighlight
        style={rowStyle}
        underlayColor={colorSelected}
        onPress={() => this.onSelectRow(rowID, contract)}
      >
        <View style={styles.contractInfoContainer}>
          <Text style={styles.amount}>{amount}</Text>
          <Text style={styles.currency}>{currency}</Text>
          <Text style={styles.type}>{type}</Text>
          <View style={styles.created}>
            <Text style={{ textAlign: 'center' }}>{date.toString().substring(0, 15)}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  renderSearchResultListView() {
    const contracts = this.filterContract();
    const dataSource = this.state.dataSource.cloneWithRows(contracts);
    return (
      <ListView
        style={styles.listview}
        dataSource={dataSource}
        renderRow={this.renderContractRow}
        onEndReachedThreshold={100}
        onEndReached={() => this.getMoreContracts()}
        enableEmptySections={true}
      />
    );
  }

  renderListView() {
    return (
      <View style={styles.container}>
        {this.renderSearchResultListView()}
      </View>
    );
  }

  render() {
    return this.renderListView();
  }
}

export const selector$ = createSelector(ContractSelector.contracts$, AccountSelector.token$,
  (contracts, token) => ({
    contracts, token
  })
);
export default connect(selector$)(SearchResultContract);
