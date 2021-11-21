import React, { useState, memo } from "react";
import {
  Checkbox as cb,
  List,
  Avatar,
  Appbar,
  Searchbar,
  TextInput,
} from "react-native-paper";
import { View, ScrollView } from "react-native";
import { reloadAsync, manifest } from "expo-updates";
import { Header } from "./component.jsx";
import styles from "./style.jsx";
import global from "./global.jsx";

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

function useForceUpdate () {
  const [ , setValue ] = useState( 0 );
  return () => setValue( ( value ) => value + 1 );
}

function WebSetting ( props ) {
  const [ Cookie, setCookie ] = useState( false );
  const changeCookie = () => {
    setCookie( ( p ) => !p );
    setting.cookie = Cookie;
    changed = true;
  };

  const [ cache, setCache ] = useState( false );
  const changeCache = () => {
    setCache( ( p ) => !p );
    setting.cache = cache;
    changed = true;
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
                status={ global.check( setting.cookie ) }
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
                status={ global.check( setting.cache ) }
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
}

function LooksSetting ( props ) {
  const [ phone, setPhone ] = useState( false );
  const changePhone = () => {
    setPhone( ( p ) => !p );
    setting.phone = phone;
    changed = true;
  };

  const [ scroll, setScroll ] = useState( false );
  const changeScroll = () => {
    setScroll( ( p ) => !p );
    setting.scroll = scroll;
    changed = true;
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
                status={ global.check( setting.scroll ) }
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
                status={ global.check( setting.phone ) }
              />
            </View>
          ) }
          right={ () => (
            <View style={ [ styles.flexrow ] }>
              <Avatar.Icon
                icon={ setting.phone ? "laptop" : "cellphone-text" }
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
}

function OtherSetting ( props ) {
  const [ secret, setSecret ] = useState( false );
  const changeSecret = () => {
    setSecret( ( p ) => !p );
    setting.secret = secret;
    changed = true;
  };

  const [ korean, setKorean ] = useState( false );
  const changeKorean = () => {
    setKorean( ( p ) => !p );
    setting.korean = korean;
    changed = true;
  };

  const [ text, setText ] = useState( "100" );

  const [ zoom, setZoom ] = useState( false );
  const changeZoom = () => {
    setZoom( ( p ) => !p );
    setting.zoom = zoom;
    changed = true;
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
                status={ global.check( setting.secret ) }
              />
            </View>
          ) }
          right={ () => (
            <Avatar.Icon
              icon={ setting.secret ? "earth" : "incognito" }
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
                status={ global.check( setting.korean ) }
              />
            </View>
          ) }
          right={ () => (
            <Avatar.Icon
              icon={ setting.korean ? "translate" : "ab-testing" }
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
                status={ global.check( setting.zoom ) }
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
            value={ setting.text }
            onChangeText={ ( text ) => {
              setText( text );
              setting.text = text;
              changed = true;
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
}

function AppSetting ( props ) {
  const [ menu, setMenu ] = useState( false );
  const changeMenu = () => {
    setMenu( ( p ) => !p );
    setting.menu = menu;
    changed = true;
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
                status={ global.check( setting.menu ) }
              />
            </View>
          ) }
          right={ () => (
            <Avatar.Icon
              icon={ setting.menu ? "menu" : "menu-open" }
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
}

const AppBar = memo( ( props ) => (
  <Appbar.Header statusBarHeight={ 0 }>
    <Appbar.Action icon="clock-fast" onPress={ reloadAsync } />
    <Appbar.Content
      title="Coding-Insight App"
      subtitle={ global.browsername + " v" + manifest.version }
    />
    <Appbar.Action
      icon="close"
      onPress={ () => {
        props.close();
        if ( changed ) props.reloadWebView();

        changed = false;
      } }
    />
  </Appbar.Header>
) );

function Settings ( props ) {
  const forceUpdate = useForceUpdate();
  const [ searchQuery, setSearchQuery ] = useState( "" );

  const onChangeSearch = ( query ) => setSearchQuery( query );

  return (
    <>
      <AppBar close={ props.close } reloadWebView={ props.reloadWebView } />

      <ScrollView
        style={ styles.scrollview }
        contentContainerStyle={ styles.center }
      >
        <Header />
        <Searchbar
          placeholder="Search"
          onChangeText={ onChangeSearch }
          value={ searchQuery }
          style={ styles.marginten }
        />
        <WebSetting query={ searchQuery } />
        <LooksSetting reload={ props.reload } query={ searchQuery } />
        <OtherSetting query={ searchQuery } />
        <AppSetting query={ searchQuery } />
      </ScrollView>
    </>
  );
}

export { setting };
export default memo( Settings );
