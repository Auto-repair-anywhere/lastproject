import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route, Routes } from "react-router-native";
import Button from './components/ComponentsAchref/Buttom.jsx';
import Workshoplist from './components/ComponentsAchref/Workshopslist.jsx'
import QuestionCarPage from './components/ComponentsAchref/QuestionCarPage.jsx'
import LandingPage from './components/ComponentsAchref/LandingPage.jsx';

const App = () => (
  <NativeRouter>
    <View>
      <Routes>
        <Route path="/" element={<QuestionCarPage/>} />
      </Routes>
    </View>
  </NativeRouter>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
