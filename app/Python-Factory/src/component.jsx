import React, { memo, useState } from "react";
import {
  View,
  Text,
  Linking,
  Share,
  BackHandler,
  ScrollView,
} from "react-native";
import {
  ProgressBar,
  List,
  IconButton,
  Menu,
  Snackbar,
} from "react-native-paper";
import { Image, Box, Actionsheet } from "native-base";
import { reloadAsync } from "expo-updates";

import styles from "./style.jsx";
import global from "./global.jsx";

var home = "https://coding-insight.com";

const ListBottom = (props) => {
  return (
    <>
      <View style={styles.view}>
        <IconButton
          icon="exit-to-app"
          onPress={() => {
            props.closeMenu();
            BackHandler.exitApp();
          }}
        />
        <IconButton
          icon="eraser"
          onPress={() => {
            props.closeMenu();
            props.erase();
          }}
        />
        <IconButton
          icon="share-variant"
          onPress={async () => {
            props.closeMenu();
            await Share.share({
              title: "Coding-Insight link",
              message: props.link,
            });
          }}
        />
        <IconButton icon="close" onPress={() => props.setVisible(false)} />
      </View>
    </>
  );
};

const Alert = (props) => (
  <Actionsheet isOpen={props.visible} onClose={props.hide}>
    <Actionsheet.Content>
      <Box w="100%" h="100%" px={2} justifyContent="center">
        <ScrollView>
          <List.Section>
            <List.Subheader>Learn More About Us!</List.Subheader>
            <List.Item
              title="Search"
              left={() => <List.Icon icon="magnify" />}
              description="Search us in Google CSE"
              onPress={() => {
                props.setLink(
                  "https://cse.google.com/cse?cx=ee1853348b1a4e08b"
                );
                props.hide();
              }}
            />
            <List.Item
              title="GitHub"
              left={() => <List.Icon icon="github" />}
              description="Check our source code"
              onPress={() => {
                props.setLink(
                  "https://github.com/HyunseungLee-Travis/Coding-Insight"
                );
                props.hide();
              }}
            />
            <List.Item
              title="YouTube"
              left={() => <List.Icon icon="youtube" />}
              description="Watch videos about Python"
              onPress={() => {
                props.setLink(
                  "https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA"
                );
                props.hide();
              }}
            />
            <List.Item
              title="Game"
              left={() => <List.Icon icon="controller-classic" />}
              description="Play a simple game"
              onPress={() => {
                props.setLink("https://coding-insight.com/game.html");
                props.hide();
              }}
            />
            <List.Item
              title="Chat"
              left={() => <List.Icon icon="chat" />}
              description="Chat with the developers"
              onPress={() => {
                props.setLink("https://coding-insight.com/chat.html");
                props.hide();
              }}
            />
            <List.Item
              title="Release"
              left={() => <List.Icon icon="application" />}
              description="Check the latest updates"
              onPress={() => {
                props.setLink(
                  "https://github.com/HyunseungLee-Travis/Coding-Insight/releases/tag/1.4.2"
                );
                props.hide();
              }}
            />
            <List.Item
              title="Feedback"
              left={() => <List.Icon icon="message-alert" />}
              description="Please tell us what you think"
              onPress={() => {
                props.setLink(
                  "https://docs.google.com/forms/d/e/1FAIpQLSd_8WaZFf9FOanYdBil4t1PBZmzY6uRElimcbXbqVZgxghISg/viewform"
                );
                props.hide();
              }}
            />
            <List.Item
              title="Fun Videos"
              left={() => <List.Icon icon="movie" />}
              description="Watch fun videos about Python"
              onPress={() => {
                props.setLink(
                  "https://coding-insight.com/python/korean/video.html"
                );
                props.hide();
              }}
            />
          </List.Section>
        </ScrollView>
      </Box>
    </Actionsheet.Content>
  </Actionsheet>
);

const Header = memo(() => (
  <View style={styles.view}>
    <Image
      source={{ uri: home + "/py.png" }}
      style={styles.image}
      alt="python factory logo"
    />
    <View>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.text}>If there is a bug, press the clock button</Text>
    </View>
  </View>
));

const ProgressPyF = (props) =>
  props.webLoading ? (
    <ProgressBar indeterminate color="dodgerblue" style={styles.progress} />
  ) : null;

const Bar = memo((props) => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.bar}>
      <IconButton icon="undo" onPress={props.goback} color="white" />
      <IconButton icon="redo" onPress={props.goforward} color="white" />
      {props.webLoading ? (
        <IconButton
          icon="stop"
          onPress={() => {
            props.stop();
          }}
          color="white"
        />
      ) : (
        <IconButton icon="reload" onPress={props.reload} color="white" />
      )}
      <IconButton
        icon="home"
        disabled={global.ishome(props.link, home)}
        onPress={() => props.setLink(home)}
        onLongPress={() => Linking.openURL(home)}
        color="white"
      />
      <>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <IconButton
              icon="menu"
              color="white"
              onPress={openMenu}
            ></IconButton>
          }
        >
          <Menu.Item
            onPress={() => {
              props.setVisible((p) => !p);
              closeMenu();
            }}
            title="📁 Learn More"
          />
          <Menu.Item
            onPress={() => {
              props.goToSetting();
              closeMenu();
            }}
            title="⛏️ Open Setting"
          />
          <ListBottom
            setVisible={setVisible}
            closeMenu={closeMenu}
            link={props.link}
            erase={props.erase}
          />
        </Menu>
      </>
    </View>
  );
});

const MenuButton = (props) =>
  props.menu ? (
    <Bar
      {...{
        goback: props.gf.goback,
        goforward: props.gf.goforward,
        webLoading: props.gf.webLoading,
        setLink: props.gf.setLink,
        reload: props.gf.reload,
        link: props.gf.link,
        navigation: props.gf.navigation,
        setVisible: props.gf.setVisible,
        visible: props.gf.visible,
        stop: props.gf.stop,
        setWebLoading: props.gf.setWebLoading,
        goToSetting: props.gf.goToSetting,
        erase: props.gf.erase,
      }}
    />
  ) : (
    <IconButton {...props.iconprop} />
  );

function SnackBarsForErrors(props) {
  return (
    <>
      <Snackbar
        visible={props.HTTPError}
        onDismiss={props.onDismissHTTPError}
        style={{ bottom: 50 }}
        action={{
          label: "OK",
          onPress: props.goback,
        }}
      >
        HTTP Error: This page does not exist
      </Snackbar>
      <Snackbar
        visible={props.Error}
        onDismiss={props.onDismissError}
        style={{ bottom: 50 }}
        action={{
          label: "Update",
          onPress: reloadAsync,
        }}
      >
        Please reload or re-install this app
      </Snackbar>
      <Snackbar
        visible={props.Process}
        onDismiss={props.onDismissProcess}
        style={{ bottom: 50 }}
        action={{
          label: "OK",
          onPress: props.onDismissProcess,
        }}
      >
        Process Gone! Something went wrong
      </Snackbar>
      <Snackbar
        visible={props.Reload}
        onDismiss={props.onDismissReload}
        style={{ bottom: 50 }}
        action={{
          label: "Reload Again",
          onPress: props.reload,
        }}
      >
        Reloading stopped.
      </Snackbar>
    </>
  );
}

export { Header, home, ProgressPyF, MenuButton, Alert, SnackBarsForErrors };
