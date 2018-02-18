/**
 * Created by baebae on 4/5/16.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ListView,
} from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { EventSelector } from 'ReduxSelectors';
import { EventActions } from 'ReduxActions';
import { DARK_GRAY } from 'AppColors';

const colorSelected = '#77CCA4';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex         : 1,
  },
  listview: {
    flex: 1
  },
  sep: {
    backgroundColor: '#DDDDDD',
    height         : 1,
    marginLeft     : 10,
    marginRight    : 10
  },
  eventInfoContainer: {
    flex            : 1,
    alignSelf       : 'stretch',
    marginHorizontal: 10,
    flexDirection   : 'row',
    justifyContent  : 'center',
    alignItems      : 'center',
  },
  itemBlock: {
    flex           : 1,
    flexDirection  : 'column',
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
  itemName: {
    flex     : 2,
    fontSize : 15,
    color    : DARK_GRAY,
    textAlign: 'center'
  },
  itemCost: {
    flex     : 0.6,
    fontSize : 15,
    color    : DARK_GRAY,
    textAlign: 'center'
  },
  itemTime: {
    flex     : 1.5,
    fontSize : 15,
    color    : DARK_GRAY,
    textAlign: 'center'
  },
  brandViewContainer: {
    flexDirection   : 'row',
    flex            : 1,
    justifyContent  : 'center',
    alignItems      : 'center',
    marginHorizontal: 10,
  },
  eventIcon: {
    width    : 80,
    height   : 80,
    marginTop: 3,
  },
  eventBrandName: {
    height    : 40,
    lineHeight: 30,
    flex      : 1,
    textAlign : 'center'
  }
});
const EVENT_BRAND_TYPE = [
  {
    type : 'WSOP',
    label: 'World Series of Poker',
    icon : require('img/icon_wsop.png')
  },
  {
    type : 'European Poker Tour',
    label: 'European Poker Tour',
    icon : require('img/icon_wsop.png')
  },
  {
    type : '',
    label: 'Other',
    icon : null
  }
];

class SearchResultEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: '',
      dataSource   : new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  onSelectRow(selectedIndex, item) {
    this.setState({ selectedIndex: item._id });
    this.props.dispatch(EventActions.updateSelectedEvent(item));
    this.props.navigator.push({ name: 'ContractOverViewScene' });
  }

  getEventFromBrand(result, brand) {
    const ret = [];
    _.forEach(result, (eventItem) => {
      let flagEventType = '';
      _.forEach(EVENT_BRAND_TYPE, (brandType) => {
        if (eventItem.event_brand === brandType.type) {
          flagEventType = eventItem.event_brand;
        }
      });
      if (flagEventType === brand.type) {
        ret.push(eventItem);
      }
    });
    return ret;
  }
  renderBrand(brand) {
    return (
      <View style={styles.brandViewContainer}>
        {brand.icon && <Image style={styles.eventIcon} source={brand.icon} /> }
        <Text style={styles.eventBrandName}>{brand.label}</Text>
      </View>
    );
  }
  renderListView() {
    const { searchResult } = this.props;
    const lists = EVENT_BRAND_TYPE.map((brand, index) => {
      const items = this.getEventFromBrand(searchResult, brand);
      if (items.length > 0) {
        const dataSource1 = this.state.dataSource.cloneWithRows(items);
        return (
          <View>
            {this.renderBrand(brand)}
            <ListView
              key={index}
              style={styles.listview}
              dataSource={dataSource1}
              renderRow={(item, s1, s2) => this.renderSearchResultRow(item, s1, s2)}
            />
          </View>
        );
      }
      return <View />;
    });
    return lists;
  }

  renderValue(index, value) {
    if (value && value.length > 0) {
      return (
        <Text key={index} style={styles.itemName}>{value}</Text>
      );
    }
    return <View />;
  }

  renderSearchResultRow(item, sectionID, rowID) {
    console.info('render', item);
    let rowStyle = styles.itemBlock;
    if (item._id === this.state.selectedIndex) {
      rowStyle = [styles.itemBlock, { backgroundColor: colorSelected }];
    }
    return (
      <TouchableHighlight
        style={rowStyle}
        underlayColor={colorSelected}
        onPress={() => this.onSelectRow(rowID, item)}
      >
        <View style={styles.eventInfoContainer}>
          <Text style={styles.itemCost}>{item.buy_in}</Text>
          <Text style={styles.itemName}>{item.game_type}</Text>
          <Text style={styles.itemTime}>{new Date(item.date).toDateString()}</Text>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderListView()}
      </View>
    );
  }
}

export default connect(EventSelector.event$)(SearchResultEvent);
