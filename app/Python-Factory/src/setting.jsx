import React, { useState, useEffect } from "react";
import { List, Checkbox, Avatar, Appbar, Button } from "react-native-paper";
import { View, Linking, ScrollView } from "react-native";
import { reloadAsync, manifest } from "expo-updates";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Chat, Game, Header, styles, home } from "./component.jsx";

const Tab = createMaterialTopTabNavigator();
var setting = {
  cookie: true,
  scroll: true,
  secret: true,
  cache: true,
  phone: true,
  menu: true,
  korean: true,
};

function useForceUpdate() {
  const [, setValue] = useState(0);
  return () => setValue((value) => value + 1);
}
const storeData = async () => {
  try {
    const jsonValue = JSON.stringify(setting);

    await AsyncStorage.setItem("setting_python_factory", jsonValue);
  } catch (e) {}
};
const check = (a) => (a ? "checked" : "unchecked");



//!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function WebSetting() {
  const [Cookie, setCookie] = useState(false);
  const changeCookie = () => {
    setCookie((p) => !p);
    setting.cookie = Cookie;
    storeData();
  };

  const [cache, setCache] = useState(false);
  const changeCache = () => {
    setCache((p) => !p);
    setting.cache = cache;
    storeData();
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
            ></Checkbox.Android>
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
          <View style={{ padding: 10 }}>
            <Checkbox.Android
              onPress={changeCache}
              status={check(setting.cache)}
            ></Checkbox.Android>
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
    storeData();
  };

  const [scroll, setScroll] = useState(false);
  const changeScroll = () => {
    setScroll((p) => !p);
    setting.scroll = scroll;
    storeData();
  };
  return (
    <List.Section title="Style Setting">
      <List.Item
        title="Scroll"
        description="Enable Scrolling For Navigation"
        left={() => (
          <View style={{ padding: 10 }}>
            <Checkbox.Android
              onPress={changeScroll}
              status={check(setting.scroll)}
            ></Checkbox.Android>
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
          <View style={{ padding: 10 }}>
            <Checkbox.Android
              onPress={changePhone}
              status={check(setting.phone)}
            ></Checkbox.Android>
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
    storeData();
  };

  const [korean, setKorean] = useState(false);
  const changeKorean = () => {
    setKorean((p) => !p);
    setting.korean = korean;
    storeData();
  };

  return (
    <List.Section title="Accessibility Setting">
      <List.Item
        title="Incognito"
        description="Do not let anybody watch you"
        left={() => (
          <View style={{ padding: 10 }}>
            <Checkbox.Android
              onPress={changeSecret}
              status={check(setting.secret)}
            ></Checkbox.Android>
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
          <View style={{ padding: 10 }}>
            <Checkbox.Android
              onPress={changeKorean}
              status={check(setting.korean)}
            ></Checkbox.Android>
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
    storeData();
  };

  return (
    <List.Section title="App Setting">
      <List.Item
        title="Menu"
        description="Use the Menu Button"
        left={() => (
          <View style={{ padding: 10 }}>
            <Checkbox.Android
              onPress={changeMenu}
              status={check(setting.menu)}
            ></Checkbox.Android>
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
    </List.Section>
  );
}
//!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


const AppBar = React.memo((props) => (
  <Appbar.Header statusBarHeight={0}>
    <Appbar.Action icon="clock-fast" onPress={reloadAsync} />
    <Appbar.Content
      title="Coding-Insight App"
      subtitle={"v" + manifest.version}
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
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-evenly",
    }}
  >
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
        style={{ alignContent: "center", marginTop: 10 }}
        contentContainerStyle={{ justifyContent: "center" }}
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
          style={{ margin: 40 }}
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
            storeData();
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
  useEffect(() => {
    async function getit() {
      try {
        const value = await AsyncStorage.getItem("setting_python_factory");

        if (value !== null) setting = JSON.parse(value);
      } catch (e) {}
    }

    getit();
  }, []);

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
