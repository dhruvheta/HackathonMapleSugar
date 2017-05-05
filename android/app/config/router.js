import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

import PollsList from '../List/PollsList'
import Detail from '../List/Detail'
import ItemList from '../List/ItemList'
import ItemListDetails from '../dashboard/itemDetails'
export const PollsListStack = StackNavigator ({
  PollsList : {
      screen: PollsList,
      navigationOptions: {
        title: 'Polls',
        //headerRight: <Button color='#841584' />,
        //headerTintColor: '#F6F6F6',
      }
  },
  Detail : {
      screen: Detail,
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
