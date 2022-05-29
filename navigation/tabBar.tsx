import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Image, View, Touchable, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import RackScreen from '../screens/RackScreen';
import ScanScreen from '../screens/ScanScreen';
import SearchScreen from '../screens/SearchScreen';
import UserScreen from '../screens/UserScreen';



const Tab = createBottomTabNavigator();

const CustoScamButton = ({children, onPress}) => (
    <TouchableOpacity
    style={{
        top: -6,
        justifyContent: 'center',
        alignItems: 'center',
    }}
    onPress={onPress}
    >
        <View style={{
            width: 83,
            height: 83,
            borderRadius: 9,
            backgroundColor: '#F5F7FE'
        }}>

        </View>
<View>
{children}
</View>

    </TouchableOpacity>
);

const Tabs = () => {
    return (
<Tab.Navigator 
tabBarOptions={{
    showlabel: false,
    style: {
    position: 'absolute',
    botton: 25,
    left: 20,
    right: 20,
    evolition:0,
    backgroudColor: '#32334D',
    borderRadius: 15,
    height: 0,
}
}}
>
    
    <Tab.Screen name="Home"  component={HomeScreen} options={{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 3.75 }}>
                <Image 
                source={require('../assets/Home.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 21.25,
                }}
                />
                <Text> Home </Text>
            </View>
        ),
    }} />
    <Tab.Screen name="Rack"  component={RackScreen}
    options={{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 5 }}>
                <Image 
                source={require('../assets/Rack.png')}
                resizeMode='contain'
                style={{
                    width: 20,
                    height: 20,
                }}
                />
                <Text> Rack </Text>
            </View>
        )
    }} />
    <Tab.Screen name="Scan"  component={ScanScreen} 
    options={{
        tabBarIcon: ({focused}) =>(
            <Image
              source={require('../assets/Scan.png')}
              resizeMode= "contain"
              style={{
                  width: 20,
                  height: 20,
                  
              }}

            />
        ),
        tabBarButton: (props) =>(
            <CustoScamButton {...props} />
        )
    }}
    />
    <Tab.Screen name="Search"  component={SearchScreen}
    options={{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 3.75 }}>
                <Image 
                source={require('../assets/Search.png')}
                resizeMode='contain'
                style={{
                    width: 21.86,
                    height: 21.86,
                }}
                />
                <Text> Search </Text>
            </View>
        ),
    }} />
    <Tab.Screen name="User"  component={UserScreen}
    options={{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 2.5 }}>
                <Image 
                source={require('../assets/Users.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                }}
                />
                <Text> Users </Text>
            </View>
        ),
    }} />
    
</Tab.Navigator>
    );
} 

export default Tabs;