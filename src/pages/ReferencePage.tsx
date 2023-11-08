import React from "react";
import { FullHeightPageWithBackground } from "../comps/FullHeightPageWithBackground";
import { Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { ButtonComps } from "../comps/ButtonComps";
import { Link } from "react-router-dom";

export default function ReferencePage() {
  return (
    <FullHeightPageWithBackground background="wallpaper/reference.jpg">
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
            <Link to="/profile">
                <ButtonComps text="Go Back" bgColor="yellow_golden" color="white" />
            </Link>
          </WrapItem>

          <WrapItem>
            <Link to="/">
                <ButtonComps text="Link Account" bgColor="red_orange" color="white" />
            </Link>
          </WrapItem>
        </Wrap>
      </Flex>
    </FullHeightPageWithBackground>
  );
}
