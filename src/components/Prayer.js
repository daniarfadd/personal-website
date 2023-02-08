import axios from 'axios'
import React, { useEffect, useState } from 'react'

let baseURL = "http://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=2&month=4&year=2017"

function Prayer() {
  const [prayerTime, setPrayerTime] = useState()
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")

  function success(position) {
    // baseURL = `http://api.aladhan.com/v1/calendar?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&method=2`
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
    baseURL = `http://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=2`
    axios.get(baseURL).then(response => {
      setPrayerTime(response.data)
    })
  }, [baseURL])
  console.log(prayerTime)


  return (
    <div>Prayer</div>
  )
}

export default Prayer