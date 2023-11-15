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
import { Link, useNavigate } from "react-router-dom";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { REST_URL } from "../constant/constant";

export default function SignupPage() {
  const navigate = useNavigate();
  const [usernameHolder, setUsernameHolder] = useState("");
  const [passwordHolder, setPasswordHolder] = useState("");
  const [emailHolder, setEmailHolder] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validUsername, setValidUsername] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const handleSubmit = async () => {
    const requestBody = {
      "email": emailHolder, 
      "username": usernameHolder, 
      "password": passwordHolder
    };

    const response = await fetch(REST_URL+"/client", {
      method:"POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(requestBody),
    })

    const data = await response.json();

    if (!response.ok){
      alert(data.message);
    } else {
      localStorage.setItem("token", `Bearer ${data.token}`);
      navigate("/");
    }
  };

  const checkEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailHolder(e.target.value);
    if (e.target.value.toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

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
                value={emailHolder}
                onChange={(e) => checkEmail(e)}
              />
              <InputRightElement>
                <CheckIcon
                  color={"green"}
                  display={validEmail ? "block" : "none"}
                />
                <CloseIcon
                  color={"red"}
                  display={validEmail ? "none" : "block"}
                />
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
              text="Signup"
              bgColor="blue_cobalt"
              color="white"
              width={"200px"}
              onClick={() => handleSubmit()}
              disabled={!validEmail || !validUsername || !validPassword}
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
          <Text textAlign={"center"}> Have already made an account? </Text>
          <Link to="/login">
            <ButtonComps text="Login" bgColor="yellow_golden" color="white" />
          </Link>
        </Flex>
      </Flex>
    </FullHeightPageWithBackground>
  );
}
