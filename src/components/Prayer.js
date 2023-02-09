import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Prayer() {
  
  const [prayerTime, setPrayerTime] = useState([])
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")

  // const baseURL = "http://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=2&month=4&year=2017"

  const baseURL = `http://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=2`

  function success(position) {
    
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
    
  }
  function error() {
    alert("Position not can't be access")
  }

  function userLocation() {
    if (!navigator.geolocation) {
      alert("You dont have geolocation")
    } else {
      navigator.geolocation.getCurrentPosition(success, error)
    }
  }
  userLocation();

  useEffect(() => {
    axios.get(baseURL).then(response => {
      let date = new Date()
      let todayDate = date.getDate()
      // take today gate and subtract by 1, because the first date start from array index 0
      setPrayerTime(response.data.data[todayDate-1])
    })
  }, [baseURL])
  console.log(prayerTime.timings)


  return (
    <div>
      <h1>Prayer</h1>

    {
      JSON.stringify(prayerTime.timings) !== undefined ? 
      <table>
        <tbody>
          <tr>
            <td>Fajr</td>
            <td>{prayerTime.timings.Fajr}</td>
          </tr>
          <tr>
            <td>Dhuhr</td>
            <td>{prayerTime.timings.Dhuhr}</td>
          </tr>
          <tr>
            <td>Asr</td>
            <td>{prayerTime.timings.Asr}</td>
          </tr>
          <tr>
            <td>Maghrib</td>
            <td>{prayerTime.timings.Maghrib}</td>
          </tr>
          <tr>
            <td>Isha</td>
            <td>{prayerTime.timings.Isha}</td>
          </tr>

        </tbody>
      </table>
      : 
      <h1>Loading</h1>
    }
    </div>
  )
}

export default Prayer