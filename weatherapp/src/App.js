import React, {useEffect, useState} from "react"
import axios from 'axios'
import Main from "./Components/Main";
import "./App.css"

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const [latitude, setlatitude] = useState(0);
  const [longitude, setylongitude] = useState(0);

  const savePositionToState = (position) => {
    setlatitude(position.coords.latitude);
    setylongitude(position.coords.longitude);
  }

  const weatherFetch = async () => {
    try{
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=Metric&appid=1f8f362a765c09af83e1be56628603d0`) ;
      setData(res.data)
      console.log(res.data)
    }catch(err){
      console.log(err)
    }
  }
  
  const searchLocation = async() => {
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=1f8f362a765c09af83e1be56628603d0`);
      setData(response.data)
    }catch(err){
      console.log(err)
    }
  }

  const clickHandler = () => {
    searchLocation()
    setLocation('')
  }

  useEffect(async() => {
    window.navigator.geolocation.getCurrentPosition(savePositionToState)
     weatherFetch()
  },[latitude && longitude])

  return (
    <div className="App">
      <div className="search">
      <input
      value = {location}
      onChange = {event => setLocation(event.target.value)}
      placeholder = "Enter Location"
      type="text"/>
     
      <button onClick={clickHandler} className="btn">Search</button>

      </div>
      <Main data={data} location={location}/>
    </div>
  );
}

export default App;
