import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

import PollsList from '../List/PollsList'
import Detail from '../List/Detail'
import ItemList from '../List/ItemList'

export const PollsListStack = StackNavigator ({
  PollsList : {
  //  screen: {
      screen: PollsList,
      navigationOptions: {
        title: 'Polls',
        //style: {backgroundColor: '#F6F6F6',justifyContent: 'center'}
      //  navigationStyles: {Navigator.NavigationBar.StylesIOS}
      }
    //}
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
})
