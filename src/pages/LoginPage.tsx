import React from "react";
import { FullHeightPageWithBackground } from "../comps/FullHeightPageWithBackground";
import { Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Button } from "../comps/Button";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <FullHeightPageWithBackground background="wallpaper/login.jpg">
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
          Log into your account{" "}
        </Text>
        <Flex backgroundColor={"black_matte"} h={"200px"} w={"80%"}>
          {" "}
        </Flex>
        <Wrap spacing="20px" flexDir={"row"} justify={"center"}>
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
                <Button text="Signup" bgColor="blue_cobalt" color="white" />
              </Flex>
            </Link>
          </WrapItem>

          <WrapItem>
            <Link to="/reference">
              <Flex
                maxW={{ base: "95%", lg: "180px" }}
                gap="10px"
                flexDir={"column"}
              >
                <Text textAlign={"center"}> Signup and link to InfoAnimeMasse </Text>
                <Button
                  text="InfoAnimeMasse"
                  bgColor="red_orange"
                  color="white"
                />
              </Flex>
            </Link>
          </WrapItem>
        </Wrap>
      </Flex>
    </FullHeightPageWithBackground>
  );
}
