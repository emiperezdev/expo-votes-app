import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import partidos from "@/data/partidos";
import { Card } from "react-native-paper";

const CandidateDetails = () => {
  const { name } = useLocalSearchParams();
  if (!name) return <Text>Partido no existente</Text>;

  const partido = partidos.find((p) => p.title === name);
  if (!partido) return <Text>Partido no existente</Text>;

  console.log("Partido: " + partido);

  return (
    <Card style={styles.card}>
      <View style={styles.grid}>
        <Text style={styles.title}>{partido.title}</Text>
        <FlatList
          data={partido.propuestas}
          renderItem={({ item, index }) => (
            <Text style={styles.propuesta}>
              {index + 1} : {item}
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <Text style={styles.subtitle}>{partido.name}</Text>
        <Text style={styles.subtitle}>{"Votos: " + partido.votos}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
  },
  grid: {
    flexDirection: "column",
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 35,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  propuesta: {
    fontSize: 18,
    marginBottom: 15,
  },
});

export default CandidateDetails;
