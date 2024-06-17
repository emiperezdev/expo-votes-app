import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';

export default function IneTab() {

  const [takePhoto, setTakePhoto] = useState(false);

  const handleTakePhoto = () => {
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ine Capture</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button mode="contained" onPress={handleTakePhoto}>INE frente</Button>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button mode="contained" onPress={handleTakePhoto}>INE reverso</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
});
