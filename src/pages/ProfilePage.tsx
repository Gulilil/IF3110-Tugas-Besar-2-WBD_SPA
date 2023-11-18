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
import { Link, useFetcher } from "react-router-dom";
import { REST_URL } from "../constant/constant";

const PROFILE_PIC_SIZE = "200px";

interface UserData {
  id: number;
  username: string;
  email: string;
  password: string;
  image: string;
  linked: boolean;
  follower_count: number;
}

interface ApiResponse {
  message: string;
  data: UserData;
}

interface RefData {
  id: number;
  anime_account_id: number;
  forum_account_id: number;
  referral_code: string;
  point: number;
}

export default function ProfilePage() {
  const [editPopup, setEditPopup] = useState(false);
  const [usernameHolder, setUsernameHolder] = useState("");
  const [passwordHolder, setPasswordHolder] = useState("");
  const [emailHolder, setEmailHolder] = useState("");
  const [imageHolder, setImageHolder] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [refData, setRefData] = useState<RefData>();

  const getReferenceData = async () => {
    const response = await fetch(REST_URL + "/soap", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token") ?? "",
      },
    });

    const data = await response.json();
    console.log(data.message);
    if (!response.ok) {
      alert(data.message);
    } else {
      const text = data.message._text;
      const refData = text.data;
      setRefData(refData as RefData);
    }
  };

  useEffect(() => {
    getReferenceData();
  }, []);

  const [apiResponse, setApiResponse] = useState<ApiResponse>();

  const getApiResponse = async () => {
    try {
      const response = await fetch(`${REST_URL}/client/user`, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token") ?? "",
          "Content-Type": "application/json",
        },
      });

      const apiResponse = await response.json();
      const userData = apiResponse?.data;

      if (userData) {
        checkEmail(userData.email);
        checkUsername(userData.username);
        checkPassword(userData.password);
        setImageHolder(userData.image);
      }
      if (!response.ok) {
        alert(apiResponse.message);
      } else {
        setApiResponse(apiResponse as ApiResponse);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getApiResponse();
  }, []);

  const handleEditSubmit = () => {
    const editClient = async () => {
      try {
        const response = await fetch(`${REST_URL}/client`, {
          method: "PUT",
          headers: {
            Authorization: localStorage.getItem("token") ?? "",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailHolder,
            username: usernameHolder,
            password: passwordHolder,
            image: imageHolder,
          }),
        });

        const data = await response.json();
      } catch (error) {
        console.error("Error editing data: ", error);
      }
    };

    editClient();
    setEditPopup(false);
    window.location.reload();
  };

  const checkEmail = (text: string) => {
    setEmailHolder(text);
    if (text && text.toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const checkUsername = (text: string) => {
    setUsernameHolder(text);
    if (text && text.length >= 8) {
      setValidUsername(true);
    } else {
      setValidUsername(false);
    }
  };

  const checkPassword = (text: string) => {
    setPasswordHolder(text);
    if (text && text.length > 0) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };

  const userData = apiResponse?.data;

  const handleUnlink = async () => {
    try {
      const response = await fetch(REST_URL+'/soap',{
        method: "PUT",
        headers: {
          Authorization: localStorage.getItem("token") ?? "",
          "Content-Type": "application/json",
        },
      })

      const data = await response.json();
      if (!response.ok){
        alert(data.message);
      } else {
        alert(data.message);
        window.location.reload();
      }
      

    } catch (error) {
      console.error("Error linking data", error);
    }
  }

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
        url={userData ? userData.image : undefined}
      />

      <Box
        backgroundColor={"black_matte"}
        minH={{ base: "3px", md: "250px" }}
        minW={{ base: "full", md: "3px" }}
      />

      <Flex
        flexDir={"column"}
        backgroundColor={"white"}
        py={"20px"}
        px={"60px"}
        gap={"20px"}
        maxW={{ base: "90%", md: "70%" }}
        mx={"auto"}
        textAlign={{ base: "center", md: "left" }}
      >
        <Text fontSize={"24px"} fontWeight={"bold"}>
          {" "}
          {userData ? userData.username : `Username`}{" "}
        </Text>

        <Text fontWeight={"bold"}>
          {" "}
          {userData ? userData.email : `Username`}{" "}
        </Text>

        <Text>
          {" "}
          {userData ? `User ID: ` + userData.id.toString() : `User ID: -`}
        </Text>

        <Text> {`Points: `}</Text>

        <Text>
          {" "}
          {userData
            ? `Follower Counts: ` + userData.follower_count.toString()
            : `Follower Counts: -`}
        </Text>
        <ButtonComps
          text="Edit Profile"
          bgColor="blue_cobalt"
          color="white"
          onClick={() => setEditPopup(true)}
        />

        {!refData ? (
          <Link to="/reference">
            <ButtonComps
              text="Link Account"
              bgColor="red_orange"
              color="white"
            />
          </Link>
        ) : (
          <ButtonComps
            text="Unlink Account"
            bgColor="yellow_golden"
            color="white"
            onClick={() => handleUnlink()}
          />
        )}
      </Flex>

      <PopupWithBlackOverlay
        open={editPopup}
        setClose={() => setEditPopup(false)}
      >
        <Flex
          flexDir={"column"}
          backgroundColor={"white"}
          p={"20px"}
          gap={"20px"}
          maxW={{ base: "90%", md: "70%" }}
          mx={"auto"}
          borderRadius={"20px"}
        >
          <Text mx={"auto"} fontWeight={"bold"} fontSize={"24px"}>
            {" "}
            Edit Profile{" "}
          </Text>
          <Wrap
            spacing={"20px"}
            justify={{ base: "center", md: "space-between" }}
            px={"30px"}
          >
            <Flex flexDir={"column"} gap={"10px"}>
              <Text fontWeight={"bold"}> Email </Text>
              <InputGroup>
                <Input
                  width={"full"}
                  variant="flushed"
                  placeholder="Enter your email"
                  value={emailHolder}
                  onChange={(e) => checkEmail(e.target.value)}
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
                  onChange={(e) => checkUsername(e.target.value)}
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
                  onChange={(e) => checkPassword(e.target.value)}
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
                  placeholder="Enter your image"
                  value={imageHolder}
                  onChange={(e) => {
                    setImageHolder(e.target.value);
                  }}
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
