import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import partidos from "@/data/partidos";
import VoteCard from "@/components/VoteCard";
import { Button } from "react-native-paper";

export default function VoteTab() {
  const [showVoting, setShowVoting] = useState(false);

  const handleStartVoting = () => {
    setShowVoting(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vote for a candidate</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {!showVoting && (
        <Button mode="contained" style={styles.button} onPress={handleStartVoting}>
          START VOTING
        </Button>
      )}
      {showVoting && (
        <ScrollView>
          {partidos.map((partido) => (
            <VoteCard
              key={partido.id}
              partidoName={partido.title}
              candidateName={partido.name}
              votes={partido.votos}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "100%",
  },
  button: {
    marginBottom: 10,
  },
});
