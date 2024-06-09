import { ScrollView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import partidos from "@/data/partidos";
import VoteCard from "@/components/VoteCard";

export default function VoteTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vote for a candidate</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView>
        {partidos.map((partido) => (
          <VoteCard
            key={partido.id}
            partidoName={partido.title}
            candidateName={partido.name}
          />
        ))}
      </ScrollView>
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
});
