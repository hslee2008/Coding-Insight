import React, { useState } from "react";
import { List, Checkbox, Avatar, Appbar, Button } from "react-native-paper";
import { View, Linking, ScrollView } from "react-native";
import { reloadAsync, manifest } from "expo-updates";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Chat, Game, Header, home } from "./component.jsx";
import styles from "./style.jsx";
import global from "./global.jsx";

const Tab = createMaterialTopTabNavigator();
var setting = {
  cookie: true,
  scroll: true,
  secret: true,
  cache: true,
  phone: true,
  menu: true,
  korean: true,
  bar: true,
};

function useForceUpdate() {
  const [, setValue] = useState(0);
  return () => setValue((value) => value + 1);
}

const check = (a) => (a ? "checked" : "unchecked");

//!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function WebSetting() {
  const [Cookie, setCookie] = useState(false);
  const changeCookie = () => {
    setCookie((p) => !p);
    setting.cookie = Cookie;
  };

  const [cache, setCache] = useState(false);
  const changeCache = () => {
    setCache((p) => !p);
    setting.cache = cache;
  };

  return (
    <List.Section title="Web Setting">
      <List.Item
        title="Cookie"
        description="Enable Cookie For YouTube"
        left={() => (
          <View style={styles.padten}>
            <Checkbox.Android
              onPress={changeCookie}
              status={check(setting.cookie)}
            />
          </View>
        )}
        right={() => (
          <Avatar.Icon icon="cookie" style={styles.back} color="brown" />
        )}
      />
      <List.Item
        title="Cache"
        description="Enable Cache For Fast Speed"
        left={() => (
          <View style={styles.padten}>
            <Checkbox.Android
              onPress={changeCache}
              status={check(setting.cache)}
            />
          </View>
        )}
        right={() => (
          <Avatar.Icon icon="cached" style={styles.back} color="red" />
        )}
      />
    </List.Section>
  );
}

function LooksSetting() {
  const [phone, setPhone] = useState(false);
  const changePhone = () => {
    setPhone((p) => !p);
    setting.phone = phone;
  };

  const [scroll, setScroll] = useState(false);
  const changeScroll = () => {
    setScroll((p) => !p);
    setting.scroll = scroll;
  };
  return (
    <List.Section title="Style Setting">
      <List.Item
        title="Scroll"
        description="Enable Scrolling For Navigation"
        left={() => (
          <View style={styles.padten}>
            <Checkbox.Android
              onPress={changeScroll}
              status={check(setting.scroll)}
            />
          </View>
        )}
        right={() => (
          <Avatar.Icon icon="mouse" style={styles.back} color="grey" />
        )}
      />
      <List.Item
        title="Phone Style"
        description="Enable Phone Style big View"
        left={() => (
          <View style={styles.padten}>
            <Checkbox.Android
              onPress={changePhone}
              status={check(setting.phone)}
            />
          </View>
        )}
        right={() => (
          <View style={[styles.flexrow]}>
            <Avatar.Icon
              icon={setting.phone ? "laptop" : "cellphone-text"}
              style={styles.back}
              color="dodgerblue"
            />
          </View>
        )}
      />
    </List.Section>
  );
}

function OtherSetting() {
  const [secret, setSecret] = useState(false);
  const changeSecret = () => {
    setSecret((p) => !p);
    setting.secret = secret;
  };

  const [korean, setKorean] = useState(false);
  const changeKorean = () => {
    setKorean((p) => !p);
    setting.korean = korean;
  };

  return (
    <List.Section title="Accessibility Setting">
      <List.Item
        title="Incognito"
        description="Do not let anybody watch you"
        left={() => (
          <View style={styles.padten}>
            <Checkbox.Android
              onPress={changeSecret}
              status={check(setting.secret)}
            />
          </View>
        )}
        right={() => (
          <Avatar.Icon
            icon={setting.secret ? "earth" : "incognito"}
            style={styles.back}
            color="green"
          />
        )}
      />
      <List.Item
        title="Language"
        description="Use Korean Homepage"
        left={() => (
          <View style={styles.padten}>
            <Checkbox.Android
              onPress={changeKorean}
              status={check(setting.korean)}
            />
          </View>
        )}
        right={() => (
          <Avatar.Icon
            icon={setting.korean ? "translate" : "ab-testing"}
            style={styles.back}
            color="black"
          />
        )}
      />
    </List.Section>
  );
}

function AppSetting() {
  const [menu, setMenu] = useState(false);
  const changeMenu = () => {
    setMenu((p) => !p);
    setting.menu = menu;
  };

  const [bar, setBar] = useState(false);
  const changeBar = () => {
    setBar((p) => !p);
    setting.bar = bar;
  };

  return (
    <List.Section title="App Setting">
      <List.Item
        title="Menu"
        description="Use the Menu Button"
        left={() => (
          <View style={styles.padten}>
            <Checkbox.Android
              onPress={changeMenu}
              status={check(setting.menu)}
            />
          </View>
        )}
        right={() => (
          <Avatar.Icon
            icon={setting.menu ? "menu" : "menu-open"}
            style={styles.back}
            color="black"
          />
        )}
      />
      <List.Item
        title="Bar"
        description="Show the status bar (top)"
        left={() => (
          <View style={styles.padten}>
            <Checkbox.Android onPress={changeBar} status={check(setting.bar)} />
          </View>
        )}
        right={() => (
          <Avatar.Icon
            icon="desktop-classic"
            style={styles.back}
            color="black"
          />
        )}
      />
    </List.Section>
  );
}
//!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const AppBar = React.memo((props) => (
  <Appbar.Header statusBarHeight={0}>
    <Appbar.Action icon="clock-fast" onPress={reloadAsync} />
    <Appbar.Content
      title="Coding-Insight App"
      subtitle={global.browsername + " v" + manifest.version}
    />
    <Appbar.Action
      icon="close"
      onPress={() => {
        props.close();
        props.reloadWebView();
      }}
    />
  </Appbar.Header>
));

const Bar = React.memo(() => (
  <View style={styles.bartwo}>
    <Button
      color="black"
      icon="github"
      onPress={() =>
        Linking.openURL("https://github.com/HyunseungLee-Travis/Coding-Insight")
      }
    />
    <Button
      color="black"
      icon="youtube"
      onPress={() =>
        Linking.openURL(
          "https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA"
        )
      }
    />
    <Button
      color="black"
      icon="microsoft-internet-explorer"
      onPress={() => Linking.openURL(home)}
    />
  </View>
));

function MainSettingComponenet(props) {
  const forceUpdate = useForceUpdate();

  return (
    <>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.center}
      >
        <Header />
        <WebSetting />
        <LooksSetting reload={props.reload} />
        <OtherSetting />
        <AppSetting />
        <Button
          mode="contained"
          compact
          icon="lock-reset"
          style={styles.margin}
          onPress={() => {
            setting = {
              cookie: true,
              scroll: true,
              secret: true,
              cache: true,
              phone: true,
              menu: true,
              korean: true,
            };
            forceUpdate();
          }}
        >
          Reset
        </Button>
      </ScrollView>
    </>
  );
}

function Settings(props) {
  return (
    <>
      <AppBar close={props.close} reloadWebView={props.reloadWebView} />

      <Tab.Navigator>
        <Tab.Screen name="Setting" component={MainSettingComponenet} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Game" component={Game} />
      </Tab.Navigator>

      <Bar />
    </>
  );
}

export { setting };
export default React.memo(Settings);
