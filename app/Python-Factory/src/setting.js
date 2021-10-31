import React, { useState, useEffect } from "react";
import { List, Checkbox, Avatar, Appbar, IconButton } from "react-native-paper";
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import { reloadAsync, manifest } from "expo-updates";
import AsyncStorage from "@react-native-async-storage/async-storage";

var setting = {
  cookie: true,
  scroll: true,
  secret: true,
  cache: true,
  phone: true,
  english: false,
};

const home = "https://www.coding-insight.com";

const storeData = async () => {
  try {
    const jsonValue = JSON.stringify(setting);

    await AsyncStorage.setItem("setting_python_factory", jsonValue);
  } catch (e) {}
};

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
    <List.Accordion
      id="1"
      title="Web Setting"
      style={styles.padten}
      left={(props) => <List.Icon {...props} icon="web" />}
    >
      <View style={styles.padten}>
        <View style={styles.flexrow}>
          <Avatar.Icon
            icon="cookie"
            size={30}
            style={{
              backgroundColor: "rgb(0,0,0,0)",
            }}
            color="red"
          />
          <View style={styles.padsix}>
            <Text> Use Cookies </Text>
          </View>
          <View>
            <Checkbox.Android
              onPress={changeCookie}
              status={setting.cookie ? "checked" : "unchecked"}
            ></Checkbox.Android>
          </View>
        </View>
        <View style={styles.flexrow}>
          <Avatar.Icon
            icon="sync"
            size={30}
            style={{
              backgroundColor: "rgb(0,0,0,0)",
            }}
            color="red"
          />
          <View style={styles.padsix}>
            <Text> Use Cache </Text>
          </View>
          <View>
            <Checkbox.Android
              onPress={changeCache}
              status={setting.cache ? "checked" : "unchecked"}
            ></Checkbox.Android>
          </View>
        </View>
      </View>
    </List.Accordion>
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
    <List.Accordion
      id="2"
      title="Looks Setting"
      style={styles.padten}
      left={(props) => <List.Icon {...props} icon="eye" />}
    >
      <View style={styles.padten}>
        <View style={styles.flexrow}>
          <Avatar.Icon
            icon="mouse"
            size={30}
            style={{
              backgroundColor: "rgb(0,0,0,0)",
            }}
            color="dodgerblue"
          />
          <View style={styles.padsix}>
            <Text> Use Scrollbar </Text>
          </View>
          <View>
            <Checkbox.Android
              onPress={changeScroll}
              status={setting.scroll ? "checked" : "unchecked"}
            ></Checkbox.Android>
          </View>
        </View>
        <View style={styles.flexrow}>
          <Avatar.Icon
            icon="phone"
            size={30}
            style={{
              backgroundColor: "rgb(0,0,0,0)",
            }}
            color="dodgerblue"
          />
          <View style={styles.padsix}>
            <Text> Phone Style </Text>
          </View>
          <View>
            <Checkbox.Android
              onPress={changePhone}
              status={setting.phone ? "checked" : "unchecked"}
            ></Checkbox.Android>
          </View>
        </View>
      </View>
    </List.Accordion>
  );
}

function OtherSetting() {
  const [secret, setSecret] = useState(false);
  const changeSecret = () => {
    setSecret((p) => !p);
    setting.secret = secret;
    storeData();
  };

  const [english, setLang] = useState(true);
  const changeLang = () => {
    setLang((p) => !p);
    setting.english = english;

    setting.english
      ? props.setLink(home + "/index-en.html")
      : props.setLink(home);

    storeData();
    props.reload();
  };

  return (
    <List.Accordion
      id="3"
      title="Other"
      style={styles.padten}
      left={(props) => <List.Icon {...props} icon="menu" />}
    >
      <View style={styles.flexrow}>
        <Avatar.Icon
          icon="incognito"
          size={30}
          style={{
            backgroundColor: "rgb(0,0,0,0)",
          }}
          color="black"
        />
        <View style={styles.padsix}>
          <Text> Use Secret Mode </Text>
        </View>
        <View>
          <Checkbox.Android
            onPress={changeSecret}
            status={setting.secret ? "checked" : "unchecked"}
          ></Checkbox.Android>
        </View>
      </View>
      <View style={styles.flexrow}>
        <Avatar.Icon
          icon="ab-testing"
          size={30}
          style={{
            backgroundColor: "rgb(0,0,0,0)",
          }}
          color="black"
        />
        <View style={styles.padsix}>
          <Text> Use English Home </Text>
        </View>
        <View>
          <Checkbox.Android
            onPress={changeLang}
            status={setting.english ? "checked" : "unchecked"}
          ></Checkbox.Android>
        </View>
      </View>
    </List.Accordion>
  );
}

function AppBar(props) {
  return (
    <Appbar.Header statusBarHeight={0}>
      <Appbar.Action icon="clock-fast" onPress={reloadAsync} />
      <Appbar.Content
        title="Coding-Insight"
        subtitle={"v" + manifest.version}
      />
      <Appbar.Action icon="close" onPress={() => props.close()} />
    </Appbar.Header>
  );
}

function Bar() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        bottom: 0,
        position: "absolute",
        width: "100%",
      }}
    >
      <IconButton
        icon="github"
        onPress={() =>
          Linking.openURL(
            "https://github.com/HyunseungLee-Travis/Coding-Insight"
          )
        }
      />
      <IconButton
        icon="youtube"
        onPress={() =>
          Linking.openURL(
            "https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA"
          )
        }
      />
      <IconButton
        icon="microsoft-internet-explorer"
        onPress={() => Linking.openURL(home)}
      />
      <IconButton
        icon="controller-classic"
        onPress={() => Linking.openURL(home + "/game.html")}
      />
    </View>
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
      <AppBar close={props.close} />
      
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Image
          source={{ uri: home + "/py.png" }}
          style={{ width: 100, height: 100 }}
        />
        <Text style={{ fontSize: 30 }}>Settings</Text>
        <Text> If there is a bug, press the button below </Text>
      </View>

      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
        }}
      >
        <List.AccordionGroup>
          <WebSetting />
          <LooksSetting reload={props.reload} />
          <OtherSetting />
        </List.AccordionGroup>
      </View>

      <Bar />
    </>
  );
}

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
  center: {
    justifyContent: "center",
    alignContent: "center",
  },
});

export { setting };
export default React.memo(Settings);
