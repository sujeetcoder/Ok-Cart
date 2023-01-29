import React from 'react'
import { dataUrl } from '../Utils/AllUrls'
import axios from "axios"

const HomePage = () => {
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