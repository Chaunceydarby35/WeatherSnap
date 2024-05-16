import sunny from '../assets/Images/sunny.png'
import cloudy from '../assets/Images/cloudy.png'
import rainy from '../assets/Images/rainy.png'
import snowy from '../assets/Images/snowy.png'
import { useState } from 'react'


const WeatherSnap = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const api_key = '89df08937497ece00d98b380ad476e7f'

  const handleInputChange = (e) => {
    setLocation(e.target.value)
  }
  
  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`
    const res = await fetch(url)
    const searchData = await res.json()
    console.log(searchData)
    setData(searchData)
    setLocation('')
  }

  const handleKeyDown = (e) =>{
      if (e.key === "Enter") {
        search()
      }
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
            <div className="location">{data.name}</div>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Enter Location"
            value={location} onChange={handleInputChange}
            onKeyDown={handleKeyDown}/>
            <i className="fa-solid fa-magnifying-glass"
            onClick={search}></i>
          </div>
        </div>
        <div className="weather">
          <img src={sunny} alt="Sunny" />
          <div className="weather-type">Clear</div>
          <div className="temp">{data.main ? `${Math.floor(data.main.temp)}`: null}</div>
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