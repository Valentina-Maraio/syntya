import { Text, View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import music from "../data/music";

export default function MusicDetails() {
  const song = useSelector((state) => state.music.chosenSong);
  return (
    <View style={styles.container}>
      <Text>Deberia monstrar el nombre de la cancion selecionada pero solo sale en la consola</Text>
      <FlatList
        data={song}
        renderItem={({ item }) => {
          <View style={styles.box}>
            <Text style={styles.title}>{item.title}</Text>
          </View>;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "black",
  },
  box: {
    paddingTop: 60,
    color: "black",
  },
  title: {
    fontSize: 32,
  },
});
