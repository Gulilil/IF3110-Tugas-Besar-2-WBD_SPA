import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsQuestionDiamond } from "react-icons/bs";
import { ButtonComps } from "../comps/ButtonComps";
import { Link } from "react-router-dom";

export default function ErrorPage() {
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
          Oh no! I think you're lost !{" "}
        </Text>

        <Text> There's nothing here, maybe you should go back.</Text>

        <Flex w={"full"} justifyContent={{base:"center", md:"start"}}>
          <Link to="/">
            <ButtonComps text="Go Back" bgColor="yellow_golden" color="white" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
