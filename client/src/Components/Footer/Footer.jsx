import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Divider,
  Image,
  Flex,
} from "@chakra-ui/react";
import oklogo2 from "../../Stores/img/ok-logo-2.gif";

const Footer = () => {
  return (
    <Box zIndex={"0"} bgColor="black" color="white">
      <Container as={Stack} maxW={"6x1"} py={10} mb={["-20px","-20px","-20px","-40px","-40px"]} w="100%">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 4 }} spacing={15}>
          <Stack p={10} align={"flex-start"}>
            <Box w="70px" m={"auto"} mb="15px" mt="-10">
              <Link to="/">
                <Image h="100%" src={oklogo2} />
              </Link>
            </Box>
            <Text
              _hover={{ color: "#ff783d" }}
              fontSize={"14px"}
              textAlign={"left"}
            >
              Welcome to Okcart, where you'll find a wide selection of products
              at great prices. We offer a variety of categories including
              fashion, electronics, home goods, and more. Our user-friendly
              website makes it easy to find what you're looking for, and our
              secure checkout ensures that your personal information is safe and
              protected.
            </Text>
          </Stack>
          <Stack p={"0px 30px"} align={"flex-start"}>
            <Text mb="-2" color={"white"} fontSize={25} fontWeight="bold">
             Office Address:
            </Text>
            <Box w={20} h="0.5" backgroundColor="#00ff2a"></Box>
            <Link href={"#"} _hover={{ color: "#ff783d" }}>
              Okcart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Patna, 520035, Bihar, India<br/>
              Phone- <span style={{color:"blue"}}  >0000000000</span> 
            </Link>
          </Stack>
          {/* sec */}
          <Stack p={"0px 30px"} align={"flex-start"}>
            <Text mb="-2" color={"white"} fontSize={25} fontWeight="bold">
              Support
            </Text>
            <Box w={20} h="0.5" backgroundColor="#00ff2a"></Box>
            <Link href={"#"} _hover={{ color: "#ff783d" }}>
              Contact Us
            </Link>
            <Link href={"#"} _hover={{ color: "#ff783d" }}>
              Disclaimer
            </Link>
            <Link href={"#"} _hover={{ color: "#ff783d" }}>
              Privacy Policy
            </Link>
            <Link href={"#"} _hover={{ color: "#ff783d" }}>
              Terms and Conditions
            </Link>
            <Link href={"#"} _hover={{ color: "#ff783d" }}>
              Refund Policy
            </Link>
            <Link href={"#"} _hover={{ color: "#ff783d" }}>
              End User License Agreement
            </Link>
          </Stack>
          {/* third */}
          <Stack p={"0px 30px"} align={"flex-start"}>
            <Text mb="-2" color={"white"} fontSize={25} fontWeight="bold">
              Useful Links
            </Text>
            <Box w={20} h="0.5" backgroundColor="#00ff2a"></Box>
            <Link href={"#"} _hover={{ color: "#ff783d" }}>
              About Us
            </Link>
            <Link href={"#"} _hover={{ color: "#ff783d" }}>
              Become A Seller
            </Link>
            <Link href={"#"} _hover={{ color: "#ff783d" }}>
              Become An Affiliate
            </Link>
            <br />
            <Flex justifyContent={"space-between"} gap="10px" w="55%">
              <Box>
                <Image src="data:image/png;base64,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" />
              </Box>
              <Box>
                <Image src="data:image/png;base64,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" />
              </Box>
              <Box>
                <Image src="data:image/png;base64,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" />
              </Box>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>
      {/* last */}
      <Box  pb="25px" w="100%" m={"auto"} textAlign="center">
        <Divider w={"100%"} />
        <Divider w={"100%"} />
        <Text mt={6}>
          All Rights Reserved © 2023 | OKCART PRIVATE LIMITED
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
