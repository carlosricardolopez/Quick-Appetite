import React from 'react';
import { StyleSheet, ImageBackground} from 'react-native'
import fondos from '../Slider/fondos.png';
function Sub(){
  return(
    <ImageBackground source={fondos} style={styles.fondo}>
     
      </ImageBackground>
);
}
export default Sub;

const styles = StyleSheet.create({
  fondo:{
  flex:1,
  height:1000,
  width:-1000,
  marginLeft:-1000,

  },
});
