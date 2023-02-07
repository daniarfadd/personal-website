import axios from 'axios'
import React, { useEffect, useState } from 'react'


function success(position){
  console.log(position)
}

function error(){
  alert("Position not can't be access")
}

function userLocation(){
  if(!navigator.geolocation){
    alert("You dont have geolocation")
  }else{
    navigator.geolocation.getCurrentPosition(success, error)
  }
}

function Prayer() {
  const [prayerTime,setPrayerTime] = useState()
  userLocation();
  return (
    <div>Prayer</div>
  )
}

export default Prayer