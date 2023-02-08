import {
  Link,
  Box,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  Image,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import nav_logo_1 from "../../Stores/img/nav-pop-1.jpg";

import "./drop.css";

import { GiHamburgerMenu } from "react-icons/gi";

import { Link as RouterLink } from "react-router-dom";
import logo1 from "../../Stores/img/ok-logo-1.gif";
import { useRef } from "react";

const BurgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  // const {isAuth} = useSelector((store) => store.auth);
  let prev;
  let prev2;

  const handleOut = (e) => {
    if (prev) {
      prev?.classList.remove("show-sec-drop");
      prev?.classList.add("hide-sec-drop");
    }
  };
  const handleOver = (e) => {
    if (prev) {
      prev?.classList.remove("show-sec-drop");
      prev?.classList.add("hide-sec-drop");
    }
    if (prev2) {
      prev2?.classList.remove("show-sec-drop");
      prev2?.classList.add("hide-sec-drop");
    }
    let elements = e.target?.nextElementSibling;
    elements?.classList.add("show-sec-drop");
    elements?.classList.remove("hide-sec-drop");

    prev = elements;
    console.log(elements?.classList);
  };
  const handleOver3 = (e) => {
    if (prev2) {
      prev2?.classList.remove("show-sec-drop");
      prev2?.classList.add("hide-sec-drop");
    }
    let elements = e.target?.nextElementSibling;
    elements?.classList.add("show-sec-drop");
    elements?.classList.remove("hide-sec-drop");

    prev2 = elements;
    console.log(elements?.classList);
  };

  return (
    <Box display={["flex", "flex", "flex", "none"]}>
      <Box mt={2} onClick={onOpen} ref={btnRef}>
        <GiHamburgerMenu className="burger" />
      </Box>
      <Drawer
        isOpen={isOpen}
        size="lg"
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Box h="45px" ml={["10px", "15px", "40px", "80px"]} mr="-50px" mt="1">
            <Link to="/" _hover={{ textDecoration: "none" }}>
              <Image borderRadius={"30%"} h="100%" src={logo1} />
            </Link>
          </Box>

          <Flex
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            gap="20px"
            zIndex="100"
            fontSize="22px"
            fontWeight="bold"
            maxHeight={"700px"}
            overflowY="auto"
            scrollBehavior={"smooth"}
          >
            <Link
              as={RouterLink}
              to="/"
              className="un"
              _hover={{ textDecoration: "none" }}
            >
              Home
            </Link>
            <Divider orientation="horizontal" />
            {/* testing */}
            <Link onMouseOver={handleOver} to="">
              More &gt;
            </Link>
            <Box fontSize={"md"} textAlign={"center"} className="hide-sec-drop">
              <Text
                color={"black"}
                _hover={{
                  textDecoration: "underline",
                  color: "orange",
                }}
              >
                Login
              </Text>
              <Text
                color={"black"}
                _hover={{
                  textDecoration: "underline",
                  color: "orange",
                }}
              >
                Login
              </Text>
              <Text
                color={"black"}
                _hover={{
                  textDecoration: "underline",
                  color: "orange",
                }}
              >
                Login
              </Text>
              <Text
                color={"black"}
                _hover={{
                  textDecoration: "underline",
                  color: "orange",
                }}
              >
                Login
              </Text>
              <Text
                color={"black"}
                _hover={{
                  textDecoration: "underline",
                  color: "orange",
                }}
              >
                Login
              </Text>
            </Box>
            <Divider orientation="horizontal" />
            {/* last-end */}
            <Text onMouseOver={handleOver} mt="-14px" mb="10px" fontSize={"30"}>
              ...
            </Text>
            <Box
              textAlign={"center"}
              style={{ width: "100%" }}
              className="hide-sec-drop"
            >
              <Box borderTop={"1px solid red"} pt="25px" w="100%">
                <Flex
                  fontSize={"15px"}
                  flexDirection={"column"}
                  justifyItems="center"
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={5}
                >
                  <Flex
                    flexDirection={"column"}
                    w="100%"
                    justifyContent={"space-between"}
                    gap={5}
                  >
                    <Box p="10px 20px">
                      <Box p="10px 20px">
                        <Link to={"#"}>
                          <Text color={"black"} _hover={{ color: "orange" }}>
                            About Us
                          </Text>
                        </Link>
                        <Link to={"#"}>
                          <Text color={"black"} _hover={{ color: "orange" }}>
                            Contact Us
                          </Text>
                        </Link>
                        <Link to={"#"}>
                          <Text color={"black"} _hover={{ color: "orange" }}>
                            Refund Policy
                          </Text>
                        </Link>
                        <Link to={"#"}>
                          <Text color={"black"} _hover={{ color: "orange" }}>
                            More About Affiliate
                          </Text>
                        </Link>
                        <Link to={"#"}>
                          <Text color={"black"} _hover={{ color: "orange" }}>
                            More About Seller
                          </Text>
                        </Link>
                      </Box>
                      <Box p="10px 20px" /* w="100%" */>
                        <Link mb="23px" to={"#"}>
                          <Text
                            mb="23px"
                            color={"#9130c2"}
                            _hover={{ color: "orange" }}
                          >
                            Become A Seller
                          </Text>
                        </Link>
                        <Link to={"#"}>
                          <Text color={"#9130c2"} _hover={{ color: "orange" }}>
                            Become An Affiliate
                          </Text>
                        </Link>
                      </Box>
                    </Box>
                  </Flex>
                  <Flex
                    flexDirection={"column"}
                    w="54%"
                    justifyContent={"space-between"}
                    gap={5}
                  >
                    <Box w="100%" p="10px 20px">
                      <Image w="100%" src={nav_logo_1} />
                    </Box>
                    <Box w="100%" p="10px 20px">
                      <Text
                        mb="16px"
                        color={"#9130c2"}
                        _hover={{ color: "orange" }}
                      >
                        OKCART
                      </Text>
                      <Text
                        mb="8px"
                        fontSize={"xl"}
                        color={"black"}
                        _hover={{ color: "orange" }}
                      >
                        Why choose Okcart for selling
                      </Text>
                      <Text
                        color={"black"}
                        _hover={{ color: "orange" }}
                        fontSize="sm"
                      >
                        You just need 1 product and 2 documents to start selling
                        on Okcart. Equal opportunities for all the sellers to
                        grow.
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Link as={RouterLink} to="/signup">
            <Box w="80%" m="auto">
              <Button colorScheme={"orange"} w="100%">
                Sign Up
              </Button>
            </Box>
          </Link>
          <br />
          <Link as={RouterLink} to="/login">
            <Box w="80%" m="auto">
              <Button mb="20px" colorScheme={"orange"} w="100%">
                Login
              </Button>
            </Box>
          </Link>
          <Box w="10px"></Box>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default BurgerMenu;
