import React from "react";
import { Flex } from "@chakra-ui/react";

export const FullHeightPageWithBackground = ({
  children,
  background,
}: {
  children: string | JSX.Element | JSX.Element[];
  background? : string | undefined
}) => {
  return (
    <Flex       
    position={"fixed"}
    w={"100vw"}
    h={"100vh"}
    top={0}
    left={0}
    backgroundImage={background}
    backgroundPosition={"center"}
    backgroundSize={"cover"}
    >
      <Flex
        position={"relative"}
        w={"full"}
        h={"full"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {children}
      </Flex>
    </Flex>
  );
};
