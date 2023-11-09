import React from "react";
import { Flex, Image } from "@chakra-ui/react";

export const ImageComps = ({
  url,
  width,
  height,
  ratio,
  onClick,
  rounded,
}: {
  url?: string;
  width?: string | number;
  height?: string | number;
  ratio?: number;
  onClick?: () => void;
  rounded?: string;
}) => {
  return (
    <Flex
      width={width}
      height={height}
      aspectRatio={ratio}
      onClick={onClick}
      overflow={"hidden"}
      backgroundColor={"white"}
      borderRadius={rounded}
      justifyContent={"center"}
    >
      <Image
        src={url || "/placeholder.jpg"}
        alt={url}
        w={"full"}
        h={"full"}
        objectFit={"cover"}
        objectPosition={"center"}
      />
    </Flex>
  );
};
