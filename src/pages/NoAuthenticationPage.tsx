import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsQuestionDiamond } from "react-icons/bs";
import { ButtonComps } from "../comps/ButtonComps";
import { Link } from "react-router-dom";

export default function NoAuthenticationPage() {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"20px"}
    >
      <BsQuestionDiamond size={"150px"} />
      <Flex
        textAlign={{ base: "center", md: "left" }}
        padding={"20px"}
        flexDir={"column"}
        gap={"10px"}
      >
        <Text fontWeight={"bold"} fontSize={"24px"}>
          {" "}
          Oopsie! You have not yet authenticated !{" "}
        </Text>

        <Text> You should sign in first to access the page.</Text>

        <Flex w={"full"} justifyContent={{base:"center", md:"start"}}>
          <Link to="/login">
            <ButtonComps text="Login" bgColor="red_orange" color="white" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
