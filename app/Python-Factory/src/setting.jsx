import React, { useState, memo } from "react";
import { Appbar, Searchbar, Button } from "react-native-paper";
import { ScrollView, View } from "react-native";
import { reloadAsync, manifest } from "expo-updates";
import { Header } from "./component.jsx";
import styles from "./style.jsx";
import {
  WebSetting,
  AppSetting,
  LooksSetting,
  OtherSetting,
} from "./setting_component.jsx";

var setting = {
    cookie: true,
    scroll: true,
    secret: true,
    cache: true,
    phone: true,
    menu: true,
    korean: true,
    text: "100",
    zoom: true,
  },
  changed = false;

const AppBar = memo((props) => (
  <Appbar.Header statusBarHeight={0}>
    <Appbar.Action icon="clock-fast" onPress={reloadAsync} />
    <Appbar.Content
      title="Coding-Insight App"
      subtitle={"CIAV v" + manifest.version}
    />
    <Appbar.Action
      icon="close"
      onPress={() => {
        props.close();
        if (changed) props.reloadWebView();

        changed = false;
        props.isOnSetting();
      }}
    />
  </Appbar.Header>
));

const Functions = memo((props) => {
  return (
    <View style={[styles.view, { justifyContent: "space-evenly" }]}>
      <Button icon="eraser" onPress={props.erase}>
        Erase All Data
      </Button>
    </View>
  );
});

const Settings = memo((props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <AppBar
        close={props.close}
        reloadWebView={props.reloadWebView}
        isOnSetting={props.isOnSetting}
      />

      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={ { flexGrow: 1 } }>
          <Header />
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.marginten}
          />
          <Functions erase={() => props.webViewRef.current.erase()} />
          <WebSetting
            query={searchQuery}
            setting={setting}
            change={() => (changed = true)}
          />
          <LooksSetting
            reload={props.reload}
            query={searchQuery}
            setting={setting}
            change={() => (changed = true)}
          />
          <OtherSetting
            query={searchQuery}
            setting={setting}
            change={() => (changed = true)}
          />
          <AppSetting
            query={searchQuery}
            setting={setting}
            change={() => (changed = true)}
          />
        </ScrollView>
      </View>
    </>
  );
});

export { setting };
export default memo(Settings);
