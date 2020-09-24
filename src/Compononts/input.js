import React from 'react';
import {TextInput, Dimensions} from 'react-native';

const {width , height}= Dimensions.get('window')

const Input = (props) => (
    
    <TextInput
        placeholder= {props.placeholder}
        secureTextEntry={props.secureTextEntry}
        keyboardType= {props.keyboardType}
        value={props.value}   
        onChangeText={(value) => props.onChangeText(value)}
        style={{ 
            width: width*0.92,
            height: height*0.08, 
            borderRadius: 8 ,
            backgroundColor:'#e3dfde',
            borderColor: 'gray',
            padding: 10,
            marginTop:0.1,
            marginBottom: height*0.02,
            borderWidth: 2

        }}
    />
    
);
export default Input;