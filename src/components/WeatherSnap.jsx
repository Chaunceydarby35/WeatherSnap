import sunny from '../assets/Images/sunny.png'
import cloudy from '../assets/Images/cloudy.png'
import rainy from '../assets/Images/rainy.png'
import snowy from '../assets/Images/snowy.png'
import { useEffect, useState } from 'react'


const WeatherSnap = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const api_key = '89df08937497ece00d98b380ad476e7f'

  useEffect (() => {
    const fetchDefaultWeather = async () => {
      const defaultLocation = "Madrid"
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=${api_key}`
      const res = await fetch(url)
      const defaultData = await res.json()
      setData(defaultData)
    }

    fetchDefaultWeather()
  }, [])

  const handleInputChange = (e) => {
    setLocation(e.target.value)
  }
  
  const search = async () => {
    if(location.trim() !== '') {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`
      const res = await fetch(url)
      const searchData = await res.json()
      console.log(searchData)
      setData(searchData)
      setLocation('')
    }
  }

  const handleKeyDown = (e) =>{
      if (e.key === "Enter") {
        search()
      }
  }


const weatherImages = {
  Clear: sunny,
  Clouds: cloudy,
  Rain: rainy,
  Snow : snowy,
  Haze: cloudy,
  Mist: cloudy,
  Drizzle: rainy,
}

const weatherImage = data.weather ? weatherImages[data.weather[0].main] : null

const backgroundImages = {
  Clear: 'linear-gradient(to right, #f3b07c, #fcd283)',
  Clouds: 'linear-gradient(to right, #57d6d4, #71eeec)',
  Rain: 'linear-gradient(to right, #5bc8fb, #80eaff)',
  Snow: 'linear-gradient(to right, #aff2ff, #fff)',
  Haze: 'linear-gradient(to right, #57d6d4, #71eeec)',
  Mist: 'linear-gradient(to right, #57d6d4, #71eeec)',
  Drizzle: 'linear-gradient(to right, #5bc8fb, #80eaff)',
}

const backgroundImage = data.weather 
? backgroundImages[data.weather[0].main] : 'linear-gradient(to right, #f3b07c, #fcd283)'

const currentDate = new Date()

const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

const dayOfWeek = daysOfWeek[currentDate.getDate()]
const month = months[currentDate.getMonth()]
const dayOfMonth = currentDate.getDate()

const formattedDate = `${month},${dayOfMonth},${dayOfWeek}`

  return (
  
    <div className="container" style={{backgroundImage}}>
      <div className="weather-snap" style={{
        backgroundImage:
        backgroundImage && backgroundImage.replace 
        ? backgroundImage.replace('to right', 'to top')
        : null
        }}>
      <div>
        <h1>WeatherSnap Forecast</h1>
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
          <img src={weatherImage} alt="WeatherImage" />
          <div className="weather-type">{data.weather ? data.weather[0].main : null}</div>
          <div className="temp">{data.main ? `${Math.floor(data.main.temp)}°`: null}</div>
        </div>
        <div className="weather-date">
          <p>{formattedDate}</p>
        </div>
        <div className="weather-data">
          <div className="humidity">
            <div className="data-name">Humidity</div>
            <i className="fa-solid fa-droplet"></i>
            <div className="data">{data.main ? data.main.humidity : null}%</div>
          </div>
          <div className="Wind">
            <div className="data-name">Wind</div>
            <i className="fa-solid fa-wind"></i>
            <div className="data">{data.wind ? data.wind.speed : null} km/h</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherSnap