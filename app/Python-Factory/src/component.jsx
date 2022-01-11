/*
! React Native Library Imports
*/
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

/*
! Local React Native Imports
*/
import styles from "./style.jsx";
import global from "./global.jsx";
import Links from "./links.js";

/*
! Global Variables
*/
var home = "https://coding-insight.com";

/*
! Menu List Bottom
*/
const ListBottom = (props) => {
  return (
    <View style={styles.view}>
      <IconButton
        icon="exit-to-app"
        onPress={() => {
          props.closeMenu();
          BackHandler.exitApp();
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
      <IconButton icon="close" onPress={props.closeMenu} />
    </View>
  );
};

/*
! Alert Sheet
*/
const Alert = (props) => (
  <Actionsheet isOpen={props.visible} onClose={props.hide}>
    <Actionsheet.Content>
      <Box w="100%" h="100%" px={2} justifyContent="center">
        <ScrollView>
          <List.Section>
            <List.Subheader>Learn More About Us!</List.Subheader>

            {Links.map((a, ind) => (
              <List.Item
                key={ind}
                title={a.title}
                left={() => <List.Icon icon={a.icon} />}
                description={a.description}
                onPress={() => {
                  props.setLink(a.link);
                  props.hide();
                }}
              />
            ))}
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
            title="📂 Learn More"
          />
          <Menu.Item
            onPress={() => {
              props.goToSetting();
              closeMenu();
            }}
            title="🖥️ Open Setting"
          />
          <Menu.Item onPress={() => reloadAsync()} title="⏳ Update App" />
          <ListBottom
            setVisible={setVisible}
            closeMenu={closeMenu}
            link={props.link}
            erase={() => props.webViewRef.current.erase()}
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
        goback: () => props.gf.webViewRef.current.goBack(),
        goforward: () => props.gf.webViewRef.current.goForward(),
        reload: () => props.gf.webViewRef.current.reload(),
        erase: () => props.gf.webViewRef.current.erase(),

        webLoading: props.gf.webLoading,
        setLink: props.gf.setLink,
        link: props.gf.link,
        navigation: props.gf.navigation,
        setVisible: props.gf.setVisible,
        visible: props.gf.visible,
        setWebLoading: props.gf.setWebLoading,
        goToSetting: props.gf.goToSetting,
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
        style={{ bottom: 50, zIndex: 100 }}
        action={{
          label: "OK",
          onPress: () => props.webViewRef.current.goBack(),
        }}
      >
        HTTP Error: This page does not exist
      </Snackbar>

      <Snackbar
        visible={props.Error}
        onDismiss={props.onDismissError}
        style={{ bottom: 50, zIndex: 100 }}
        action={{
          label: "Update",
          onPress: reloadAsync,
        }}
      >
        NetworkError: Please connect to the network
      </Snackbar>

      <Snackbar
        visible={props.Process}
        onDismiss={props.onDismissProcess}
        style={{ bottom: 50, zIndex: 100 }}
        action={{
          label: "OK",
          onPress: props.onDismissProcess,
        }}
      >
        Process Gone! Something went wrong
      </Snackbar>
    </>
  );
}

export { Header, home, ProgressPyF, MenuButton, Alert, SnackBarsForErrors };
