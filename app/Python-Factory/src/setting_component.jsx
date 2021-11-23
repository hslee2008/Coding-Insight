import React, { useState, memo } from "react";
import {
  Checkbox as cb,
  List,
  Avatar,
  TextInput,
} from "react-native-paper";
import { View } from "react-native";
import styles from "./style.jsx";
import global from "./global.jsx";

const WebSetting = memo( ( props ) => {
  const [ Cookie, setCookie ] = useState( false );
  const changeCookie = () => {
    setCookie( ( p ) => !p );
    props.setting.cookie = Cookie;
    props.change();
  };

  const [ cache, setCache ] = useState( false );
  const changeCache = () => {
    setCache( ( p ) => !p );
    props.setting.cache = cache;
    props.change();
  };

  return (
    <List.Section title="Web Setting">
      { props.query.toLowerCase().indexOf( "cookie" ) != -1 ||
        props.query == "" ? (
        <List.Item
          title="Cookie"
          description="Enable Cookie For YouTube"
          left={ () => (
            <View style={ styles.padten }>
              <cb.Item
                mode="ios"
                onPress={ changeCookie }
                status={ global.check( props.setting.cookie ) }
              />
            </View>
          ) }
          right={ () => (
            <Avatar.Icon icon="cookie" style={ styles.back } color="brown" />
          ) }
        />
      ) : (
        <></>
      ) }

      { props.query.toLowerCase().indexOf( "cache" ) != -1 || props.query == "" ? (
        <List.Item
          title="Cache"
          description="Enable Cache For Fast Speed"
          left={ () => (
            <View style={ styles.padten }>
              <cb.Item
                mode="ios"
                onPress={ changeCache }
                status={ global.check( props.setting.cache ) }
              />
            </View>
          ) }
          right={ () => (
            <Avatar.Icon icon="cached" style={ styles.back } color="red" />
          ) }
        />
      ) : (
        <></>
      ) }
    </List.Section>
  );
} )

const LooksSetting = memo( ( props ) => {
  const [ phone, setPhone ] = useState( false );
  const changePhone = () => {
    setPhone( ( p ) => !p );
    props.setting.phone = phone;
    props.change();
  };

  const [ scroll, setScroll ] = useState( false );
  const changeScroll = () => {
    setScroll( ( p ) => !p );
    props.setting.scroll = scroll;
    props.change();
  };
  return (
    <List.Section title="Style Setting">
      { props.query.toLowerCase().indexOf( "scroll" ) != -1 ||
        props.query == "" ? (
        <List.Item
          title="Scroll"
          description="Enable Scrolling For Navigation"
          left={ () => (
            <View style={ styles.padten }>
              <cb.Item
                mode="ios"
                onPress={ changeScroll }
                status={ global.check( props.setting.scroll ) }
              />
            </View>
          ) }
          right={ () => (
            <Avatar.Icon icon="mouse" style={ styles.back } color="grey" />
          ) }
        />
      ) : (
        <></>
      ) }

      { props.query.toLowerCase().indexOf( "phone" ) != -1 || props.query == "" ? (
        <List.Item
          title="Phone Style"
          description="Enable Phone Style big View"
          left={ () => (
            <View style={ styles.padten }>
              <cb.Item
                mode="ios"
                onPress={ changePhone }
                status={ global.check( props.setting.phone ) }
              />
            </View>
          ) }
          right={ () => (
            <View style={ [ styles.flexrow ] }>
              <Avatar.Icon
                icon={ props.setting.phone ? "laptop" : "cellphone-text" }
                style={ styles.back }
                color="dodgerblue"
              />
            </View>
          ) }
        />
      ) : (
        <></>
      ) }
    </List.Section>
  );
} )

const OtherSetting = memo( ( props ) => {
  const [ secret, setSecret ] = useState( false );
  const changeSecret = () => {
    setSecret( ( p ) => !p );
    props.setting.secret = secret;
    props.change();
  };

  const [ korean, setKorean ] = useState( false );
  const changeKorean = () => {
    setKorean( ( p ) => !p );
    props.setting.korean = korean;
    props.change();
  };

  const [ text, setText ] = useState( "100" );

  const [ zoom, setZoom ] = useState( false );
  const changeZoom = () => {
    setZoom( ( p ) => !p );
    props.setting.zoom = zoom;
    props.change();
  };

  return (
    <List.Section title="Accessibility Setting">
      { props.query.toLowerCase().indexOf( "secret" ) != -1 ||
        props.query == "" ? (
        <List.Item
          title="Incognito"
          description="Do not let anybody watch you"
          left={ () => (
            <View style={ styles.padten }>
              <cb.Item
                mode="ios"
                onPress={ changeSecret }
                status={ global.check( props.setting.secret ) }
              />
            </View>
          ) }
          right={ () => (
            <Avatar.Icon
              icon={ props.setting.secret ? "earth" : "incognito" }
              style={ styles.back }
              color="green"
            />
          ) }
        />
      ) : (
        <></>
      ) }

      { props.query.toLowerCase().indexOf( "language" ) != -1 ||
        props.query == "" ? (
        <List.Item
          title="Language"
          description="Use Korean Homepage"
          left={ () => (
            <View style={ styles.padten }>
              <cb.Item
                mode="ios"
                onPress={ changeKorean }
                status={ global.check( props.setting.korean ) }
              />
            </View>
          ) }
          right={ () => (
            <Avatar.Icon
              icon={ props.setting.korean ? "translate" : "ab-testing" }
              style={ styles.back }
              color="black"
            />
          ) }
        />
      ) : (
        <></>
      ) }

      { props.query.toLowerCase().indexOf( "zoom" ) != -1 || props.query == "" ? (
        <List.Item
          title="Zoom"
          description="Zoom pinching (Android)"
          left={ () => (
            <View style={ styles.padten }>
              <cb.Item
                mode="ios"
                onPress={ changeZoom }
                status={ global.check( props.setting.zoom ) }
              />
            </View>
          ) }
          right={ () => (
            <Avatar.Icon
              icon="magnify"
              style={ styles.back }
              color="black"
            />
          ) }
        />
      ) : (
        <></>
      ) }

      { props.query.toLowerCase().indexOf( "text" ) != -1 || props.query == "" ? (
        <View style={ { padding: 30 } }>
          <TextInput
            label="Set the website text size"
            value={ props.setting.text }
            onChangeText={ ( text ) => {
              setText( text );
              props.setting.text = text;
              props.change();
            } }
            placeholder="Text size: Bigger than 100"
            error={ text < 100 }
          />
        </View>
      ) : (
        <></>
      ) }
    </List.Section>
  );
} )

const AppSetting = memo( ( props ) => {
  const [ menu, setMenu ] = useState( false );
  const changeMenu = () => {
    setMenu( ( p ) => !p );
    props.setting.menu = menu;
    props.change();
  };

  return (
    <List.Section title="App Setting">
      { props.query.toLowerCase().indexOf( "menu" ) != -1 || props.query == "" ? (
        <List.Item
          title="Menu"
          description="Use the Menu Button"
          left={ () => (
            <View style={ styles.padten }>
              <cb.Item
                mode="ios"
                onPress={ changeMenu }
                status={ global.check( props.setting.menu ) }
              />
            </View>
          ) }
          right={ () => (
            <Avatar.Icon
              icon={ props.setting.menu ? "menu" : "menu-open" }
              style={ styles.back }
              color="black"
            />
          ) }
        />
      ) : (
        <></>
      ) }
    </List.Section>
  );
} )

export {
  WebSetting,
  AppSetting,
  LooksSetting,
  OtherSetting
}
