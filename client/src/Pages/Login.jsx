import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text, useToast } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import Cookies from 'js-cookie'
import { dataUrl } from '../Utils/AllUrls'
import { toastHandlerF, toastHandlerS, toastHandlerSimple } from "../Utils/toast"
// import { AuthContext } from "../Context/AppContext"

let init = {logStatus:false,user:{},friends:[],groups:[]}



const initData = {
    phone:null,
    password:""
}

const Login = () => {

    // const {setUserData,setUserId,userData} = useContext(AuthContext)
    let userData = init
    const [user,setUser] = useState(initData)
    const {password} = user
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const toast = useToast()
    const disable = user.password=="" || user.phone==""
    console.log(userData?.logStatus)
    /* if(!userData.logStatus){
      return <Navigate to={"/"}/>
    } */

   
    function changeUser(e){
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }

    async function toggleLogin(e){
        e.preventDefault()
        if(user.phone.length===10){
        axios.post(`${dataUrl}/users/login`,user,{withCredentials:true}).then((res)=>{
          console.log(res)
          return axios.get(`${dataUrl}/users/login/check`,{withCredentials:true}).then((res2)=>{
            Cookies.set("fid", res2.data?.user?._id, { expires: 1,secure:true,sameSite:"none" })
            Cookies.set("fname", res2.data?.user?.name, { expires: 1,secure:true,sameSite:"none" })
            Cookies.set("fphone", res2.data?.user?.phone, { expires: 1,secure:true,sameSite:"none" })
            /* setUserId(res2.data?.user?._id)
            setUserData(res2.data) */
            toastHandlerS(res.data,toast,"Login")
            navigate("/")
          }).catch((err2)=>{
            console.log(err2)
            toastHandlerF(err2,toast)
          })
        }).catch((err)=>
        {
          console.log(err)
            toastHandlerF(err,toast)
        })
      } else {
        toastHandlerSimple("Inviled mobile number",toast)
      }
      
    }




    return (
      <>
        <Box bgColor="#fffdf7" padding="10px 30%" >
            <Box>
            <Text fontSize="5xl" textAlign="center"><b>Log In </b></Text>
            <FormControl isRequired>
              <FormLabel>phone</FormLabel>
              <Input type="number" onChange={changeUser}  name="phone" placeholder='phone' />
              <FormLabel>password</FormLabel>
              <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                onChange={changeUser}
                name="password"
                value={password}
                focusBorderColor="yellow.400"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
              <Input isDisabled={disable} onClick={toggleLogin}  mt="25px" bgColor="#2a6dff" color="white" type="submit" />
            </FormControl>
            </Box>
            <Text mt="25px" textAlign="end" > Don’t have an account?<Link to={"/signup"} ><u> Get Started </u> </Link> </Text>
            <br/>
        </Box>
            </>
    )
}


export default Login