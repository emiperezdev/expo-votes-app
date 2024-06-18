import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef, useCallback } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import * as MediaLibrary from "expo-media-library";
import ineFotos from '@/data/ineFotos';
import { useLocalSearchParams } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';

const CameraViewPhoto = () => {
  const [hasCameraPermission, setHasCameraPermission] = useCameraPermissions();
  const [facing, setFacing] = useState('back');
  const cameraRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const { parteIne } = useLocalSearchParams();
  const [isCameraActive, setIsCameraActive] = useState(false);

  useFocusEffect(
    useCallback(() => {
      // Monta la cámara cuando la pantalla está enfocada
      setIsCameraActive(true);

      return () => {
        // Desmonta la cámara cuando la pantalla pierde el foco
        setIsCameraActive(false);
      };
    }, [])
  );

  if (!hasCameraPermission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!hasCameraPermission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={setHasCameraPermission} title="Grant Camera permission" />
      </View>
    );
  }

  async function takePhoto() {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const photoData = await cameraRef.current.takePictureAsync(options);
      setPhoto(photoData.uri);
      savePhoto(photoData.uri);
    }
  }

  async function savePhoto(uri: string) {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status === "granted") {
        await MediaLibrary.saveToLibraryAsync(uri);

        if (parteIne == "frente") {
          ineFotos[0].frente = true;
        }

        if (parteIne == "reverso") {
          ineFotos[0].reverso = true;
        }

        Alert.alert("Foto guardada", `La foto se guardó exitosamente`);
      }
    } catch (error) {
      Alert.alert("Error", `Ocurrió un error al guardar la foto ${error}`);
    }
  }

  return (
    <View style={styles.container}>
      {isCameraActive && (
        <CameraView style={styles.camera} ref={cameraRef} mode="picture" facing={facing}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={takePhoto}>
              <Text style={styles.text}>Take photo</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
      {photo && <Image source={{ uri: photo }} style={{ flex: 1 }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CameraViewPhoto;
