import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ToastAndroid } from 'react-native';
import axios from 'axios';
import {IP} from './AssetExample';
import Webview from './Payment';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            purpose: null,
            amount: null,
            name: null,
            email: null
        }
    }

    processInfo() {

        if (this.state.purpose !== null && this.state.amount !== null && this.state.name !== null && this.state.email !== null) {
           const self =  this;
            axios.post(`${IP}api/makerequest`,{

                purpose: self.state.purpose,
                amount: self.state.amount,
                buyer_name: self.state.name,
                email: self.state.email,

            })
                .then(function (response) {
                   console.log(response)
                    if (response.data.statusCode === 200) {
                        ToastAndroid.show('Redirecting to payment gateway', ToastAndroid.SHORT);
                        self.props.navigation.navigate('Webview',{url:response.data.url})
                    }
                })
                .catch(function (error) {
                    console.log(JSON.stringify(error));
                    ToastAndroid.show('Error', ToastAndroid.SHORT);
                })
        } else {
            Alert.alert('All fields are needed');
        }

    } 

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Numero de tarjeta</Text>
                <TextInput style={{ width: '90%', borderColor: 'black', borderWidth: 1, marginBottom: 5 }} onChangeText={(event) => this.setState({ purpose: event })} placeholder="Numero de tarjeta"></TextInput>

<Text>Vencimiento</Text>
                <TextInput style={{ width: '90%', borderColor: 'black', borderWidth: 1, marginBottom: 5 }} onChangeText={(event) => this.setState({ purpose: event })} placeholder="Vencimiento"></TextInput>
                
                <Text>CVV</Text>
                <TextInput style={{ width: '90%', borderColor: 'black', borderWidth: 1, marginBottom: 5 }} onChangeText={(event) => this.setState({ purpose: event })} placeholder="CVV"></TextInput>

                <Text>Monto</Text>
                <TextInput style={{ width: '90%', borderColor: 'black', borderWidth: 1, marginBottom: 5 }} onChangeText={(event) => this.setState({ amount: event })} placeholder="Monto"></TextInput>

                <Text>Nombre segun tarjeta</Text>
                <TextInput style={{ width: '90%', borderColor: 'black', borderWidth: 1, marginBottom: 5 }} onChangeText={(event) => this.setState({ name: event })} placeholder="Nombre completo"></TextInput>

                <Text>Email</Text>
                <TextInput style={{ width: '90%', borderColor: 'black', borderWidth: 1, marginBottom: 5 }} onChangeText={(event) => this.setState({ email: event })} placeholder="Email"></TextInput>


               


            </View>
        );
    }
};