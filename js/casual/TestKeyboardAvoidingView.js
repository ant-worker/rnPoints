import React from 'react';

import {
    StyleSheet,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView
} from 'react-native';

const styles = StyleSheet.create({
    view: {
        padding: 20,
        flex: 1,
        justifyContent: 'center'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    label: {
        fontFamily: 'helvetica neue',
        fontSize: 18
    },
    input: {
        backgroundColor: '#ddd',
        height: 30,
        fontSize: 18
    }
});

function TestKeyboardAvoidingView() {
    return (
        <KeyboardAvoidingView style={styles.view} behavior="padding">
            <View style={styles.inputContainer}>
                <Text style={styles.label}>
                    Some label
                </Text>

                <TextInput style={styles.input} />
            </View>
        </KeyboardAvoidingView>
    );
}

export default TestKeyboardAvoidingView;
