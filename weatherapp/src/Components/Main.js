import React from 'react'
import "./Main.css"

function Main(props) {
  // let location = props.location
  // let name = props.data.name
  return (
    <div className="container">
      
      {/* {(props.data.name && props.location && props.data.name.LowerCase() === props.location.LowerCase()) ? 
      <div> */}
      {props.data.main ?
      <>
        <div className="top">
          <div className="location">
            {/* <p>London</p> */}
            <p>{props.data.name}</p>
          </div>
          {props.data.weather[0]?
          <>
            <div className="icon">
              {/* <p>⛅</p> */}
              <img className='image' src ={"http://openweathermap.org/img/w/" + props.data.weather[0].icon + ".png"} />
            </div>
            <div className="desciption">
              {/* <p>cloudy</p> */}
              <p>{props.data.weather[0].main}</p>
            </div>
          </>
          :null}
          <div className="temp">
            {/* <h1>30°C</h1> */}
             <h1>{props.data.main.temp.toFixed()}°C</h1>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
          {/* <p className='bold'>35°C</p> */}
            <p className='bold'>{props.data.main.feels_like.toFixed()}°C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
          {/* <p className='bold'>10%</p> */}
            <p className='bold'>{props.data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            {props.data.wind? <p className='bold'>{props.data.wind.speed}MPH</p>: null}
            {/* {props.data.wind? <p className='bold'>1.3MPH</p>: null} */}
            <p>Wind Speed</p>
          </div>
        </div>
        </>
        :null}
       </div>
    //     :<p>Aur karna hai kam </p>}
    // </div>
  )
}

export default Main