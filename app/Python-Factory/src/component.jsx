import React, { memo } from "react";
import { View, Text, Linking, Image } from "react-native";
import { ProgressBar, IconButton, List } from "react-native-paper";
import styles from "./style.jsx";
import global from "./global.jsx";

var home = "https://www.coding-insight.com";

const Header = memo( () => (
  <View style={ styles.view }>
    <Image source={ { uri: home + "/py.png" } } style={ styles.image } />
    <View>
      <Text style={ styles.title }>Settings</Text>
      <Text style={ styles.text }>If there is a bug, press the clock button</Text>
    </View>
  </View>
) );
const ProgressPyF = ( props ) => {
  if ( props.webLoading )
    return (
      <ProgressBar indeterminate color="dodgerblue" style={ styles.progress } />
    );
  else return null;
};

const Bar = memo( ( props ) => {
  return (
    <View
      style={ [
        styles.view,
        { backgroundColor: "black", justifyContent: "space-evenly" },
      ] }
    >
      <IconButton icon="undo" onPress={ props.goback } color="white" />
      <IconButton icon="redo" onPress={ props.goforward } color="white" />
      {
        props.webLoading ? (
          <IconButton
            icon="stop"
            onPress={ () => {
              props.stop();
              props.setWebLoading( false );
            } }
            color="white"
          />
        ) : (
          <IconButton
            icon="reload"
            onPress={ props.reload }
            color="white"
          />
        )
      }
      <IconButton
        icon="home"
        disabled={ global.ishome( props.link, home ) }
        onPress={ () => props.setLink( home ) }
        onLongPress={ () => Linking.openURL( home ) }
        color="white"
      />
      <IconButton
        icon="menu"
        onPress={ () => props.setVisible( p => !p ) }
        color="white"
      />
      <IconButton
        icon="cog"
        onPress={ () => props.navigation.navigate( "Settings" ) }
        color="white"
      />
    </View>
  );
} );

const MenuMore = ( props ) => (
  <List.Section>
    <List.Subheader>Learn More About Us!</List.Subheader>
    <List.Item title="Search" left={ () => <List.Icon icon="magnify" /> } description="Search us in Google CSE" onPress={ () => {
      props.setVisible( false );
      props.setLink( "https://cse.google.com/cse?cx=ee1853348b1a4e08b" );
    } } />
    <List.Item title="GitHub" left={ () => <List.Icon icon="github" /> } description="Check our source code" onPress={ () => {
      props.setVisible( false );
      props.setLink(
        "https://github.com/HyunseungLee-Travis/Coding-Insight"
      );
    } } />
    <List.Item title="YouTube" left={ () => <List.Icon icon="youtube" /> } description="Watch videos about Python" onPress={ () => {
      props.setVisible( false );
      props.setLink(
        "https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA"
      );
    } } />
    <List.Item title="Game" left={ () => <List.Icon icon="controller-classic" /> } description="Play a simple game" onPress={ () => {
      props.setVisible( false );
      props.setLink( "https://www.coding-insight.com/game.html" );
    } } />
    <List.Item title="Chat" left={ () => <List.Icon icon="chat" /> } description="Chat with the developers" onPress={ () => {
      props.setVisible( false );
      props.setLink( "https://www.coding-insight.com/chat.html" );
    } } />
  </List.Section>
);

const MenuButton = ( props ) =>
  props.menu ? <Bar { ...props.barprop } /> : <IconButton { ...props.iconprop } />;

export { Header, home, ProgressPyF, MenuButton, MenuMore };
