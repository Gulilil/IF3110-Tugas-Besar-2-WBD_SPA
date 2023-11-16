import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonComps } from "./ButtonComps";

export const Sidebar = ({
  open,
  setClose,
  setLogout,
}: {
  open: boolean;
  setClose: () => void;
  setLogout: () => void;
}) => {
  const navigate = useNavigate();

  const handleLogin = () =>{
    setClose();
    navigate("/login");
  }

  return (
    <Flex>
      <Flex
        position={"fixed"}
        h={"100vh"}
        w={"100vw"}
        top={0}
        left={open ? 0 : "-100vw"}
        bgColor={"black"}
        opacity={0.7}
        transitionDuration={"0.2s"}
        transitionTimingFunction={"ease-in-out"}
        onClick={() => setClose()}
      />
      <Flex
        position={"fixed"}
        top={0}
        left={open ? 0 : "-350px"}
        minW={"250px"}
        width={"50vw"}
        maxW={"350px"}
        height={"100vh"}
        bgColor={"black_matte"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={"white"}
        flexDir={"column"}
        py={"50px"}
        transitionDuration={"0.4s"}
        transitionTimingFunction={"ease-in-out"}
        gap={"50px"}
      >
        <Link to="/">
          <Text
            fontWeight={"bold"}
            color={"red_orange"}
            fontSize={"18px"}
            onClick={() => setClose()}
            _hover={{ color: "white" }}
          >
            {" "}
            InfoAnimeMasseForum{" "}
          </Text>
        </Link>

        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
          gap={"30px"}
          fontSize={"18px"}
          fontWeight={"bold"}
          padding={"20px"}
        >
          <Link to="/">
            <Text onClick={() => setClose()}> Home </Text>
          </Link>
          <Link to="/forum">
            <Text onClick={() => setClose()}> Explore </Text>
          </Link>
          <Link to="/profile">
            <Text onClick={() => setClose()}> Profile </Text>
          </Link>
        </Flex>

        {
          localStorage.getItem('token') ?
          <ButtonComps text="Logout" color="white" bgColor="red_orange" onClick={() => setLogout()}/>
          :
          <ButtonComps text="Login" color="white" bgColor="red_orange" onClick={() => handleLogin()}/>
        }
      </Flex>
    </Flex>
  );
};
