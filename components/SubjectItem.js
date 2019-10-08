import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet} from "react-native";

class SubjectItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text style={styles.question}>
                    {this.props.title}
                    {this.props.count}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,


    },
    question:{
        color: 'black',
        fontWeight: 'bold',
        fontSize:20,
        
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#6ac38c',
        paddingBottom: 10,
        marginBottom:10,
        marginTop:10,
        borderRadius:10,

    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
      
    },
    countText: {
        color: '#FF00FF'
    }
});

export default SubjectItem;