import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

interface Props {
  partidoName: string;
  image: string;
  candidateName: string;
  votes: number
}

const PartidoCard: React.FC<Props> = ({ partidoName, image, candidateName, votes }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.titleContainer}>
          <Title style={styles.title}>{partidoName}</Title>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <Paragraph style={styles.paragraph}>{candidateName}</Paragraph>
        <View style={styles.buttonRow}>
          <Button mode="contained" onPress={() => console.log('Button 1 pressed')} style={styles.button}>
            DETALLES
          </Button>
        </View>
        <Paragraph style={styles.paragraph}>Votos: {votes}</Paragraph>
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
  },
  title: {
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  paragraph: {
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

export default PartidoCard;
