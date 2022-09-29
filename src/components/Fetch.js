import React from 'react'
import '../styling/fetch.scss'

export default function fetch({data}) {
      const city=data.name 
      const country=data.sys.country
      const humidity=data.main.humidity
      const pressure=data.main.pressure
      const windSpeed=data.wind.speed
      const iconCode=data.weather[0].icon
      const mintemp=Math.floor(data.main.temp_min-273.15)
      const maxtemp=Math.floor(data.main.temp_max-273.15)
      const temp=Math.floor(data.main.temp -273.15)
      const timezone=data.timezone
      const feels_like=Math.floor(data.main.feels_like-273.15)
      const weathCondition=data.weather[0].main
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const today  = new Date().toLocaleDateString("en-US", options);

    //////////////////////////////////////////////////////////////////////
    
    return (
 
    <div className='feed-container'>
        <h1 className='city'>{city},{country}</h1>
        <p className='date'>{today}</p>
        <div className='weath-temp-body'>
            <div>
                <h1>{temp}<sup>o</sup>C</h1>
                <p>Feels like {feels_like}<sup>o</sup>C</p>
            </div>
            <div className="temp-img">
                <h1>{weathCondition}</h1>
                <img src={`http://openweathermap.org/img/w/${iconCode}.png`} alt='curr-temp-image'/>
            </div>
        </div>
        <div className='weath-temp-footer'>
            <table>
                <thead>
                    <tr>
                         <th>Humidity</th>
                         <th>Pressure</th>
                         <th>Velocity</th>
                         <th>Wind Speed</th>
                         <th>Min temp</th>
                         <th>Max temp</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{humidity}%</td>
                        <td>{pressure}Pha</td>
                        <td>2kms</td>
                        <td>{windSpeed}m/s</td>
                        <td>{mintemp}<sup>o</sup>C</td>
                        <td>{mintemp}<sup>o</sup>C</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
