import {
  Flex,
  Box,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";

import styles from "./Header.module.css";
import "./drop.css";

import { AiOutlineCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import CartPopOver from "./CartPopOver";
import { useState } from "react";
import logo1 from "../../Stores/img/ok-logo-1.gif";
import nav_logo_1 from "../../Stores/img/nav-pop-1.jpg";
import cart_gif_2 from "../../Stores/img/cart_gif_2.gif";
import { useMedia } from "../../MediaQuery/UseMedia";

function Navbar() {
  const [show, setShow] = useState(false);
  const { midBr } = useMedia();
  let prev;

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
    let elements = e.target?.nextElementSibling;
    elements?.classList.add("show-sec-drop");
    elements?.classList.remove("hide-sec-drop");

    prev = elements;
    console.log(elements?.classList);
  };
  const handleOver2 = (e) => {
    if (prev) {
      prev?.classList.remove("show-sec-drop");
      prev?.classList.add("hide-sec-drop");
    }
    let elements = document.getElementById("last-pop-up");
    elements?.classList.add("show-sec-drop");
    elements?.classList.remove("hide-sec-drop");

    prev = elements;
    console.log(elements?.classList);
  };

  return (
    <Box
      position="sticky"
      top={"0px"}
      boxShadow="0 0 12px rgb(0 0 0 / 12%)"
      w="100%"
      zIndex="10"
      bgColor="#9130c2"
      borderBottom={"3px solid #00ff2a"}
    >
      {/* cart popup */}
      {show && <CartPopOver setShow={setShow} />}
      {/* for last pop up */}
      <Box
        onMouseLeave={handleOut}
        textAlign={"center"}
        style={{ width: "100%", background: "white", paddingBottom: "20px" }}
        id="last-pop-up"
        className="hide-sec-drop"
      >
        <Box borderTop={"1px solid red"} pt="25px" w="100%">
          <Flex
            flexDirection={["column", "row", "row", "row"]}
            justifyItems="center"
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={5}
          >
            <Flex
              flexDirection={["column", "row", "row", "row"]}
              w="40%"
              justifyContent={"space-between"}
              gap={5}
            >
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
                  <Text mb="23px" color={"black"} _hover={{ color: "orange" }}>
                    Become A Seller
                  </Text>
                </Link>
                <Link to={"#"}>
                  <Text color={"black"} _hover={{ color: "orange" }}>
                    Become An Affiliate
                  </Text>
                </Link>
              </Box>
            </Flex>
            <Flex
              flexDirection={["column", "row", "row", "row"]}
              w="54%"
              justifyContent={"space-between"}
              gap={5}
            >
              <Box w="40%" p="10px 20px">
                <Image w="100%" src={nav_logo_1} />
              </Box>
              <Box w="60%" p="10px 20px">
                <Text mb="16px" color={"#9130c2"} _hover={{ color: "orange" }}>
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
                  You just need 1 product and 2 documents to start selling on
                  Okcart. Equal opportunities for all the sellers to grow.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Flex
        h="59.6px"
        alignItems="center"
        justifyContent="space-between"
        gap={["20px", "30px", "50px", "100px"]}
        fontWeight="500"
        fontSize="15px"
        zIndex="100"
        pr="20px"
        color={"white"}
      >
        <Box h="45px" ml={["10px", "15px", "40px", "80px"]} mr="-50px">
          <Link to="/" _hover={{ textDecoration: "none" }}>
            <Image borderRadius={"30%"} h="100%" src={logo1} />
          </Link>
        </Box>

        <Flex
          display={["none", "none", "flex", "flex"]}
          w="94%"
          p="0px 20px"
          justifyContent={"space-between"}
        >
          {/* first */}
          <Flex
            justifyContent="center"
            alignItems="center"
            gap={["10px", "10px", "10px", "20px"]}
            zIndex="100"
          >
            <Link to="/" className="un" >
              <Text _hover={{ color: "#ff783d" }}>Home</Text> 
            </Link>

            <div className={styles.makeup}>
                <Flex _hover={{ color: "#ff783d" }} align="center" justify="center" gap="10px">
                  <h3 onMouseOver={handleOut}>More</h3>{" "}
                  <AiOutlineCaretDown mt="10px" />
                </Flex>

              <div className={styles.dropdown1}>
                  <a href="/" ><Text>Login</Text></a>
                  <a href="/" ><Text>Login</Text></a>
                  <a href="/" ><Text>Login</Text></a>
                  <a href="/" ><Text>Login</Text></a>
                  <a href="/" ><Text>Login</Text></a>
              </div>
            </div>
            {/* last */}
            <Text onMouseOver={handleOver2} mt="-15" mb="10px" fontSize={"30"}>
              ...
            </Text>
          </Flex>
          {/* sec */}
          <Flex justifyContent={"space-between"}>
            <Link to="/signup">
              {" "}
              <Box>
                <Button size={"sm"} colorScheme={"orange"}>
                  Sign Up
                </Button>
              </Box>
            </Link>
            <Link to="/login">
              <Box>
                <Button
                  ml="25px"
                  p="1px 24px"
                  size={"sm"}
                  colorScheme={"orange"}
                >
                  Login
                </Button>
              </Box>
            </Link>
            <Box
            ml={10}
            mt={"-12px"}
            w={50}
            h={50}
            _hover={{ cursor: "pointer" }}
            onClick={() => setShow(true)}>
              <Image h="100%" src={cart_gif_2} />
            </Box>
          </Flex>
        </Flex>

        {/* midScreen */}
        <Flex
          justifyContent={"space-between"}
          gap="20px"
          display={["flex", "flex", "none", "none"]}
        >
          <Box
            onClick={() => setShow(true)}
            mr={["0px", "1px", "10px", "20px"]}
            ml={10}
            mt={"-12px"}
            w={50}
            h={50}
            _hover={{ cursor: "pointer" }}
          >
            <Image
              _hover={{ cursor: "pointer" }}
              h={"100%"}
              src={cart_gif_2}
            />
          </Box>
          <BurgerMenu />
          {/* midScreen */}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
