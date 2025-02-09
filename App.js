import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/home/Home';
import Input from './src/Input/Input';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign  from 'react-native-vector-icons/AntDesign'

// const Stack = createNativeStackNavigator();
// const StackNavigator = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName='Home'
//       screenOptions={{
//         headerShown:false
//       }}
//     >
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Input" component={Input} />
//     </Stack.Navigator>
//   )
// }

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#212121",
        },
        headerStyle: {
          backgroundColor: "#212121",
        },
        headerTitleStyle: {
          color: "white"
        },
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name='Instagram'
        component={Home}
        options={{
          headerTitle: "Instagram",
          tabBarIcon: ({color})=>(
            <AntDesign name="instagram" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Input'
        component={Input}
        options={{
          headerTitle: "User Input",
          tabBarIcon: ({color})=>(
            <AntDesign name="form" size={24} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  )
}

export default App