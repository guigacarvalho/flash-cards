import React, { Component } from 'react';
import { Text, View, FlatList, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import { getDecks, addInitialDecks } from './utils/storage'
import DeckList from  './components/DeckList'
import DeckView from  './components/DeckView'
import NewDeck from  './components/NewDeckView'
import styles from './utils/styles'

// TODO: Extract in utils/colors
const white = '#fff'
const black = '#000'
const shadow = 'rgba(0, 0, 0, 0.24)'

const Tabs = TabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({tintColor}) => <FontAwesome name='clone' size={28} color={tintColor}/>
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square-o' size={28} color={tintColor}/>
    }
  }, 
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? black : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : black,
      shadowColor: shadow,
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})



const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'red',
      }
    }
  }
})

export default class App extends Component {

  componentDidMount(){
    addInitialDecks().done(
      getDecks().done((t)=>{
        this.setState(t);
    }));
  }

  render() {

    return (
      <MainNavigator />
    );
  }
}