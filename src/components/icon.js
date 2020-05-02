import React from 'react';
import {
  Text, View, Image, StyleSheet,
} from 'react-native';

const imgRock = require('../../assets/rock.png');
const imgPaper = require('../../assets/paper.png');
const imgScissors = require('../../assets/scissors.png');

class Icon extends React.Component {
  render() {
    if (this.props.move === 'Rock') {
      return (
        <View style={styles.icon}>
          <Text style={styles.txtPlayers}>{this.props.player}</Text>
          <Image source={imgRock} />
        </View>
      );
    } if (this.props.move === 'Paper') {
      return (
        <View style={styles.icon}>
          <Text style={styles.txtPlayers}>{this.props.player}</Text>
          <Image source={imgPaper} />
        </View>
      );
    } if (this.props.move === 'Scissors') {
      return (
        <View tyle={styles.icon}>
          <Text style={styles.txtPlayers}>{this.props.player}</Text>
          <Image source={imgScissors} />
        </View>
      );
    }
    return false;
  }
}

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    marginBottom: 20,

  },
  txtPlayers: {
    fontSize: 18,
  },
});

export default Icon;
