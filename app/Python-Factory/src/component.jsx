import React, { useState, memo } from "react";
import { View, Text, Image, Linking } from "react-native";
import { ProgressBar, IconButton, FAB } from "react-native-paper";
import { WebView } from "react-native-webview";
import styles from "./style.jsx";
import global from "./global.jsx";

var home = "https://www.coding-insight.com";

const More = memo((props) => {
  return (
    <WebView
      source={{
        uri: props.type,
      }}
    />
  );
});
const Header = memo(() => (
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

const SettingBar = memo((props) => {
  const [state, setState] = useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

  return (
    <>
      <FAB.Group
        icon="more"
        fabStyle={{ backgroundColor: "white" }}
        actions={[
          {
            icon: "github",
            onPress: () =>
              props.setLinkMore(
                "https://github.com/HyunseungLee-Travis/Coding-Insight"
              ),
          },
          {
            icon: "youtube",
            onPress: () =>
              props.setLinkMore(
                "https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA"
              ),
          },
          {
            icon: "controller-classic",
            onPress: () => props.setLinkMore(home + "/game.html"),
          },
          {
            icon: "chat",
            onPress: () => props.setLinkMore(home + "/chat.html"),
          },
        ]}
        open={open}
        onStateChange={onStateChange}
      />
    </>
  );
});

const Bar = memo((props) => {
  return (
    <View
      style={[
        styles.view,
        { backgroundColor: "black", justifyContent: "space-evenly" },
      ]}
    >
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

export { More, Header, home, ProgressPyF, MenuButton, SettingBar };
