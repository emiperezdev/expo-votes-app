import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';
import { Link } from 'expo-router';

export default function IneTab() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ine Capture</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Link href={`/CameraViewPhoto?parteIne=frente`} asChild>
        <Button mode="contained">INE frente</Button>
      </Link>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Link href={`/CameraViewPhoto?parteIne=reverso`} asChild>
        <Button mode="contained">INE reverso</Button>
      </Link>
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
