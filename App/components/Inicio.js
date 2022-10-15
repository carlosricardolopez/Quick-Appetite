import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground,} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import fondos from '../Slider/fondo.jpg';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../Slider/1.0.png'),
        require('../Slider/2.0.png'),
        require('../Slider/3.0.png'),
        require('../Slider/4.0.png'),
        require('../Slider/5.png'),
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={fondos} style={styles.fondo}>
          <SliderBox style={styles.caja} images={this.state.images} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '95%',
    width: '100%',
  },
  caja: {
    marginTop: 100,
    height: 400,
    width: 350,
    marginLeft: 7,
    borderRadius: 50,
  },
  fondo: {
    flex: 1,
  },
});
