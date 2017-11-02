
import { AsyncStorage } from 'react-native'

export async function
   getDecks() {
    let response = await AsyncStorage.getItem('listOfDecks');
    let lodecks = await JSON.parse(response) || {};
    return lodecks;
  }

  export async function addInitialDecks () { 
    let listOfDecks =  {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    };

      await AsyncStorage.setItem('listOfDecks', 
        JSON.stringify(listOfDecks)); 
  }

// async _addDeck () { 
//   const listOfDecks = [...this.state.listOfDecks, this.state.text]; 

//   await AsyncStorage.setItem('listOfDecks', 
//     JSON.stringify(listOfDecks)); 

//   this._getDecks(); 
// } 

// async _setInitialState () { 
//   const listOfDecks = this.state.listOfDecks;

//   await AsyncStorage.setItem('listOfDecks', 
//     JSON.stringify(listOfDecks)); 

//   this._getDecks();
// } 

// getDecks() {
//   AsyncStorage.getAllKeys();
// }

// TODO: implement getDecks
// TODO: implement getDeck
// TODO: implement saveDeckTitle
// TODO: implement addCardToDeck

