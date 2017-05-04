import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

import PollsList from '../List/PollsList'
import Detail from '../List/Detail'
import ItemList from '../List/ItemList'
import Results from '../../../components/Results'
import ItemDetails from '../dashboard/ItemDetails'
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
  ItemDetails : {
      screen: ItemDetails,
      navigationOptions: {
        title: 'Item Detail'
      }
  },
  Results: {
    screen: Results,
    navigationOptions: {
      title: 'Poll Results'
    }
  }
})
