import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';

interface Props {
  partidoName: string;
  candidateName: string;
  votes: number;
}

const VoteCard: React.FC<Props> = ({ partidoName, candidateName, votes }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.titleContainer}>
          <Title style={styles.title}>{partidoName}</Title>
        </View>
        <View style={styles.titleContainer}>
          <Title style={styles.title}>{candidateName}</Title>
        </View>
        <View style={styles.titleContainer}>
          <Title style={styles.title}>Votos: {votes}</Title>
        </View>
        <View style={styles.buttonRow}>
          <Button mode="contained" style={styles.button}>
            VOTAR
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button: {
    marginHorizontal: 5,
  },
});

export default VoteCard;
