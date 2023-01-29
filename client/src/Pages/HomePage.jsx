import React from 'react'
import { dataUrl } from '../Utils/AllUrls'
import axios from "axios"
import {Navigate} from "react-router-dom"

const HomePage = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  
  if(navigator.cookieEnabled){
    console.log(navigator.cookieEnabled)
  } else {
    return <Navigate to="/sd" />
  }
  const doIt1 = async () => {
    axios.post(`${dataUrl}/users/login`,{email:"sujeet@gmail.com",password:"sujeet8"},{withCredentials:true}).then((res)=>console.log(res)).catch((err)=>console.log(err))

  }
  const doIt2 = async () => {
    axios.post(`${dataUrl}/users/logout/sujeet@gmail.com`,{email:"sujeet@gmail.com",password:"sujeet8"},{withCredentials:true}).then((res)=>console.log(res)).catch((err)=>console.log(err))
  }
  const doIt3 = async () => {
    axios.get(`${dataUrl}/users/getuser`,{withCredentials:true}).then((res)=>console.log(res)).catch((err)=>console.log(err))
  }
  return (
    <div>
      <button onClick={doIt1} >log in</button><br/>
      <button onClick={doIt2}>out</button><br/>
      <button onClick={doIt3}>get</button>
    </div>
  )
}

export default HomePage