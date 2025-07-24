import React from "react";
import { View, Text } from "react-native";

export default function ContactScreen() {
  return (
    <View style={{ padding: 20, marginTop: 40 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Tentang Developer
      </Text>
      <Text style={{ marginTop: 10 }}>
        Aplikasi ini dibuat oleh Wardiansyah. Mahasiswa Teknologi Informasi
        Universitas Annuqayah Semester VI.
      </Text>
      <Text style={{ marginTop: 20 }}>
        Aplikasi diajukan sebagai Ujian Akhir Semester.
      </Text>
      <Text>Materi : Pemrograman Perangkat Bergerak</Text>
    </View>
  );
}
