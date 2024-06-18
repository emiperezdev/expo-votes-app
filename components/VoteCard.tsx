import partidos from '@/data/partidos';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';
import hasVoted from "@/data/hasVoted";

interface Props {
  partidoName: string;
  candidateName: string;
  votes: number;
  onVote: () => void;
}

const VoteCard: React.FC<Props> = ({ partidoName, candidateName, votes, onVote }) => {
  const [currentVotes, setCurrentVotes] = useState(votes);

  const handleVote = () => {
    const partidoIndex = partidos.findIndex(partido => partido.name === candidateName);
    if (partidoIndex !== -1) {
      partidos[partidoIndex].votos += 1;
      setCurrentVotes(partidos[partidoIndex].votos);
    }

    hasVoted[0].hasVoted = true;
    onVote();
  };

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
          <Title style={styles.title}>Votos: {currentVotes}</Title>
        </View>
        <View style={styles.buttonRow}>
          <Button mode="contained" style={styles.button} onPress={handleVote}>
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
