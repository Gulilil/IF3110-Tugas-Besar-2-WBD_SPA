import React from "react";
import { FullHeightPageWithBackground } from "../comps/FullHeightPageWithBackground";
import { Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Button } from "../comps/Button";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <FullHeightPageWithBackground background="wallpaper/signup.jpg">
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
          Make your own account
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
                <Text textAlign={"center"}>
                  {" "}
                  Have already made an account?{" "}
                </Text>
                <Button text="Login" bgColor="yellow_golden" color="white" />
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
