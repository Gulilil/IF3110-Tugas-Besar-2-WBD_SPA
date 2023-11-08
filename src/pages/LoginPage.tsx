import React, { useState } from "react";
import { FullHeightPageWithBackground } from "../comps/FullHeightPageWithBackground";
import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ButtonComps } from "../comps/ButtonComps";
import { Link } from "react-router-dom";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

export default function LoginPage() {
  const [usernameHolder, setUsernameHolder] = useState("");
  const [passwordHolder, setPasswordHolder] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const handleSubmit = () => {
    console.log("login click");
  };

  const checkUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameHolder(e.target.value);
    if (e.target.value.length >= 8) {
      setValidUsername(true);
    } else {
      setValidUsername(false);
    }
  };

  const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordHolder(e.target.value);
    if (e.target.value.length > 0) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };

  return (
    <FullHeightPageWithBackground background="wallpaper/login.jpg">
      <Flex
        backgroundColor={"light_gray"}
        w={{ base: "90%", md: "600px" }}
        padding={"30px"}
        borderRadius={"20px"}
        boxShadow={"md"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={"20px"}
      >
        <Text fontSize={"20px"} fontWeight={"bold"} textAlign={"center"}>
          {" "}
          Log into your account{" "}
        </Text>

        <Flex
          backgroundColor={"white"}
          w={"80%"}
          mx={"auto"}
          padding={"15px"}
          borderRadius={"md"}
          flexDir={"column"}
          gap={"20px"}
        >
          <Flex flexDir={"column"} gap={"10px"}>
            <Text fontWeight={"bold"}> Username </Text>
            <InputGroup>
              <Input
                width={"full"}
                variant="flushed"
                placeholder="Enter your username"
                value={usernameHolder}
                onChange={(e) => checkUsername(e)}
              />
              <InputRightElement>
                <CheckIcon
                  color={"green"}
                  display={validUsername ? "block" : "none"}
                />
                <CloseIcon
                  color={"red"}
                  display={validUsername ? "none" : "block"}
                />
              </InputRightElement>
            </InputGroup>
          </Flex>

          <Flex flexDir={"column"} gap={"10px"}>
            <Text fontWeight={"bold"}> Password </Text>
            <InputGroup>
              <Input
                type="password"
                width={"full"}
                variant="flushed"
                placeholder="Enter your password"
                value={passwordHolder}
                onChange={(e) => checkPassword(e)}
              />
              <InputRightElement>
                <CheckIcon
                  color={"green"}
                  display={validPassword ? "block" : "none"}
                />
                <CloseIcon
                  color={"red"}
                  display={validPassword ? "none" : "block"}
                />
              </InputRightElement>
            </InputGroup>
          </Flex>

          <Flex justifyContent={"center"} alignItems={"center"}>
            <ButtonComps
              text="Login"
              bgColor="yellow_golden"
              width={"200px"}
              color="white"
              onClick={() => handleSubmit()}
              disabled={!validPassword || !validUsername}
            />
          </Flex>
        </Flex>

        <Flex
          maxW={{ base: "95%", lg: "180px" }}
          gap="10px"
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text textAlign={"center"}> Does not have an account yet? </Text>
          <Link to="/signup">
            <ButtonComps text="Signup" bgColor="blue_cobalt" color="white" />
          </Link>
        </Flex>
      </Flex>
    </FullHeightPageWithBackground>
  );
}
