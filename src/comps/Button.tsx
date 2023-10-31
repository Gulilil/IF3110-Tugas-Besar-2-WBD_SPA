import React from "react";
import { Flex } from "@chakra-ui/react";

export const Button = ({
  text,
  onClick,
  bgColor,
  color,
}: {
  text?: string;
  onClick?: () => void;
  bgColor?: string;
  color? : string;
}) => {
  return (
    <Flex
      onClick={onClick}
      py={"5px"}
      px={"20px"}
      bgColor={bgColor}
      justifyContent={"center"}
      alignItems={"center"}
      cursor={"pointer"}
      fontWeight={"bold"}
      borderRadius={"5px"}
      color={color}
      transitionDuration="0.2s"
      transitionTimingFunction= "ease-in-out"
      _hover={{
        transitionDuration:"0.2s",
        transitionTimingFunction: "ease-in-out",
        opacity: "0.6",
      }}
    >
      {text}
    </Flex>
  );
};
