import React, { useState, memo } from "react";
import { Appbar, Searchbar, } from "react-native-paper";
import { ScrollView } from "react-native";
import { reloadAsync, manifest } from "expo-updates";
import { Header } from "./component.jsx";
import styles from "./style.jsx";
import { WebSetting, AppSetting, LooksSetting, OtherSetting } from "./setting_component.jsx";

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

const AppBar = memo( ( props ) => (
  <Appbar.Header statusBarHeight={ 0 }>
    <Appbar.Action icon="clock-fast" onPress={ reloadAsync } />
    <Appbar.Content
      title="Coding-Insight App"
      subtitle={ "CIAV v" + manifest.version }
    />
    <Appbar.Action
      icon="close"
      onPress={ () => {
        props.close();
        if ( changed ) props.reloadWebView();

        changed = false;
        props.isOnSetting()
      } }
    />
  </Appbar.Header>
) );

const Settings = memo( ( props ) => {
  const [ searchQuery, setSearchQuery ] = useState( "" );
  const onChangeSearch = ( query ) => setSearchQuery( query );

  return (
    <>
      <AppBar close={ props.close } reloadWebView={ props.reloadWebView } isOnSetting={ props.isOnSetting } />

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
        <WebSetting query={ searchQuery } setting={ setting } change={ () => changed = true } />
        <LooksSetting reload={ props.reload } query={ searchQuery } setting={ setting } change={ () => changed = true } />
        <OtherSetting query={ searchQuery } setting={ setting } change={ () => changed = true } />
        <AppSetting query={ searchQuery } setting={ setting } change={ () => changed = true } />
      </ScrollView>
    </>
  );
} )

export {
  setting
};
export default memo( Settings );
