import { View, Text, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.profile}>Profile details</Text>
      <Text style={styles.profile}>Username: Valentina</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profile: {
    fontSize: 20,
  },
});
