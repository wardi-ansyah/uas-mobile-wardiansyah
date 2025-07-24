import { Audio } from "expo-av";
import React from "react";
import { View, Text, Button } from "react-native";

export default function DetailScreen({ route, navigation }) {
  const { sound } = route.params;

  const playAudio = async () => {
    const { sound: playback } = await Audio.Sound.createAsync(
      { uri: sound.previews["preview-lq-mp3"] },
      { shouldPlay: true }
    );
  };

  return (
    <View style={{ padding: 20, marginTop: 40 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{sound.name}</Text>
      <Text style={{ color: "gray", marginBottom: 10 }}>
        by {sound.username}
      </Text>
      <Button title="Putar Lagu" onPress={playAudio} />
    </View>
  );
}
