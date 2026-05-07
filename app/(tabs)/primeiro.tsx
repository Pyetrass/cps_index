import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Primeiro</Text>

      <Image
        source={require("../../assets/images/logo-cps.jpg")}
        style={styles.logo}
      />

      <View style={styles.box}>
        <Text style={styles.text}>Auxíliar técnico em informática para internet</Text>
        
      </View>

      <Image
        source={require("../../assets/images/imagem.jpg")}
        style={styles.image}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingTop: 70,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#111",
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  box: {
    width: "80%",
    backgroundColor: "#8b13c2",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    marginBottom: 40,

    elevation: 5,
  },

  text: {
    fontSize: 28,
    fontWeight: "600",
  },

  image: {
    width: 220,
    height: 220,
    borderRadius: 20,
  },
});
