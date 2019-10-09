import React, { Component } from 'react';
import { View, Button } from "react-native";

class SubjectItem extends Component {
    render() {
        let button = <Button onPress={() => this.props.onClick()} title={this.props.title} />;
        return (
            <View>
                {button}
            </View>
        );
    }
}
export default SubjectItem;