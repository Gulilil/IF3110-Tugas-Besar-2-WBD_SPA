import React, { useState } from "react";
import { FullHeightPageWithBackground } from "../comps/FullHeightPageWithBackground";
import {
  Flex,
  Text,
  Wrap,
  WrapItem,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ButtonComps } from "../comps/ButtonComps";
import { Link } from "react-router-dom";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

export default function ReferencePage() {
  const [usernameHolder, setUsernameHolder] = useState("");
  const [passwordHolder, setPasswordHolder] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const handleSubmit = () => {
    console.log("clicked")
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
    <FullHeightPageWithBackground background="wallpaper/reference.jpg">
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
          Signup and link to InfoAnimeMasse Account{" "}
        </Text>

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

        <Wrap spacing="20px" flexDir={"row"} justify={"center"}>
          <WrapItem>
            <Link to="/profile">
              <ButtonComps
                text="Go Back"
                bgColor="yellow_golden"
                color="white"
              />
            </Link>
          </WrapItem>

          <WrapItem>
            <ButtonComps
              text="Link Account"
              bgColor="red_orange"
              color="white"
              onClick={() => handleSubmit()}
              disabled={!validUsername || !validPassword}
            />
          </WrapItem>
        </Wrap>
      </Flex>
    </FullHeightPageWithBackground>
  );
}
