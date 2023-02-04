import {
  Box,
  Button,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { dataUrl } from "../Utils/AllUrls";
import { toastHandlerF, toastHandlerS, toastHandlerSimple } from "../Utils/toast";



const initData = {
  name: "",
  phone: "",
  password: "",
};

const SignUp = () => {
  const [user, setUser] = useState(initData);
  const { name, password } = user;
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const Style = {
    backgroundImage: `url("https://thumbs.dreamstime.com/b/penne-pasta-plate-tomato-sauce-30685904.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    zIndex: 1,
    backgroundSize: "cover",
    cursor: "pointer",
  };
  const toast = useToast()
  const disable = user.name=="" || user.password=="" || user.phone==""

  /* if(isAuth){
        return <Navigate to={"/"}/>
      } */

  function changeUser(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  }

  function signUp() {
    if(user.phone.length===10){
          axios.post(`${dataUrl}/users/signup`,user,{withCredentials:true}).then((res)=>{
            console.log(res)
            toastHandlerS(res.data,toast)
            navigate("/login")
          }).catch((err)=>{
            console.log(err)
            toastHandlerF(err,toast)
        })
    } else {
      toastHandlerSimple("Inviled mobile number",toast)
    }
  }

  return (
    <Box>
      <Container
        padding="40px"
        style={Style}
        maxW="full"
        bg="blue.600"
        centerContent
      >
        <Box
          textAlign="start"
          padding="50px"
          bg="white"
          opacity="0.8"
          color="black"
          maxH="full"
          maxW="full"
        >
          <Text fontSize="4xl">
            <b> Welcome in Chatbot </b>
          </Text>
          <Text fontSize="2xl">
            For connecting with your friend please signup first
          </Text>
          <br />
          <br />
          {/* all items */}
          <SimpleGrid columns={[1, 1, 3, 3, 3]} gap="30px">
            <Input
              variant="outline"
              onChange={changeUser}
              name="name"
              value={name}
              /* w="40%" */ /* focusBorderColor='pink.400' */ placeholder="name"
            />
            <Input
              type="number"
              onChange={changeUser}
              name="phone"
              /* w="30%" */ focusBorderColor="pink.400"
              placeholder="phone"
            />
            {/* <Input type="password" onChange={changeUser}  name="password" value={password}  focusBorderColor='yellow.400'  placeholder='password' />  */}
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
          </SimpleGrid>
          <br />
          <Button
            onClick={signUp}
            isDisabled={disable}
            size="md"
            style={{
            backgroundColor: "#3167ff",
            color: "white",
            }}
          >
            Continue
          </Button>
          <br />
          <br />
          <Text>
            
            Already have an account?
            <Link to={"/login"}>
              
              <u> Log in. </u>
            </Link>
          </Text>
          <Text>
            By continuing, you agree to our<u> Terms </u> and
            <u> Privacy Policy</u> & will receive emails from Freshly.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;
