import React from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import { Component } from 'react';
import SubjectItem from '../components/SubjectItem';

class HomeScreen extends Component {
  
  static navigationOptions = {
    title: 'QCM',
    headerStyle: { backgroundColor: '#4ba2ed' },
    headerTitleStyle: { color: '#0a0b0b' },
    
  };
 
  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
      title: '',
    };
  }
  componentDidMount() {
    this.fetchSubjects();
  }
  
  fetchSubjects() {
    fetch(process.env.API_URL + '/subjects')
      .then(response => response.json())
      .then(subjects => this.setState({ subjects: subjects }));
  }
  render() {
    return (
      <SafeAreaView>
      <FlatList
        data={this.state.subjects}
        renderItem={({ item }) => <SubjectItem title={item.title} count={item.questions.length} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
    );
  }
  
};
export default HomeScreen;