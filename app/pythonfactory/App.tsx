import React, { memo, useEffect } from 'react';
import { StatusBar, BackHandler } from 'react-native';
import { Provider } from 'react-native-paper';

import global from './src/global';
import { HomeWrapper, globalFunctions } from './Main';
import { home } from './src/component.jsx';

export default memo(() => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      global.ishome(globalFunctions.link, home)
        ? BackHandler.exitApp()
        : globalFunctions.goback();

      return true;
    });
  }, [HomeWrapper]);

  return (
    <Provider>
      <StatusBar hidden />
      <HomeWrapper />
    </Provider>
  );
});
