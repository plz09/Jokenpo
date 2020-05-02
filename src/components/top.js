import React from 'react';
import { View, Image } from 'react-native';

const image = require('../../assets/jkpo.png');

class Top extends React.Component {
  render() {
    return (
      <View>
        <Image source={image} />
      </View>
    );
  }
}

export default Top;
