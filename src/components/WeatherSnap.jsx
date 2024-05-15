import sunny from '../assets/Images/sunny.png'
import cloudy from '../assets/Images/cloudy.png'
import rainy from '../assets/Images/rainy.png'
import snowy from '../assets/Images/snowy.png'


const WeatherSnap = () => {
  const api_key = '89df08937497ece00d98b380ad476e7f'
  
  const search = () => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=89df08937497ece00d98b380ad476e7f "
  }

  return (
  
    <div className="container">
      <div className="weather-snap">
      <div>
        <h1>Get Your Forecast here!</h1>
       </div>
        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">London</div>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Enter Location"/>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="weather">
          <img src={sunny} alt="Sunny" />
          <div className="weather-type">Clear</div>
          <div className="temp">28°</div>
        </div>
        <div className="weather-date">
          <p>Wed, 15 May</p>
        </div>
        <div className="weather-data">
          <div className="humidity">
            <div className="data-name">Humidity</div>
            <i className="fa-solid fa-droplet"></i>
            <div className="data">35%</div>
          </div>
          <div className="Wind">
            <div className="data-name">Wind</div>
            <i className="fa-solid fa-wind"></i>
            <div className="data">3 km/h</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherSnap