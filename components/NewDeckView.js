import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, Platform } from 'react-native';
import styles from '../utils/styles'


class NewDeck extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Deck Title' };
    }
    render() {
        return (
            <View style={styles.containerTop}>
                <Text style={styles.bigTitle}>New Deck</Text>
                <TextInput
                    style={styles.txtField}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}/>
                <TouchableOpacity style={styles.blackBtn} onPress={() => this.props.navigation.navigate('NewCard', { deckId })}>
                    <Text style={styles.whiteTxt}>
                        Add Deck
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default NewDeck