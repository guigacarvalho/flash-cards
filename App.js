import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform } from 'react-native';
import { TabNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import initialState from './src/utils/asyncStorage'

// TODO: Extract in utils/colors
const white = '#fff'
const black = '#000'
const shadow = 'rgba(0, 0, 0, 0.24)'

// TODO: Fill in functionality and extract in its own file
const DeckList = () => (
  <View style={styles.container}>
      <Text>DecksList!</Text>
      <Text>{JSON.stringify(initialState)}</Text>
  </View>
);

// TODO: Fill in functionality and extract in its own file
const Quizes = () => (
  <View style={styles.container}>
    <Text>Quizes!</Text>
  </View>
);

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({tintColor}) => <FontAwesome name='clone' size={28} color={tintColor}/>
    }
  },
  Quizes: {
    screen: Quizes,
    navigationOptions: {
      tabBarLabel: 'Quizes',
      tabBarIcon: ({tintColor}) => <FontAwesome name='question-circle-o' size={28} color={tintColor}/>
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

export default class App extends React.Component {
  render() {
    return (
      <Tabs />
    );
  }
}

// TODO: Convert to styled components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
