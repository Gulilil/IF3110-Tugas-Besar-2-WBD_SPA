import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useLocation, Link } from "react-router-dom";

export const Footer = () => {

  const location = useLocation();
  const parentPath = location.pathname.split('/')[1];
  if (parentPath === "signup" || parentPath === "login" || parentPath === "reference") return null;

  return (
    <Flex
      width={"full"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"red_orange"}
      flexDir={"column"}
      py={"20px"}
      gap={"20px"}
    >
      <Flex
        width={"80%"}
        mx={"auto"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"white"}
        fontWeight={"bold"}
        fontSize={"20px"}
        gap={"3vw"}
      >
        <Link to="/">
          <Text cursor={"pointer"} _hover={{ color: "black_matte" }}>
            {" "}
            Home{" "}
          </Text>
        </Link>
        <Link to="/forum">
          <Text cursor={"pointer"} _hover={{ color: "black_matte" }}>
            {" "}
            Explore{" "}
          </Text>
        </Link>
        <Link to="/profile">
          <Text cursor={"pointer"} _hover={{ color: "black_matte" }}>
            {" "}
            Profile{" "}
          </Text>
        </Link>
      </Flex>

      <Flex
        mx={"auto"}
        fontWeight={"bold"}
        color={"black_matte"}
        textAlign={"center"}
      >
        © Powered by Kelompok 8 <br />
        IF3110 - Pengembangan Aplikasi Berbasis Web
      </Flex>
    </Flex>
  );
};
