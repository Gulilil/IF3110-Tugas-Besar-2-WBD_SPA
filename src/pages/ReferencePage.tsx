import React from 'react'
import { FullHeightPageWithBackground } from '../comps/FullHeightPageWithBackground'
import { Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Button } from "../comps/Button";
import { Link } from "react-router-dom";

export default function ReferencePage() {
  return (
    <FullHeightPageWithBackground background='wallpaper/reference.jpg'>
<Flex
        backgroundColor={"light_gray"}
        w={{ base: "90%", md: "600px" }}
        padding={"30px"}
        borderRadius={"20px"}
        boxShadow={"md"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={"20px"}
      >
        <Text fontSize={"20px"} fontWeight={"bold"} textAlign={"center"}>
          {" "}
          Signup and link to InfoAnimeMasse Account{" "}
        </Text>
        <Flex backgroundColor={"black_matte"} h={"200px"} w={"80%"}>
          {" "}
        </Flex>
        <Wrap spacing="20px" flexDir={"row"} justify={"center"}>

          <WrapItem>
            <Link to="/login">
              <Flex
                maxW={{ base: "95%", lg: "180px" }}
                gap="10px"
                flexDir={"column"}
              >
                <Text textAlign={"center"}> Have already made an account? </Text>
                <Button
                  text="Login"
                  bgColor="yellow_golden"
                  color="white"
                />
              </Flex>
            </Link>
          </WrapItem>

          <WrapItem>
            <Link to="/signup">
              <Flex
                maxW={{ base: "95%", lg: "180px" }}
                gap="10px"
                flexDir={"column"}
              >
                <Text textAlign={"center"}>
                  {" "}
                  Does not have an account yet?{" "}
                </Text>
                <Button text="Signup" bgColor="#2b76d8" color="white" />
              </Flex>
            </Link>
          </WrapItem>
        </Wrap>
      </Flex>
    </FullHeightPageWithBackground>
  )
}
