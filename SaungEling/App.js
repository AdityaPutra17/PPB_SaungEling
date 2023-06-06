import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Viewstart from './splashscreen/Viewstart';
import Viewlogin from './LoginScreen/Viewlogin';
import Viewtamplate from './HomePage/Viewtamplate';

export default function App() {
  return (
    // <Viewstart/>
    // <Viewlogin/>
    <Viewtamplate/>
  );
}

