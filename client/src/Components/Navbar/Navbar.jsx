import {
  Box,
  Flex,
  Image,
  IconButton,
  Button,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { yellow, red} from "../../Utils/color";
import { useMedia } from "../../MediaQuery/UseMedia";
import { useContext } from "react";
// import { AuthContext } from "../../Context/AppContext";
import { dataUrl } from "../../Utils/AllUrls";
import Cookies from "js-cookie";
import axios from "axios";
import logo1 from "../../Stores/img/ok-logo-1.gif"

let init = {logStatus:false,user:{},friends:[],groups:[]}

const Navbar = () => {
  // const {userData} = useContext(AuthContext)
  let userData = init
  const { midBr } = useMedia();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  function toggleClick(val) {
    navigate(val);
  }

  const logout = async () => {
    if(Cookies.get().fid){
      axios.post(`${dataUrl}/users/logout/${Cookies.get().fid}`,{email:"sujeet@gmail.com",password:"sujeet8"},{withCredentials:true}).then((res)=>{
        console.log(res)
        Cookies.remove('fname')
        Cookies.remove('fphone')
        Cookies.remove('fid')
        onClose()
        window.location.reload()
        
      }).catch((err)=>console.log(err))
    }
  }

  return (
    <>
      <Flex
        justifyContent="space-around"
        pos="sticky"
        zIndex="50"
        top="0px"
        bgColor={red}
        gap="2px"
        h="70px"
      >
        <Box h="100%">
          <Image
            borderRadius={"50%"}
            src={
              logo1
            }
            alt="logo"
            h="100%"
          />
        </Box>

        <Box p="14px 10px">
          {midBr && (
            <Box display="flex" alignItems="baseline" gap="15px">
              <Button onClick={() => toggleClick("/")} bgColor={yellow}>
                Home
              </Button>
              <Button onClick={() => userData.logStatus ? logout() : toggleClick("/login")} bgColor={userData.logStatus?"red":yellow}>
                {userData.logStatus?"Log Out":"Login"}
              </Button>
             {!userData.logStatus && <Button onClick={() => toggleClick("/signup")} bgColor={yellow}>
                Sign Up
              </Button>}
            </Box>
          )}

          {!midBr && (
            <>
              <Button 
              as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline" 
                colorScheme="red" 
                onClick={onOpen}
                >
                Open
              </Button>
              <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerHeader borderBottomWidth="1px">
                    <Flex justifyContent={"space-around"} >
                      <Text color={"#00ff2a"}>Welcome</Text>
                      <Button as={IconButton} icon={<CloseIcon/>} onClick={onClose} >Close</Button>
                    </Flex>
                  </DrawerHeader>
                  <DrawerBody>
                   <a href="/" ><Text bgColor={yellow}>Home</Text> </a> 
                   <Text onClick={() => userData.logStatus? logout() : toggleClick("/login")} bgColor={userData.logStatus?"red":yellow}>{userData.logStatus?"Log Out":"Login"}</Text> 
                   {!userData.logStatus && <a href="/signup" > <Text bgColor={yellow}>Sign Up</Text> </a> }
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
