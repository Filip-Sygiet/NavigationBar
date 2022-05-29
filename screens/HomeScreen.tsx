import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({navigation}) =>{
    return(
        <View style={style.container}>
            <Text> Home Screen</Text>
            <Button
            title="Click here"
            onPress={() =>alert('Button Clicked!')}
            />
        </View> 
    );
};
export default HomeScreen;

const style = StyleSheet.create({
container: {
    fles: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'

},
});

