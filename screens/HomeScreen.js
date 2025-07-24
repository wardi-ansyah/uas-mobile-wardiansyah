import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import axios from "axios";

const API_KEY = "D0aMNm0DhdATRsVVXY4ULJLxIW5vEkx7FBcrlOL7";

export default function HomeScreen({ navigation }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const fetchSounds = async (q = "music") => {
    try {
      const res = await axios.get("https://freesound.org/apiv2/search/text/", {
        params: {
          query: q,
          fields: "id,name,previews,username",
          token: API_KEY,
        },
      });
      setResults(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSounds();
  }, []);

  return (
    <View style={{ padding: 20, marginTop: 40 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>🎧 Lagu Terbaru</Text>
      <TextInput
        placeholder="Cari lagu..."
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={() => fetchSounds(query)}
        style={{
          borderWidth: 1,
          padding: 8,
          marginVertical: 10,
          borderRadius: 5,
        }}
      />

      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail", { sound: item })}
            style={{ paddingVertical: 10, borderBottomWidth: 0.5 }}
          >
            <Text>{item.name}</Text>
            <Text style={{ color: "gray" }}>by {item.username}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
