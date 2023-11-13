import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const SliderCard = ({
  image,
  title,
  text,
}: {
  image?: string;
  title: string;
  text: string;
}) => {
  return (
    <Flex
      w={"95%"}
      my={"20px"}
      aspectRatio={16 / 9}
      backgroundColor={"#898989"}
      mx={"auto"}
      flexDir={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      px={"10px"}
      gap={"20px"}
      borderRadius={"5px"}
    >
      <Flex
        h={"full"}
        aspectRatio={3 / 4}
        backgroundColor={"white"}
        justifyContent={"center"}
      >
        <Image src={image || "placeholder.jpg"} objectFit={"contain"} />
      </Flex>
      <Flex flexDirection={"column"} gap={"10px"}>
        <Text fontSize={"16px"} fontWeight={"bold"} noOfLines={2}> {title} </Text>
        <Text fontSize={"14px"} noOfLines={4}> {text} </Text>
      </Flex>
    </Flex>
  );
};
