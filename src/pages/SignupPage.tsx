import React, {useState} from "react";
import { FullHeightPageWithBackground } from "../comps/FullHeightPageWithBackground";
import { Flex, Text, Wrap, WrapItem, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Button } from "../comps/Button";
import { Link } from "react-router-dom";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

export default function SignupPage() {
  const [validEmail, setValidEmail] = useState(false);
  const [validUsername, setValidUsername] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const handleSubmit = () => {
    console.log("signup click");
  };

  return (
    <FullHeightPageWithBackground background="wallpaper/signup.jpg">
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
          Make your own account
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
            <Text fontWeight={"bold"}> Email </Text>
            <InputGroup>
              <Input
                width={"full"}
                variant="flushed"
                placeholder="Enter your email"
              />
              <InputRightElement>
                <CheckIcon color={"green"} display={validEmail ? "block" : "none"}/>
                <CloseIcon color={"red"} display={validEmail ? "none" : "block"}/>
              </InputRightElement>
            </InputGroup>
          </Flex>


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
              text="Signup"
              bgColor="blue_cobalt"
              color="white"
              width={"200px"}
              onClick={() => handleSubmit()}
            />
          </Flex>
        </Flex>

        <Wrap spacing="20px" flexDir={"row"} justify={"center"}>
          <WrapItem>
            <Link to="/login">
              <Flex
                maxW={{ base: "95%", lg: "180px" }}
                gap="10px"
                flexDir={"column"}
              >
                <Text textAlign={"center"}>
                  {" "}
                  Have already made an account?{" "}
                </Text>
                <Button text="Login" bgColor="yellow_golden" color="white" />
              </Flex>
            </Link>
          </WrapItem>

          <WrapItem>
            <Link to="/reference">
              <Flex
                maxW={{ base: "95%", lg: "180px" }}
                gap="10px"
                flexDir={"column"}
              >
                <Text textAlign={"center"}>
                  {" "}
                  Signup and link to InfoAnimeMasse{" "}
                </Text>
                <Button
                  text="InfoAnimeMasse"
                  bgColor="red_orange"
                  color="white"
                />
              </Flex>
            </Link>
          </WrapItem>
        </Wrap>
      </Flex>
    </FullHeightPageWithBackground>
  );
}
