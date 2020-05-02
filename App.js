import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';

import Top from './src/components/top';
import Icon from './src/components/icon';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerMove: '',
      pcMove: '',
      outcome: '',
    };
  }

  jokenpo(playerMove) {
    const randonNum = Math.floor(Math.random() * 3);

    let pcMove = '';

    switch (randonNum) {
      case 0:
        pcMove = 'Rock';
        break;
      case 1:
        pcMove = 'Paper';
        break;
      case 2:
        pcMove = 'Scissors';
        break;
      default: pcMove = '';
    }

    let outcome = '';

    if (pcMove === 'Rock') {
      if (playerMove === 'Rock') {
        outcome = 'Draw';
      }

      if (playerMove === 'Paper') {
        outcome = 'You Won';
      }

      if (playerMove === 'Scissors') {
        outcome = 'You Lose';
      }
    }

    if (pcMove === 'Paper') {
      if (playerMove === 'Paper') {
        outcome = 'Draw';
      }

      if (playerMove === 'Scissors') {
        outcome = 'You Won';
      }

      if (playerMove === 'Rock') {
        outcome = 'You Lose';
      }
    }

    if (pcMove === 'Scissors') {
      if (playerMove === 'Scissors') {
        outcome = 'Draw';
      }

      if (playerMove === 'Rock') {
        outcome = 'You Won';
      }

      if (playerMove === 'Paper') {
        outcome = 'You Lose';
      }
    }

    this.setState({
      playerMove,
      pcMove,
      outcome,
    });
  }

  render() {
    return (
      <View>

        <Top />

        <View style={styles.actionPainel}>

          <View style={styles.bttn}>
            <Button title="Rock" onPress={() => { this.jokenpo('Rock'); }} />
          </View>

          <View style={styles.bttn}>
            <Button title="Paper" onPress={() => { this.jokenpo('Paper'); }} />
          </View>

          <View style={styles.bttn}>
            <Button title="Scissors" onPress={() => { this.jokenpo('Scissors'); }} />
          </View>

        </View>

        <View style={styles.stage}>

          <Text style={styles.txtOutcome}>{this.state.outcome}</Text>

          <Icon move={this.state.pcMove} player="PC" />
          <Icon move={this.state.playerMove} player="Your Move" />


        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  bttn: {
    width: 90,
  },
  actionPainel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  stage: {
    alignItems: 'center',
    marginTop: 10,
  },
  txtOutcome: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60,
  },
});
