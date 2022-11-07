import * as React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import fondos from '../Imagenes/j1.jpg';

const Pay = () =>  {
  return (
    <ImageBackground source={fondos} style={styles.fondo}>
     
    <View>
    <Image  style={styles.caja} source={require('../Imagenes/Efectivo.png')} />
    <Image  style={styles.caja2} source={require('../Imagenes/Tarjeta.png')} />
    </View>
    </ImageBackground>
  );
};

export default Pay;

const styles = StyleSheet.create({
  container: {
    height: '95%',
    width: '100%',
  },
  caja: {
    marginTop: -30,
    height: 200,
    width: 250,
    marginLeft: 5,
    borderRadius: 50,
  },
   caja2: {
    marginTop: 100,
    height: 200,
    width: 250,
    marginLeft: 5,
    borderRadius: 50,
  },
  imagen:{
    width: '100%',
    height: '100%',
  },
 fondo:{
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

