import {
  Box,
  Button,
  Divider,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CartPopOver = ({ setShow }) => {
  const hstyle = {
    overflowX: "auto",
    scrollBehavior: "smooth",
    position: "relative",
  };

  return (
    <Box
      style={{
        display: "flex",
        position: "fixed",
        maxHeight: "300px",
        padding: "10px 0px",
        top: "50px",
        zIndex: "1000",
        background: "#ffffff",
        boxShadow: `rgba(0, 0, 0, 0.56) 0px 22px 70px 4px`,
        flexDirection: "column",
      }}
      w={["96%", "96%", "70%", "50%"]}
      marginLeft={["2%", "2%", "15%", "25%"]}
      borderRadius="5px"
    >
      <Text fontSize={"2xl"} textAlign="center">
        Total Items:
      </Text>
      <Divider w={"100%"} mt={2} mb={2} />
      <Box style={hstyle} w="95%" margin={"auto"}>
        <TableContainer>
          <Table size="sm">
            <Thead bgColor={"#adaaaa"}>
              <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th>Qty</Th>
                <Th>Remove</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>SOftwere</Td>
                <Td>(Rs) 4000</Td>
                <Td>4</Td>
                <Td textDecoration={"underline"} color="blue" cursor="pointer">
                  Remove
                </Td>
              </Tr>
              <Tr>
                <Td>SOftwere</Td>
                <Td>(Rs) 4000</Td>
                <Td>4</Td>
                <Td textDecoration={"underline"} color="blue" cursor="pointer">
                  Remove
                </Td>
              </Tr>
              <Tr>
                <Td>SOftwere</Td>
                <Td>(Rs) 4000</Td>
                <Td>4</Td>
                <Td textDecoration={"underline"} color="blue" cursor="pointer">
                  Remove
                </Td>
              </Tr>
              <Tr>
                <Td>SOftwere</Td>
                <Td>(Rs) 4000</Td>
                <Td>4</Td>
                <Td textDecoration={"underline"} color="blue" cursor="pointer">
                  Remove
                </Td>
              </Tr>
              <Tr>
                <Td>SOftwere</Td>
                <Td>(Rs) 4000</Td>
                <Td>4</Td>
                <Td textDecoration={"underline"} color="blue" cursor="pointer">
                  Remove
                </Td>
              </Tr>
              <Tr>
                <Td>SOftwere</Td>
                <Td>(Rs) 4000</Td>
                <Td>4</Td>
                <Td textDecoration={"underline"} color="blue" cursor="pointer">
                  Remove
                </Td>
              </Tr>
              <Tr>
                <Td>SOftwere</Td>
                <Td>(Rs) 4000</Td>
                <Td>4</Td>
                <Td textDecoration={"underline"} color="blue" cursor="pointer">
                  Remove
                </Td>
              </Tr>
              <Tr>
                <Td>SOftwere</Td>
                <Td>(Rs) 4000</Td>
                <Td>4</Td>
                <Td textDecoration={"underline"} color="blue" cursor="pointer">
                  Remove
                </Td>
              </Tr>
              <Tr>
                <Td>SOftwere</Td>
                <Td>(Rs) 4000</Td>
                <Td>4</Td>
                <Td textDecoration={"underline"} color="blue" cursor="pointer">
                  Remove
                </Td>
              </Tr>
              <Tr>
                <Td>SOftwere</Td>
                <Td>(Rs) 4000</Td>
                <Td>4</Td>
                <Td textDecoration={"underline"} color="blue" cursor="pointer">
                  Remove
                </Td>
              </Tr>
              <Tr>
                <Td>SOftwere</Td>
                <Td>(Rs) 4000</Td>
                <Td>4</Td>
                <Td textDecoration={"underline"} color="blue" cursor="pointer">
                  Remove
                </Td>
              </Tr>
              <Tr>
                <Td>SOftwere</Td>
                <Td>(Rs) 4000</Td>
                <Td>4</Td>
                <Td textDecoration={"underline"} color="blue" cursor="pointer">
                  Remove
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Text h="25px" w="95%" margin={"auto"} textAlign="center" bgColor={"#adaaaa"}>
        Total Price:{" "}
      </Text>
      <Divider w={"100%"} mt={2} mb={2} />
      <Flex justifyContent={"end"}>
       <Link to={"/payment"} > <Button onClick={() => setShow(false)} size={"sm"} colorScheme={"orange"} mr={5}>
          Checkout
        </Button></Link>
        <Link to={"/cart"} ><Button onClick={() => setShow(false)} size={"sm"} colorScheme={"orange"} mr={5}>
          Cart Page
        </Button></Link>
        <Button
          onClick={() => setShow(false)}
          size={"sm"}
          colorScheme={"orange"}
          mr={5}
        >
          Close
        </Button>
      </Flex>
    </Box>
  );
};

export default CartPopOver;
