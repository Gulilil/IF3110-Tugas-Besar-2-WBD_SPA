import React, {useState} from "react";
import { FullHeightPageWithBackground } from "../comps/FullHeightPageWithBackground";
import { Flex, Text, Wrap, WrapItem, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Button } from "../comps/Button";
import { Link } from "react-router-dom";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

export default function LoginPage() {
  const [validUsername, setValidUsername] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const handleSubmit = () => {
    console.log("login click");
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
              />
              <InputRightElement>
                <CheckIcon color={"green"} display={validUsername ? "block" : "none"}/>
                <CloseIcon color={"red"} display={validUsername ? "none" : "block"}/>
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
              />
              <InputRightElement>
                <CheckIcon color={"green"} display={validPassword ? "block" : "none"}/>
                <CloseIcon color={"red"} display={validPassword ? "none" : "block"}/>
              </InputRightElement>
            </InputGroup>
          </Flex>

          <Flex justifyContent={"center"} alignItems={"center"}>
            <Button
              text="Login"
              bgColor="yellow_golden"
              width={"200px"}
              color="white"
              onClick={() => handleSubmit()}
            />
          </Flex>
        </Flex>

        <Wrap spacing="20px" flexDir={"row"} justify={"center"}>
          <WrapItem>
            <Flex
              maxW={{ base: "95%", lg: "180px" }}
              gap="10px"
              flexDir={"column"}
            >
              <Text textAlign={"center"}> Does not have an account yet? </Text>
              <Link to="/signup">
                <Button text="Signup" bgColor="blue_cobalt" color="white" />
              </Link>
            </Flex>
          </WrapItem>

          <WrapItem>
            <Flex
              maxW={{ base: "95%", lg: "180px" }}
              gap="10px"
              flexDir={"column"}
            >
              <Text textAlign={"center"}>
                {" "}
                Signup and link to InfoAnimeMasse{" "}
              </Text>
              <Link to="/reference">
                <Button
                  text="InfoAnimeMasse"
                  bgColor="red_orange"
                  color="white"
                />
              </Link>
            </Flex>
          </WrapItem>
        </Wrap>
      </Flex>
    </FullHeightPageWithBackground>
  );
}
