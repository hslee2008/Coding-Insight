import React from "react";
import { View, Text, Image, Linking } from "react-native";
import { ProgressBar, IconButton } from "react-native-paper";
import { WebView } from "react-native-webview";
import styles from "./style.jsx";
import global from "./global.jsx";

var home = "https://www.coding-insight.com";

const Chat = React.memo(() => (
  <WebView source={{ uri: home + "/chat.html" }} />
));
const Game = React.memo(() => (
  <WebView source={{ uri: home + "/game.html" }} />
));
const Header = React.memo(() => (
  <View style={styles.view}>
    <Image source={{ uri: home + "/py.png" }} style={styles.image} />
    <View>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.text}>If there is a bug, press the clock button</Text>
    </View>
  </View>
));
const ProgressPyF = (props) => {
  if (props.webLoading)
    return (
      <ProgressBar indeterminate color="dodgerblue" style={styles.progress} />
    );
  else return null;
};

const Bar = React.memo((props) => {
  return (
    <View style={styles.bar}>
      <IconButton icon="undo" onPress={props.goback} color="white" />
      <IconButton icon="redo" onPress={props.goforward} color="white" />
      <IconButton
        icon="reload"
        onPress={props.reload}
        color="white"
        disabled={props.webLoading}
      />
      <IconButton
        icon="home"
        disabled={global.ishome(props.link, home)}
        onPress={() => props.setLink(home)}
        onLongPress={() => Linking.openURL(home)}
        color="white"
      />
      <IconButton
        icon="cog"
        onPress={() => props.navigation.navigate("Settings")}
        color="white"
      />
    </View>
  );
});
const MenuButton = (props) =>
  props.menu ? <Bar {...props.barprop} /> : <IconButton {...props.iconprop} />;

export { Chat, Game, Header, home, ProgressPyF, MenuButton };
