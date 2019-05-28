import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form"
import Weather from "./components/Weather"
import GenericWeather from "./components/WeatherIcon"; // 'react-weather' or "./components/WeatherIcon"


// shhhhh super secet API key pulled from github
const API_KEY = "8d2de98e089f1c28e1a22fc19a24ef04";



class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    condition: undefined,
    description: undefined,
    windSpeed: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value; 
    const country = e.target.elements.country.value; 

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    if (city && country){
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        condition: data.weather[0].main,
        description: data.weather[0].description,
        windSpeed: data.wind.speed,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        condition: undefined,
        description: undefined,
        windSpeed: undefined,
        error: "Please enter city and country"
      })

    }
    
  }

  render() {
    return (
        <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                    <Titles />
                  </div>
                  <div className="col-xs-7 form-container">
                    <Form getWeather={this.getWeather}/>
                    <Weather 
                      temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      humidity={this.state.humidity}
                      description={this.state.description}
                      windSpeed={this.state.windSpeed}
                      error={this.state.error}
                    />
                    <GenericWeather
                        city={this.state.city}
                        temp={this.state.temperature}
                        status={this.state.condition}
                        windSpeed={this.state.windSpeed}/>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;