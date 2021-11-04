import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

var home = "https://www.coding-insight.com/";

const Chat = React.memo(() => <WebView source={{ uri: home + "chat.html" }} />);
const Game = React.memo(() => <WebView source={{ uri: home + "game.html" }} />);
const Header = React.memo(() => (
  <View style={styles.view}>
    <Image source={{ uri: home + "py.png" }} style={styles.image} />
    <View>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.text}>If there is a bug, press the clock button</Text>
    </View>
  </View>
));

const styles = StyleSheet.create({
  padsix: {
    padding: 6,
  },
  padten: {
    padding: 10,
  },
  flexrow: {
    flexDirection: "row",
  },
  title: {
    fontSize: 30,
  },
  text: {
    fontSize: 10,
  },
  center: {
    justifyContent: "center",
    alignContent: "center",
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
  },
  back: {
    backgroundColor: "rgba(0,0,0,0)",
  },
});

export { Chat, Game, Header, styles, home };
