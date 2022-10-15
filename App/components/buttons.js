import React from 'react'
import { Text, TouchableOpacity, StyleSheet} from 'react-native'

export function Boton1(){
  return(
    <TouchableOpacity style={{...styles.boton, backgroundColor:'black'}}>
      <Text style={{...styles.text,color:'white'}}>
        COMER AQUI
      </Text>
    </TouchableOpacity>
)}

export function Boton2(){
  return(
    <TouchableOpacity style={{...styles.boton2, backgroundColor:'white'}}>
      <Text style={{...styles.text, color:'black'}}>
        PARA LLEVAR
      </Text>
    </TouchableOpacity>
)}

const styles= StyleSheet.create({
  boton:{
    alignSelf:'center',
    paddingVertical:15,
    marginVertical:180,
    borderRadius:15,
    width:'90%'
  },
  boton2:{
    alignSelf:'center',
    paddingVertical:15,
    marginVertical:50,
    borderRadius:15,
    width:'90%'  
  },
  text:{
    textAlign:'center' 
  },
});