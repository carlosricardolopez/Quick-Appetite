import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const M3 = () =>  {
  return (
    <View style={styles.fondo}>
    <Image style={styles.imagen} source={require('../Imagenes/j2.jpg')} />
    <View style={styles.nombre}>

      <Text style={styles.nombre1}>!GRACIAS</Text>
      <Text style={styles.nombre2}>POR</Text>
      <Text style={styles.nombre3}>PREFERIRNOS!</Text>

    </View>
    </View>
  );
};

export default M3;

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
   marginLeft:-30,
   marginTop:-15,
  },
    nombre2:{
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 20,
    marginLeft:-115,
    marginTop:35,
  },
    nombre3:{
    fontSize: 35,
    fontWeight: 'bold',
    color: 'red',
    textShadowColor: 'black',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 20,
    marginTop:85,
    marginLeft:-115,
  },
});