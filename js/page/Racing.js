import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';
import MainTab from '../common/MainTab'
export default class Racing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
    }

    render() {
    return (
            <View style={{height:500}}>
                <MainTab></MainTab>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳回去</Text>
                </TouchableOpacity>
            </View>
    );
    }
}