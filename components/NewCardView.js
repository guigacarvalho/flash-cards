import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, Platform } from 'react-native';
import styles from '../utils/styles'

class NewCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            question: 'Type your question here.',
            answer: 'Type your answer here.',
        };
    }

    static navigationOptions = ({ navigation }) => {
        const { deckId } = navigation.state.params
        return {
            title: deckId
        }
    }

    addCard () {
        const { deckId } = this.props.navigation.state.params        
        console.log('Add f.. card!!')
        console.debug(deckId)
    }

    render() {
        return (
            <View style={styles.containerTop}>
                <Text style={styles.bigTitle}>New Card</Text>
                <View style={styles.container}>
                    <Text style={styles.title}>Question</Text>
                    <TextInput
                        style={styles.txtField}
                        onChangeText={(question) => this.setState({question})}
                        value={this.state.question}/>
                    <Text style={styles.title}>Answer</Text>
                    <TextInput
                        style={styles.txtField}
                        onChangeText={(answer) => this.setState({answer})}
                        value={this.state.answer}/>
                    <TouchableOpacity style={styles.blackBtn} onPress={() => this.addCard()}>
                        <Text style={styles.whiteTxt}>
                            Add Card
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default NewCard