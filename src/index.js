import React, {Component} from 'react';
import Routes from './routes/index';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './Redux/index';
import SplashScreen from 'react-native-splash-screen';
console.disableYellowBox = true;
class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
export default App;
