import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Viewstart from './splashscreen/Viewstart';
import Viewlogin from './LoginScreen/Viewlogin';
import Homeview from './Homepage/Homeview';


export default function App() {
  return (
    // <Viewstart/>
    // <Viewlogin/>
    <Homeview/>
  );
}

