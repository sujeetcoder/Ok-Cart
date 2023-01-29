import React from 'react'
import { dataUrl } from '../Utils/AllUrls'
import axios from "axios"
import {Navigate} from "react-router-dom"
import { useEffect } from 'react'
import { useState } from 'react'
import Cookies from 'js-cookie';

const HomePage = () => {
  const [data,setData] = useState(null)
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
  
  /* if(navigator.cookieEnabled){
    console.log(navigator.cookieEnabled)
  } else {
    return <Navigate to="/sd" />
  } */
  const doIt1 = async () => {
    axios.post(`${dataUrl}/users/login`,{email:"sujeet@gmail.com",password:"sujeet8"},{withCredentials:true}).then((res)=>console.log(res)).catch((err)=>console.log(err))

  }
  const doIt2 = async () => {
    axios.post(`${dataUrl}/users/logout/sujeet@gmail.com`,{email:"sujeet@gmail.com",password:"sujeet8"},{withCredentials:true}).then((res)=>console.log(res)).catch((err)=>console.log(err))
  }
  const doIt3 = async () => {
    axios.get(`${dataUrl}/users/getuser`,{withCredentials:true}).then((res)=>{
      console.log(res)
      setData(res.data)
    }).catch((err)=>console.log(err))
  }

   /* document &&document.requestStorageAccess().then((res)=>console.log(res)).catch((err)=>console.log(err)) */
   function setCookie(name, value, options) {
    Cookies.set(name, value, options);
    }

   function checkThirdPartyCookies() {
    // Set a test cookie on a different domain
    setCookie("ram1", "kumar1", { expires: 7,secure:true,sameSite:"none",domain:"okcart-server.cyclic.app",httpOnly: true })
    setCookie("ram2", "kumar2", { expires: 7,secure:true,sameSite:"none" })
    // Check if the test cookie was successfully set
    if (!Cookies.get().ram) {
      console.log("Third-party cookies are blocked.");
      console.log(Cookies.get());
    } else {
      console.log("Third-party cookies are NOT blocked.");
    }
  }
  checkThirdPartyCookies()
   
   
   
  




  return (
    <div>
      <button onClick={doIt1} >log in</button><br/>
      <button onClick={doIt2}>out</button><br/>
      <button onClick={doIt3}>get</button>
      <p>{ data && data[0].email}</p>
    </div>
  )
}

export default HomePage