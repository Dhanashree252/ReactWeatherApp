import React from 'react'
import "./Main.css"

function Main(props) {
  return (
    <div className="container">
      {props.data.main ?
        <>
          <div className="top">
            <div className="location">
              <p>{props.data.name}</p>
            </div>
            {props.data.weather[0] ?
              <>
                <div className="icon">
                  <img className='image' src={"http://openweathermap.org/img/w/" + props.data.weather[0].icon + ".png"} />
                </div>
                <div className="desciption">
                  <p>{props.data.weather[0].main}</p>
                </div>
              </>
              : null}
            <div className="temp">
              <h1>{props.data.main.temp.toFixed()}°C</h1>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p className='bold'>{props.data.main.feels_like.toFixed()}°C</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className='bold'>{props.data.main.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              {props.data.wind ? <p className='bold'>{props.data.wind.speed}MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        </>
        : null}
    </div>
  )
}

export default Main