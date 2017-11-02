import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    blackBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderColor: 'black',
        width: 150,
        margin: 5,
        borderWidth: 1,
        borderRadius: 3,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
    whiteBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        width: 150,
        margin: 5,
        borderWidth: 1,
        borderRadius: 3,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
    whiteTxt: {
        fontSize: 20,
        color: 'white',
    },
    blackTxt: {
        fontSize: 20,
        color: 'black',
    },
  });
  
export default styles