import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ThemedText = ({ children, color = "white" ,style }) => {
    return (
        <Text style={[style,  {color}] }>{children}</Text>
    )
}

export default ThemedText