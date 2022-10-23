import { View, TextInput, Button, Text, StyleSheet } from 'react-native'
import React from 'react'

const LoginForm = () => {
  return (
    <View style = {styles.wrapper}>
        <View style = {styles.inputField}>
            <TextInput
                placeholderTextColor='#444'
                placeholder='Phone number, username or email'
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}/>
            <TextInput/>
        </View>

        <View style = {styles.inputField}>
            <TextInput
                placeholderTextColor='#444'
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
            />
            <TextInput/>
        </View>


        <Button title= 'Log In'/>
    </View>
    
  )
}

const styles = StyleSheet.create({
    inputField:{
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
    },
    wrapper: {
        marginTop: 80,
    }
})

export default LoginForm