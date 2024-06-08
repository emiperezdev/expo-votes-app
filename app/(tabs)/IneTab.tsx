import { Button, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library'

import { Text, View } from '@/components/Themed';
import { useEffect, useRef, useState } from 'react';

export default function IneTab() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibrarryPermission = await MediaLibrary.requestPermissionsAsync;
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibrarryPermission.status === 'granted');
    })
  }, []);

  if (hasCameraPermission === undefined)
    return <Text>Requesting permissions...</Text>
  else if (!hasCameraPermission)
    return <Text>Permission for camera not granted. Please change this in settings.</Text>

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ine Capture</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View>
        <Button title='Take picture' onPress={takePic} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  separator: {
    alignItems: 'center',
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end'
  }
});
