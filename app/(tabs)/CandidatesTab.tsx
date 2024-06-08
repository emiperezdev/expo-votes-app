import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import PartidoCard from '@/components/PartidoCard';
import partidos from '@/data/partidos';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {partidos.map((partido) => (
           <PartidoCard
           key={partido.id}
           partidoName={partido.title}
           image="https://i.pinimg.com/originals/05/5a/91/055a91979264664a1ee12b9453610d82.png"
           candidateName={partido.name}
           votes={partido.votos}
         />
        ))}
      </ScrollView>
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
