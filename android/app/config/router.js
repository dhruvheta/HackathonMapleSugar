import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

import PollsList from '../List/PollsList'
import Detail from '../List/Detail'
import ItemList from '../List/ItemList'
import ItemListDetails from '../dashboard/ItemDetails'
export const PollsListStack = StackNavigator ({
  PollsList : {
      screen: PollsList,
      navigationOptions: {
        title: 'Polls',
      }
  },
  Detail : {
      screen: Detail,
      navigationOptions: {
        title: 'Categories'
      }
  },
  ItemList : {
      screen: ItemList,
      navigationOptions: {
        title: 'Items'
      }
  },
  ItemListDetails : {
      screen: ItemListDetails,
      navigationOptions: {
        title: 'Item List Detail'
      }
  },
})
