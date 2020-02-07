import React,{useState} from 'react';
import Home from './screens/home'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
    'nunitoRegular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunitoBold': require('./assets/fonts/Nunito-Bold.ttf')
  });

export default function App() {
  const [loadedFonts, setLoadedFonts]=useState(false)

  if(loadedFonts){
    return (
      <Navigator />
    );
  } else {
    return(
      <AppLoading 
        startAsync={getFonts}
        onFinish={setLoadedFonts(true)}
      />
    )
  }
}

