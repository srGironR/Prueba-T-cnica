import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route}  from 'react-router-dom'
import KeyW from './Components/Key/key';
import weathercity from './Components/WeatherCity/wcity';


class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={KeyW}/>
        <Route path="/Weather" component={weathercity}/>
      </div>
    </BrowserRouter>
);
}
}
export default App;
