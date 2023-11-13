import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { SliderHero } from "../comps/SliderHero";

export default function HomePage() {
  return (
    <Flex w={"full"} flexDir={"column"} py={"30px"}>
      <Text
        mx={"auto"}
        fontWeight={"bold"}
        fontSize={"24px"}
        textAlign={"center"}
      >
        {" "}
        Top 7 Anime of All Time{" "}
      </Text>
      <Flex
        maxH={{ base: "90vh", md: "50vh" }}
        w={"90%"}
        mx={"auto"}
        my={"20px"}
      >
        <SliderHero />
      </Flex>

      <Flex
        flexDir={{ base: "column", md: "row" }}
        w={"95%"}
        mx={"auto"}
        gap={"10px"}
      >
        <Flex
          w={"full"}
          borderTopLeftRadius={"20px"}
          border={"2px #ababab solid"}
          justifyContent={"center"}
          alignItems={"center"}
          py={"20px"}
          px={"10px"}
        >
          <Text fontWeight={"bold"}> Recent Forums </Text>
        </Flex>
        <Flex
          w={"full"}
          border={"2px black solid"}
          justifyContent={"center"}
          alignItems={"center"}
          py={"20px"}
          px={"10px"}
        >
          <Text fontWeight={"bold"}> Top Contributors </Text>
        </Flex>
        <Flex
          w={"full"}
          borderTopRightRadius={"20px"}
          border={"2px #ababab solid"}
          justifyContent={"center"}
          alignItems={"center"}
          py={"20px"}
          px={"10px"}
        >
          <Text fontWeight={"bold"}> Hot Topic Forums </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
