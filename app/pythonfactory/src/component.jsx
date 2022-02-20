/*
! React Native Library Imports
*/
import { reloadAsync } from 'expo-updates';
import React, { memo, useState } from 'react';
import { BackHandler, Linking, Share, Text, View, Image } from 'react-native';
import { IconButton, Menu, ProgressBar, Snackbar } from 'react-native-paper';
import global from './global.jsx';
/*
! Local React Native Imports
*/
import styles from './style.jsx';

/*
! Global Variables
*/
var home = 'https://www.coding-insight.com';

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
            title: 'Coding-Insight link',
            message: props.link,
          });
        }}
      />
      <IconButton
        icon="eraser-variant"
        onPress={() => {
          props.erase;
          props.closeMenu;
        }}
      />
      <IconButton icon="close" onPress={props.closeMenu} />
    </View>
  );
};

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
            title="📂 Learn More"
          />
          <Menu.Item onPress={() => reloadAsync()} title="⏳ Update App" />
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

const MenuButton = (props) => (
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
      erase: props.gf.erase,
    }}
  />
);

function SnackBarsForErrors(props) {
  return (
    <>
      <Snackbar
        visible={props.HTTPError}
        onDismiss={props.onDismissHTTPError}
        style={{ bottom: 50 }}
        action={{
          label: 'OK',
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
          label: 'Update',
          onPress: reloadAsync,
        }}
      >
        NetworkError: Please connect to the network
      </Snackbar>

      <Snackbar
        visible={props.Process}
        onDismiss={props.onDismissProcess}
        style={{ bottom: 50 }}
        action={{
          label: 'OK',
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
          label: 'Reload Again',
          onPress: props.reload,
        }}
      >
        Reloading stopped.
      </Snackbar>
    </>
  );
}

export { home, ProgressPyF, MenuButton, SnackBarsForErrors };
