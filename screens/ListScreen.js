import React, {Component} from 'react';
import {
    FlatList,
    View,
} from 'react-native';
import SubjectItem from "../components/SubjectItem"

class ListScreen extends Component {

    static navigationOptions = {
        title: 'Thèmes'
    };

    constructor(props) {
        super(props);
        this.state = {
            subjects: [],
        };
    }
    componentDidMount() {
        this.fetchSubjects();
    }

    fetchSubjects() {
        console.log(process.env.API_URL);
        fetch(process.env.API_URL + '/subjects')
            .then(response => response.json())
            .then(subjects => this.setState({ subjects: subjects }))
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.subjects}
                    renderItem={({ item }) => <SubjectItem title={item.title} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
};

export default ListScreen;