import React from "react";
import { Button } from "@chakra-ui/react";

export const ButtonComps = ({
  text,
  onClick,
  bgColor,
  color,
  width,
  disabled,
}: {
  text? : string;
  onClick?: () => void;
  bgColor?: string;
  color? : string;
  width? : string | number;
  disabled? : boolean
}) => {
  return (
    <Button
      display={disabled? "none" : "flex"}
      onClick={onClick}
      py={"5px"}
      px={"15px"}
      bgColor={bgColor}
      justifyContent={"center"}
      alignItems={"center"}
      cursor={"pointer"}
      fontWeight={"bold"}
      borderRadius={"5px"}
      color={color}
      width={width}
      minW={"100px"}
      transitionDuration="0.2s"
      transitionTimingFunction= "ease-in-out"
      _hover={{
        transitionDuration:"0.2s",
        transitionTimingFunction: "ease-in-out",
        opacity: "0.6",
      }}
    >
      {text}
    </Button>
  );
};
