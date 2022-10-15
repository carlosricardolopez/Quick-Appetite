import React from 'react';
import { StyleSheet, ImageBackground} from 'react-native'
import {Boton1} from './buttons';
import {Boton2} from './buttons';
import fondo2 from '../Slider/fondo.jpg';
function Tipo(){
  return(
    <ImageBackground source={fondo2} style={styles.fondo}>
      <Boton1 />
      <Boton2 />
      </ImageBackground>
);
}
export default Tipo;

const styles = StyleSheet.create({
  fondo:{
  flex:1,
  height:705,
  },
});
