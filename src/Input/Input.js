import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './AppStyle'
import ThemedText from '../../component/ThemedText'

const Input = ({navigation}) => {
    const [text, settext] = useState('')
    return (
        <View style={styles.container}>
            <Pressable style={{ backgroundColor: "black",marginBottom:20,borderRadius:10}} onPress={() => navigation.navigate("Instagram")}>
                <ThemedText color='white' style={{ width:100,paddingBlock: 15, alignItems: "center", justifyContent: "center", textAlign: "center" }}>Input</ThemedText>
            </Pressable>
            <Text>Hello what up ready for to take value from user ??</Text>
            <TextInput
                keyboardType='text'
                placeholder='Enter your name'
                style={styles.input}
                value={text}
                onChangeText={(e) => settext(e)}
            />
            {text && <Text>{text}</Text>}
        </View>
    )
}

export default Input