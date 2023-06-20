import { TouchableOpacity, View, Text,  Image } from "react-native";

const MusicCard = ({ album }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => alert("hola")}>
        <View View style={styles.item}>
          <Text style={styles.title}>{album}</Text>
          <Image source={{image: item.image}} resizeMode="contain"/>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MusicCard;
