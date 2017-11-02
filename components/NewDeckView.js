import React, { Component } from 'react';
import { Text, TextInput, View, FlatList, Platform } from 'react-native';
import styles from '../utils/styles'


class NewDeck extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Deck Title' };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>New Deck</Text>
                <TextInput
                    style={{maxHeight: 40, margin: 10, width: 250, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}/>
            </View>
        );
    }
}
export default NewDeck