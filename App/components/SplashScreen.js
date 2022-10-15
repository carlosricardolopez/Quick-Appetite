import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Splash = () =>  {
  return (
    <View style={styles.fondo}>
    <Image style={styles.imagen} source={require('../Imagenes/fondo.jpg')} />
    <View style={styles.nombre}>

      <Text style={styles.nombre1}>Quick</Text>
      <Text style={styles.nombre2}>-app</Text>
      <Text style={styles.nombre3}>etite</Text>

    </View>
    </View>
  );
};

export default Splash;

//

const styles = StyleSheet.create({
  fondo:{
    width: '100%',
    height: '95%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen:{
    width: '100%',
    height: '100%',
  },
  nombre:{
    position: 'absolute',
    flexDirection: 'row',
  },
    nombre1:{
    fontSize: 35,
    fontWeight: 'bold',
    color: 'red',
    textShadowColor: 'black',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 20,
  },
    nombre2:{
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 20,
  },
    nombre3:{
    fontSize: 35,
    fontWeight: 'bold',
    color: 'red',
    textShadowColor: 'black',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 20,
  },
});