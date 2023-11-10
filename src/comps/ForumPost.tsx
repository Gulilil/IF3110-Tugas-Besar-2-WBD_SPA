import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ImageComps } from "./ImageComps";

export const ForumPost = ({
  width,
  headerBgColor,
  text,
  date,
  authorName,
  authorImage,
  post_id,
}: {
  width?: string | number;
  headerBgColor?: string;
  text: string;
  date: string;
  authorName: string;
  authorImage?: string;
  post_id: string | number;
}) => {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      w={width}
      my={"20px"}
    >
      {/* Header */}
      <Flex
        bgColor={headerBgColor}
        justifyContent={"space-between"}
        fontSize={"18px"}
        fontWeight={"bold"}
        py={"10px"}
        px={"30px"}
        color={"white"}
        w={"full"}
      >
        <Text> {date} </Text>
        <Text> {`#${post_id}`} </Text>
      </Flex>

      {/* Content */}
      <Flex flexDir={{ base: "column", md: "row" }} w={"full"}>
        {/* Author */}
        <Flex
          padding={"20px"}
          border={"2px black solid"}
          flexDir={"column"}
          alignItems={"center"}
          gap={"10px"}
        >
          <ImageComps width={"150px"} height={"150px"} />
          <Text fontWeight={"bold"}> {`Author Name`} </Text>
        </Flex>
        {/* Post Content */}
        <Flex
          padding={"20px"}
          border={"2px black solid"}
          borderLeft={{ base: "2px black solid", md: "none" }}
          borderTop = {{base: "none", md: "2px black solid"}}
          w={"full"}
        >
          <Text whiteSpace={"pre-line"} textAlign={"justify"}>
            {text}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
