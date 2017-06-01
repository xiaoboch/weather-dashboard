import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_maps'

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = cityData.list.map(weather => weather.main.temp);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const {lat, lon} = cityData.city.coord;

    console.log('lat', lat),
    console.log('lng', lon)

    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lng={lon}/></td>
        <td><Chart data={temp} color='orange'/></td>
        <td><Chart data={humidity} color='green'/></td>
        <td><Chart data={pressure} color='black'/></td>
      </tr>
    )
  }

  render() {

    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temprature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>

      </table>
    );

  }
}

function mapStateToProps({weather}) {
  return {weather}; // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
