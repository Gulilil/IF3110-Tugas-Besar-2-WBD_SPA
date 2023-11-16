import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Wrap,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { ImageComps } from "../comps/ImageComps";
import { ButtonComps } from "../comps/ButtonComps";
import PopupWithBlackOverlay from "../comps/PopupWithBlackOverlay";
import { Link } from "react-router-dom";
import { REST_URL } from "../constant/constant";

const PROFILE_PIC_SIZE = "200px";

export default function ProfilePage() {
  const [editPopup, setEditPopup] = useState(false);
  const [usernameHolder, setUsernameHolder] = useState("");
  const [passwordHolder, setPasswordHolder] = useState("");
  const [emailHolder, setEmailHolder] = useState("");
  const [imageHolder, setImageHolder] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  

  const getReferenceData = async () => {
    const response = await fetch(REST_URL + "/soap", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token") ?? "",
      },
    });

    const data = await response.json();
    console.log(data.message);
    if (!response.ok){
      alert(data.message);
    } else {
      alert(data.message);
    }

  };

  useEffect(() => {
    getReferenceData();
  },[])
  

  const handleEditSubmit = () => {
    setEditPopup(false);
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
    <Flex
      flexDir={{ base: "column", md: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"32px"}
      border={"2px solid black"}
      py={"30px"}
      px={"50px"}
      my={"20px"}
    >
      <ImageComps
        width={PROFILE_PIC_SIZE}
        height={PROFILE_PIC_SIZE}
        rounded="full"
      />

      <Box
        backgroundColor={"black_matte"}
        minH={{ base: "3px", md: "250px" }}
        minW={{ base: "full", md: "3px" }}
      />

      <Flex
        flexDir={"column"}
        gap="10px"
        justifyContent={{ base: "center", md: "start" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Text fontSize={"24px"} fontWeight={"bold"}>
          {" "}
          {`Username`}{" "}
        </Text>
        <Text> {`User ID: ..`}</Text>

        <Text> {`Points: `}</Text>

        <Text> {`Follower Counts: `}</Text>
        <ButtonComps
          text="Edit Profile"
          bgColor="blue_cobalt"
          color="white"
          onClick={() => setEditPopup(true)}
        />

        {/* <ButtonComps
          text="Follow"
          bgColor="blue_cobalt"
          color="white"
          onClick={() => {}}
        /> */}

        {/* <ButtonComps
          text="Unfollow"
          bgColor="yellow_golden"
          color="white"
          onClick={() => {}}
        /> */}


        <Link to="/reference">
          <ButtonComps text="Link Account" bgColor="red_orange" color="white" />
        </Link>
        {/* <ButtonComps
          text="Unlink Account"
          bgColor="yellow_golden"
          color="white"
          onClick={() => {}}
        /> */}
      </Flex>

      <PopupWithBlackOverlay
        open={editPopup}
        setClose={() => setEditPopup(false)}
      >
        <Flex
          flexDir={"column"}
          backgroundColor={"white"}
          padding={"20px"}
          gap={"20px"}
          maxW={{base: "90%", md:"70%"}}
          mx={"auto"}
        >
          <Text mx={"auto"} fontWeight={"bold"} fontSize={"24px"}>
            {" "}
            Edit Profile{" "}
          </Text>
          <Wrap mx={"auto"} spacing={"20px"} justify={"space-evenly"}>
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

            <Flex flexDir={"column"} gap={"10px"}>
              <Text fontWeight={"bold"}> Image </Text>
              <InputGroup>
                <Input
                  width={"full"}
                  variant="flushed"
                  placeholder="Enter your email"
                  value={imageHolder}
                  onChange={(e) => setImageHolder(e.target.value)}
                />
              </InputGroup>
            </Flex>
          </Wrap>

          <Flex justifyContent={"center"} alignItems={"center"}>
            <ButtonComps
              text="Edit Profile"
              bgColor="yellow_golden"
              width={"200px"}
              color="white"
              onClick={() => handleEditSubmit()}
              disabled={!validPassword || !validUsername}
            />
          </Flex>
        </Flex>
      </PopupWithBlackOverlay>
    </Flex>
  );
}
