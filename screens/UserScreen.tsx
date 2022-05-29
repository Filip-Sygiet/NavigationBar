import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UserScreen = ({navigation}) =>{
    return(
        <View style={style.container}>
            <Text> User Screen</Text>
            <Button
            title="Click here"
            onPress={() =>alert('Button Clicked!')}
            />
        </View> 
    );
};
export default UserScreen;

const style = StyleSheet.create({
container: {
    fles: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'

},
});