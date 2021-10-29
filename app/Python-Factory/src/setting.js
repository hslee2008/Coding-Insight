import React, { useState, useEffect } from "react";
import { FAB, List, Checkbox, Avatar, Appbar } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
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

function Settings(props) {
  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(setting);

      await AsyncStorage.setItem("setting_python_factory", jsonValue);
    } catch (e) {}
  };

  useEffect(() => {
    async function getit() {
      try {
        const value = await AsyncStorage.getItem("setting_python_factory");

        if (value !== null) {
          setting = JSON.parse(value);
        }
      } catch (e) {}
    }

    getit();
  }, []);

  const [isEnabled, setIsEnabled] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [secret, setSecret] = useState(false);
  const [cache, setCache] = useState(false);
  const [english, setLang] = useState(true);
  const [phone, setPhone] = useState(false);

  const changeCookie = () => {
    setIsEnabled((p) => !p);
    setting.cookie = isEnabled;
    storeData();
  };

  const changePhone = () => {
    setPhone((p) => !p);
    setting.phone = phone;
    storeData();
  };

  const changeCache = () => {
    setCache((p) => !p);
    setting.cache = cache;
    storeData();
  };

  const changeScroll = () => {
    setScroll((p) => !p);
    setting.scroll = scroll;
    storeData();
  };

  const changeSecret = () => {
    setSecret((p) => !p);
    setting.secret = secret;
    storeData();
  };

  const changeLang = () => {
    setLang((p) => !p);
    setting.english = english;

    setting.english
      ? props.setLink("https://www.coding-insight.com/index-en.html")
      : props.setLink("https://www.coding-insight.com/");

    storeData();
    props.reload();
  };

  return (
    <>
      <Appbar.Header statusBarHeight={0}>
        <Appbar.Content title="Coding-Insight" subtitle={"v" + manifest.version} />
        <Appbar.Action icon="close" onPress={() => props?.drawer?.current?.closeDrawer?.()} />
      </Appbar.Header>
      <View
        style={[
          {
            flex: 1,
            margin: 10,
          },
          styles.center,
        ]}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 0.2,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            Settings
          </Text>
          <Text> If there is a bug, press the button below {"\n"} </Text>
        </View>
        <FAB
          icon="clock-fast"
          label="Update"
          style={{
            margin: 30,
          }}
          onPress={reloadAsync}
        />
        <List.AccordionGroup>
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
        </List.AccordionGroup>
        <FAB
          visible={ true }
          label="Show Menu Button"
          onPress={ () => {
            props.showBar()
            props.drawer.current.closeDrawer()
          }}
        />
      </View>
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
