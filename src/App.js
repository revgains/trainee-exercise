import React from 'react';
import './App.css';

const api_key = '4688d3a5c9a93ea31e57157acaf02fe4';

const Input = ({ getTemperature }) => {
  return (
    <form onSubmit={getTemperature}>
      <input
        className="temp-form"
        type="text"
        name="city"
        placeholder="Search for city..."
      />
      <button className="form-btn">Get temperature</button>
    </form>
  );
};

const WeatherDisplay = ({ handleClick, city, temp }) => {
  return (
    <div className="temp-card">
      <h1 onClick={handleClick}>{temp} &#x2103;</h1>
      <h3 onClick={handleClick}>{city}</h3>
    </div>
  );
};

class App extends React.Component {
  state = {
    city: '',
    temp: '',
    favCities: []
  };

  getTemperature = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const fetchData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
    );
    const data = await fetchData.json();
    this.setState({
      city: data.name,
      temp: data.main.temp
    });
  };

  handleFavourite = () => {
    this.setState({
      favCities: this.state.favCities.concat({
        city: this.state.city,
        temp: this.state.temp
      })
    });
    console.log(this.state.favCities);
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Weather App</h1>
          {this.state.city.length > 1 ? (
            <WeatherDisplay
              city={this.state.city}
              temp={this.state.temp}
              handleClick={this.handleFavourite}
            />
          ) : null}
          <Input getTemperature={this.getTemperature} />
          <h3>-- Favourite Cities --</h3>
          <div className="footer">
            {this.state.favCities.map(item => {
              return (
                <div className="temp-card-2">
                  <h4 key={item.city}>{item.city}</h4>
                  <h5>{item.temp}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
