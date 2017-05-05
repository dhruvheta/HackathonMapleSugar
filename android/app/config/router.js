import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

import PollsList from '../List/PollsList'
import Detail from '../List/Detail'
import ItemList from '../List/ItemList'
import ItemDetails from '../dashboard/ItemDetails'
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
      screen: ItemList
  },
  ItemDetails : {
      screen: ItemDetails
  },
})
