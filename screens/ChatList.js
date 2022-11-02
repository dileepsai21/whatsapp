import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native'

const ChatList = props => {
    return <View style={styles.container}>
        <Text>Chat List Screen</Text>
        <Button title="Go to Settings" onPress={() => { props.navigation.navigate("ChatSettings") }}></Button>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})