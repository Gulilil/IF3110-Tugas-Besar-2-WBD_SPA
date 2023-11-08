import React, { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { ImageComps } from "../comps/ImageComps";
import { ButtonComps } from "../comps/ButtonComps";
import PopupWithBlackOverlay from "../comps/PopupWithBlackOverlay";
import { Link } from "react-router-dom";

const PROFILE_PIC_SIZE = "200px";

export default function ProfilePage() {
  const [editPopup, setEditPopup] = useState(false);
  const [validUsername, setValidUsername] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  return (
    <Flex
      flexDir={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"32px"}
    >
      <ImageComps
        width={PROFILE_PIC_SIZE}
        height={PROFILE_PIC_SIZE}
        rounded="full"
      />
      <Box backgroundColor={"black_matte"} minH={"250px"} minW={"3px"} />
      <Flex flexDir={"column"} gap="10px">
        <Text fontSize={"24px"} fontWeight={"bold"}>
          {" "}
          {`Username`}{" "}
        </Text>
        <Text> {`User ID : ..`}</Text>

        <Text> {`Points : `}</Text>
        <ButtonComps
          text="Edit Profile"
          bgColor="blue_cobalt"
          color="white"
          onClick={() => setEditPopup(true)}
        />
        <Link to="/reference">
          <ButtonComps text="Link Account" bgColor="red_orange" color="white" />
        </Link>
      </Flex>

      <PopupWithBlackOverlay
        open={editPopup}
        setClose={() => setEditPopup(false)}
      >
        <Flex flexDir={"column"} backgroundColor={"white"} padding={"20px"}>
          <Text mx={"auto"} my={"20px"} fontWeight={"bold"} fontSize={"24px"}>
            {" "}
            Edit Profile{" "}
          </Text>
          <Flex flexDir={"column"} gap={"10px"}>
            <Text fontWeight={"bold"}> Username </Text>
            <InputGroup>
              <Input
                width={"full"}
                variant="flushed"
                placeholder="Enter your username"
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
        </Flex>
      </PopupWithBlackOverlay>
    </Flex>
  );
}
