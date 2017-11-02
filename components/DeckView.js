import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import { getDecks } from '../utils/storage'
import styles from '../utils/styles'

class DeckView extends Component {
    componentDidMount(){
      getDecks().done((t)=>{
        this.setState(t);
      })
    }
    static navigationOptions = ({ navigation }) => {
        const { deckId } = navigation.state.params
        return {
            title: deckId
        }
    }

    renderDeck(deckId) {
        return (<View style={styles.container}>
            <Text style={{ fontSize: 30 }}>
                {deckId}
            </Text>
            <Text style={{ fontSize: 20 }}>
                {this.state[deckId].questions.length} questions
            </Text>
            <TouchableOpacity style={styles.whiteBtn} onPress={() => this.props.navigation.navigate('QuizView', { deckId })}>
                <Text style={styles.blackTxt}>
                    Add a card
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.blackBtn} onPress={() => this.props.navigation.navigate('QuizView', { deckId })}>
                <Text style={styles.whiteTxt}>
                    Start a quiz
                </Text>
            </TouchableOpacity>
        </View>)
    }


    render () {
        const { deckId } = this.props.navigation.state.params
        return (
            !!this.state ? 
                this.renderDeck(deckId)    
                : <Text>Loading...</Text>  
        )
    }
}

export default DeckView