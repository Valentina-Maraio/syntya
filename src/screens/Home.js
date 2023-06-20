import * as React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import { musicJSON } from "../json/musicJSON.json";
import MusicCard from "../components/MusicCard";

const Item = ({ album }) => {
  return (
    <View>
      <MusicCard props={album} />
    </View>
  );
};

export default function Home({ navigation}) {
  const renderItem = ({ item }) => <Item name={item.album} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        key={"_"}
        data={musicJSON}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('MusicDetails')}
            style={styles.item}
          >
            <Text style={styles.testo}>
              {item.title} - {item.album}
            </Text>
          </Pressable>
        )}
        keyExtractor={(item) => "_" + item.rank}
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
    height: 150,
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 30,
  },
  title: {
    fontSize: 32,
  },
});
