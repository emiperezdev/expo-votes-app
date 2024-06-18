import React, { useState, useRef, useCallback } from "react";
import { Button, ScrollView, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import partidos from "@/data/partidos";
import VoteCard from "@/components/VoteCard";
import { CameraView, useCameraPermissions, useMicrophonePermissions } from 'expo-camera';
import * as MediaLibrary from "expo-media-library";
import ineFotos from "@/data/ineFotos";
import { useFocusEffect } from '@react-navigation/native';
import hasVoted from "@/data/hasVoted";

export default function VoteTab() {
  const [showVoting, setShowVoting] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useCameraPermissions();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useMicrophonePermissions();
  const [facing, setFacing] = useState('front');
  const cameraRef = useRef(null);
  const [video, setVideo] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingText, setRecordingText] = useState("Record video");
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

  if (hasVoted[0].hasVoted){
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>Su voto ha sido registrado</Text>
      </View>
    );
  }

  if (!hasCameraPermission || !hasMicrophonePermission) {
    // Los permisos de la cámara o el micrófono están aún cargándose.
    return <View />;
  }

  if (!hasCameraPermission.granted) {
    // Los permisos de la cámara no están concedidos aún.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={setHasCameraPermission} title="Grant Camera permission" />
      </View>
    );
  }

  if (!hasMicrophonePermission.granted) {
    // Los permisos del micrófono no están concedidos aún.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to record audio</Text>
        <Button onPress={setHasMicrophonePermission} title="Grant Microphone permission" />
      </View>
    );
  }

  function startOrStopVideo(){
    if (!isRecording){
      takeVideo();
      setRecordingText("Stop recording");
    } else {
      stopVideo();
      setRecordingText("Record video");
    }
  }

  async function takeVideo() {
    if (cameraRef.current) {
      setIsRecording(true);
      /*const options = { maxDuration: 5 };
      const videoData = await cameraRef.current.recordAsync(options);*/
      const videoData = await cameraRef.current.recordAsync();
      setVideo(videoData.uri);
      saveVideo(videoData.uri);
    }
  }

  function stopVideo() {
    if (cameraRef.current) {
      setIsRecording(false);
      cameraRef.current.stopRecording();
    }
  }

  async function saveVideo(uri: string) {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status === "granted") {
        await MediaLibrary.saveToLibraryAsync(uri);        
        Alert.alert("Video guardado", `El video se guardó exitosamente`);
      }
    } catch (error) {
      Alert.alert("Error", `Ocurrió un error al guardar el video ${error}`);
    }
  }

  const handleStartVoting = () => {
    if (ineFotos[0].frente && ineFotos[0].reverso){
      setShowVoting(true);
      startOrStopVideo();
    } else if (!ineFotos[0].frente){
      Alert.alert("Por favor tome una foto del frente de su identificación antes de votar");
    } else if (!ineFotos[0].reverso){
      Alert.alert("Por favor tome una foto del reverso de su identificación antes de votar");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {isCameraActive && (
          <CameraView style={styles.camera} ref={cameraRef} mode="video" facing={facing}>
            <View style={styles.buttonContainer}>
            </View>
          </CameraView>
        )}
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        {!showVoting && (
          <Button onPress={handleStartVoting} title="Start Voting">
          </Button>
        )}
        {showVoting && (
          partidos.map((partido) => (
            <VoteCard
              key={partido.id}
              partidoName={partido.title}
              candidateName={partido.name}
              votes={partido.votos}
              onVote={stopVideo}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  camera: {
    flex: 1,
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
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 140
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
