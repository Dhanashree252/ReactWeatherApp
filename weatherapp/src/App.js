import React, {useEffect, useState} from "react"
import axios from 'axios'
import Main from "./Components/Main";
import "./App.css"

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=1f8f362a765c09af83e1be56628603d0`
  
  
  // console.log(location)
 
  // const searchLocation = ()  =>{ 
  //   setData({wind:"abc", main:"cde", weather:"jhh", name:"dcc"})
  //   setLocation()
  // }
  const [latitude, setlatitude] = useState(0);
  const [longitude, setylongitude] = useState(0);

  const savePositionToState = (position) => {
    setlatitude(position.coords.latitude);
    setylongitude(position.coords.longitude);
  }

  

  const weatherFetch = async () => {
    try{
      // await window.navigator.geolocation.getCurrentPosition(savePositionToState)
     
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=Metric&appid=1f8f362a765c09af83e1be56628603d0`) ;
      setData(res.data)
      console.log(res.data)
    }catch(err){
      console.log(err)
    }
    // setLocation('')
  }
  //9577ed9712a7b415338789f085bfb72f
  const searchLocation = async() => {
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=1f8f362a765c09af83e1be56628603d0`);
      setData(response.data)
    }catch(err){
      console.log(err)
    }
    
  }

  const clickHandler = () => {
    // setLocation(location)
    searchLocation()
    setLocation('')
  }


  // const searchLocation = () =>{
  //   axios.get(url).then(Response => {
  //     setData(Response.data)
  //     console.log(Response.data)
  //   })
  //   // {location && <Main data={data} location={location}/>}
  //   setLocation('')
  // }

  // const searchLocation = () =>{
  //   axios.get(url).then(Response => {
  //     setData(Response.data)
  //     console.log(Response.data)
  //   })
  //   // {location && <Main data={data} location={location}/>}
  //   setLocation('')
  // }

  // useEffect(() => {
  //   clickHandler()
  // },[location])
  
  useEffect(async() => {
    // location? clickHandler() : weatherFetch();
    // if(location !== ""){
    //   searchLocation()
    // }
    // else{
    //   weatherFetch();
    // }
  
    window.navigator.geolocation.getCurrentPosition(savePositionToState)
     weatherFetch()
  },[latitude && longitude])

  
  
  
  return (
    <div className="App">
      <div className="search">
        {/* <p>{"http://openweathermap.org/img/w/" + location + ".png"}</p> */}
      <input
      value = {location}
      onChange = {event => setLocation(event.target.value)}
      // onKeyPress = {searchLocation}
      placeholder = "Enter Location"
      type="text"/>
      
      {/* {data.name && <button onClick={searchLocation} className="btn">Search</button>} */}

      <button onClick={clickHandler} className="btn">Search</button>

      </div>
      {/* {location  && <Main data={data} location={location}/>} */}
      <Main data={data} location={location}/>
    </div>
  );
}

export default App;
