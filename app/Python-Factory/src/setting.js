import React, { useState, useEffect } from "react";
import {
  List,
  Checkbox,
  Avatar,
  Appbar,
  IconButton,
  FAB,
} from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  ScrollView,
} from "react-native";
import { reloadAsync, manifest } from "expo-updates";
import AsyncStorage from "@react-native-async-storage/async-storage";

var setting = {
  cookie: true,
  scroll: true,
  secret: true,
  cache: true,
  phone: true,
  menu: true,
  korean: true,
};

const home = "https://www.coding-insight.com";

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
    <>
      <List.Item
        title="Cookie"
        description="Enable Cookie For YouTube"
        left={() => (
          <View style={{ padding: 10 }}>
            <Checkbox.Android
              onPress={changeCookie}
              status={setting.cookie ? "checked" : "unchecked"}
            ></Checkbox.Android>
          </View>
        )}
        right={() => (
          <Avatar.Icon
            icon="cookie"
            style={{ backgroundColor: "rgb(0,0,0,0)" }}
            color="brown"
          />
        )}
      />
      <List.Item
        title="Cache"
        description="Enable Cache For Fast Speed"
        left={() => (
          <View style={{ padding: 10 }}>
            <Checkbox.Android
              onPress={changeCache}
              status={setting.cache ? "checked" : "unchecked"}
            ></Checkbox.Android>
          </View>
        )}
        right={() => (
          <Avatar.Icon
            icon="cached"
            style={{ backgroundColor: "rgb(0,0,0,0)" }}
            color="red"
          />
        )}
      />
    </>
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
    <>
      <List.Item
        title="Scroll"
        description="Enable Scrolling For Navigation"
        left={() => (
          <View style={{ padding: 10 }}>
            <Checkbox.Android
              onPress={changeScroll}
              status={setting.scroll ? "checked" : "unchecked"}
            ></Checkbox.Android>
          </View>
        )}
        right={() => (
          <Avatar.Icon
            icon="mouse"
            style={{ backgroundColor: "rgb(0,0,0,0)" }}
            color="grey"
          />
        )}
      />
      <List.Item
        title="Phone Style"
        description="Enable Phone Style big View"
        left={() => (
          <View style={{ padding: 10 }}>
            <Checkbox.Android
              onPress={changePhone}
              status={setting.phone ? "checked" : "unchecked"}
            ></Checkbox.Android>
          </View>
        )}
        right={() => (
          <View style={[styles.flexrow]}>
            <Avatar.Icon
              icon={setting.phone ? "laptop" : "cellphone-text"}
              style={{ backgroundColor: "rgb(0,0,0,0)" }}
              color="dodgerblue"
            />
          </View>
        )}
      />
    </>
  );
}

function OtherSetting() {
  const [secret, setSecret] = useState(false);
  const changeSecret = () => {
    setSecret((p) => !p);
    setting.secret = secret;
    storeData();
  };

  const [menu, setMenu] = useState(false);
  const changeMenu = () => {
    setMenu((p) => !p);
    setting.menu = menu;
    storeData();
  };

  const [korean, setKorean] = useState(false);
  const changeKorean = () => {
    setKorean((p) => !p);
    setting.korean = korean;
    storeData();
  };

  return (
    <>
      <List.Item
        title="Incognito"
        description="Do not let anybody watch you"
        left={() => (
          <View style={{ padding: 10 }}>
            <Checkbox.Android
              onPress={changeSecret}
              status={setting.secret ? "checked" : "unchecked"}
            ></Checkbox.Android>
          </View>
        )}
        right={() => (
          <Avatar.Icon
            icon={setting.secret ? "earth" : "incognito"}
            style={{ backgroundColor: "rgb(0,0,0,0)" }}
            color="green"
          />
        )}
      />
      <List.Item
        title="Menu"
        description="Use the Menu Button"
        left={() => (
          <View style={{ padding: 10 }}>
            <Checkbox.Android
              onPress={changeMenu}
              status={setting.menu ? "checked" : "unchecked"}
            ></Checkbox.Android>
          </View>
        )}
        right={() => (
          <Avatar.Icon
            icon={setting.menu ? "menu" : "menu-open"}
            style={{ backgroundColor: "rgb(0,0,0,0)" }}
            color="black"
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
              status={setting.korean ? "checked" : "unchecked"}
            ></Checkbox.Android>
          </View>
        )}
        right={() => (
          <Avatar.Icon
            icon={setting.korean ? "translate" : "ab-testing"}
            style={{ backgroundColor: "rgb(0,0,0,0)" }}
            color="black"
          />
        )}
      />
    </>
  );
}

const AppBar = React.memo((props) => (
  <Appbar.Header statusBarHeight={0}>
    <Appbar.Action icon="clock-fast" onPress={reloadAsync} />
    <Appbar.Content
      title="Coding-Insight App"
      subtitle={"v" + manifest?.version}
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
      bottom: 0,
      position: "absolute",
      width: "100%",
    }}
  >
    <IconButton
      icon="github"
      onPress={() =>
        Linking.openURL("https://github.com/HyunseungLee-Travis/Coding-Insight")
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
));

function Header() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginTop: 10,
        flexDirection: "row",
        backgroundColor: "rgba(52, 52, 52, 0)",
      }}
    >
      <Image
        source={{ uri: home + "/py.png" }}
        style={{ width: 100, height: 100 }}
      />
      <View>
        <Text style={{ fontSize: 30 }}>Settings</Text>
        <Text> If there is a bug, press the clock button</Text>
      </View>
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

  const forceUpdate = useForceUpdate();

  return (
    <>
      <AppBar close={props.close} reloadWebView={props.reloadWebView} />
      <Header />

      <ScrollView
        style={{ alignContent: "center", marginTop: 10 }}
        contentContainerStyle={{ justifyContent: "center" }}
      >
        <WebSetting />
        <LooksSetting reload={props.reload} />
        <OtherSetting />
        <FAB
          label="Reset"
          icon="lock-reset"
          style={{ margin: 40, marginBottom: 70 }}
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
        />
      </ScrollView>

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
