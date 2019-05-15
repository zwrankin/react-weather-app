import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form"
import Weather from "./components/Weather"

// shhhhh super secet API key pulled from github
const API_KEY = "8d2de98e089f1c28e1a22fc19a24ef04";
const city = "Chicago"
const country = "US"

class App extends React.Component {

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value; 
    const country = e.target.elements.country.value; 

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return (
        <div>
          <Titles />
          <Form getWeather={this.getWeather}/>
          <Weather />
        </div>
    );
  }
}

export default App;