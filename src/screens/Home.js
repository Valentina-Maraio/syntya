import * as React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import {useSelector, useDispatch} from 'react-redux';
import MusicCard from "../components/MusicCard";
import { musicSlice } from "../redux/slices/musicSlice";

const Item = ({ album }) => {
  return (
    <View>
      <MusicCard props={album} />
    </View>
  );
};

export default function Home({ navigation}) { 
  const renderItem = ({ item }) => <Item name={item.album} />;
  const dispatch = useDispatch() ;
  const music = useSelector((state) => state.music.music)
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        key={"_"}
        data={music}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              dispatch(musicSlice.actions.setChosenSong(item.rank));
              console.log(item.rank)
              console.log(item.title)
              alert('Titulo de la cancion: ' + item.title)
              navigation.navigate('MusicDetails')
            }}
            style={styles.item}
          >
            <Image
            source={{ uri: item.image}}
            />
            <Text style={styles.title}>
             Title:  {item.title}
            </Text>
            <Text>
              Almun: - {item.album} 
            </Text>
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
  },
  item: {
    backgroundColor: "#e6d3e8",
    height: 100,
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 30,
  },
  title: {
    fontSize: 20,
  },
});
