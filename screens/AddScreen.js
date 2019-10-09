import React, {Component} from 'react';
import {Button, TextInput, View, Switch} from "react-native";

class AddScreen extends Component {

    static navigationOptions = {
        title: 'Proposer'
    };

    toggleSwitch = (value) => {
        this.setState({switchValue: value})
    };

    constructor(props) {
        super(props);
        this.state = {
        question: [],
        title: '',
        answer: '',
        switchValue:false
        };
    }

    saveQuestion() {
        const method = this.props.subject ? 'PUT' : 'POST';
        let url = process.env.API_URL + '/subjects';
        if (this.props.subject) {
        url += '/' + this.props.subject._id;
        }
        fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: this.state.title, isValid: false, answer:[{title: this.state.title, isValid: this.state.isValid}] })
        })
        .then(response => response.json())
        .then(data => {
            if (typeof this.props.onSave === 'function') {
            this.props.onSave(data);
            }
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
        <View>
            <TextInput value={this.state.title} onChangeText={text => this.setState({ title: text })} placeholder={'Votre question ici.'}/>
            <View>
                <Switch value = {this.state.switchValue} onValueChange = {this.toggleSwitch} />
                <TextInput value={this.state.title} onChangeText={text => this.setState({ title: text })} placeholder={'Votre réponse ici.'}/>
            </View>
            <Button onPress={() => this.saveQuestion()} title='Enregistrer'/>
        </View>
        );
    }
}

export default AddScreen;

/*import React from 'react';
import { ScrollView, StyleSheet, Text, Button, Switch} from 'react-native';
import {Component} from 'react';
import TextInput from "../kitui/TextInput";
​
class LinksScreen extends Component {
​
    static navigationOptions = {
        title: 'Proposer',
    };
    ​
    constructor(props) {
        super(props);
        this.state = {
        question: [],
        title: '',
        answer: '',
        };
    }
    ​
    addQuestion() {
        const question =  { title: this.state.title, answer: this.state.answer, subject: this.state.subject };
        this.setState({
        question: [...this.state.question, question]
        })};
    ​
        render() {
        console.log('render Linkscreen')
        return (
        <ScrollView>
        {<Text>Ajouter une question</Text>}
        {<Text>Menu déroulant sujet</Text>}
        <TextInput onChangeText={text => this.setState({ title: text })}
                        value={this.state.title}
                        placeholder='Question'/>
        <Switch/><TextInput onChangeText={text => this.setState({ answer: text })}
                        value={this.state.answer.toString()}placeholder='Réponse 1'/>
        <Switch/><TextInput onChangeText={text => this.setState({ answer: text })}
                        value={this.state.answer.toString()}placeholder='Réponse 2'/>
        <Switch/><TextInput onChangeText={text => this.setState({ answer: text })}
                        value={this.state.answer.toString()}placeholder='Réponse 3'/>
    ​
        <Button onPress={() => this.addQuestion()} title='Ajouter une question'/>
        </ScrollView>
        );
    }
}
​
export default LinksScreen;*/