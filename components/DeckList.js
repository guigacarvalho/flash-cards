import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { getDecks } from '../utils/storage'


class DeckList extends Component {
    componentDidMount(){
      getDecks().done((t)=>{
        this.setState(t);
      })
    }
  
    navigateHome = () => {
      this.props.navigation.dispatch(NavigationActions.back({key: 'AddEntry'}))
    }

    renderDeckList() {
        return Object.keys(this.state).map((deck, index) => {
            const { title, questions } = this.state[deck];
            return (<TouchableOpacity key={index} style={styles.deck} onPress={() => this.props.navigation.navigate('DeckView', { deckId: deck })}>
                <Text style={{ fontSize: 20 }}>
                    {title}
                </Text>
                <Text style={{ fontSize: 16, color: 'red' }}>
                    {questions.length} questions
                </Text>
            </TouchableOpacity>);
        });
    }

    render () {
        return (
            <View style={styles.container}>
                {
                  !!this.state ? 
                        this.renderDeckList()
                    : <Text>Loading...</Text>
                }
            </View>
          );
    }
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  deck:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: 10,
    padding: 10,
    borderColor: 'gray',    
    borderBottomWidth: 1,
    maxHeight: 90,
  }
});

export default DeckList