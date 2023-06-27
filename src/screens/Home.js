import * as React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  Row,
  Col,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import MusicCard from "../components/MusicCard";
import { musicSlice } from "../redux/slices/musicSlice";

const Item = ({ album }) => {
  return (
    <View>
      <MusicCard props={album} />
    </View>
  );
};

export default function Home({ navigation }) {
  const renderItem = ({ item }) => <Item name={item.album} />;
  const dispatch = useDispatch();
  const music = useSelector((state) => state.music.music);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        key={"_"}
        data={music}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              dispatch(musicSlice.actions.setChosenSong(item.rank));
              console.log(item.rank);
              console.log(item.title);
              console.log("Titulo de la cancion: " + item.title);
              navigation.navigate("MusicDetails");
            }}
            style={styles.item}
          >
            <View style={styles.box}>
              <View style={styles.content_box}>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.title}>Title: {item.title}</Text>
                <Text>Almun: - {item.album}</Text>
              </View>
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  item: {
    backgroundColor: "#e9f2f0",
    height: "auto",
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 30,
  },
  title: {
    fontSize: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  box: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  content_box: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
