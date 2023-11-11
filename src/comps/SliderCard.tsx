import { Flex, Text } from "@chakra-ui/react";
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
    <Flex >
      <Text> {title} </Text>
    </Flex>
  );
};
