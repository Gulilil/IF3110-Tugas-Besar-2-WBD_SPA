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
import { Link, useNavigate } from "react-router-dom";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { REST_URL } from "../constant/constant";

export default function ReferencePage() {
  const navigate = useNavigate();
  const [referalHolder, setReferalHolder] = useState("");
  const [validReferal, setValidReferal] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await fetch(REST_URL+'/soap',{
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token") ?? "",
          "Content-Type": "application/json",
        },
        body : JSON.stringify({
          referralCode : referalHolder
        })
      })

      const data = await response.json();
      if (!response.ok){
        alert(data.message);
      } else {
        alert(data.message);
        navigate("/profile");
        window.location.reload();
      }
      

    } catch (error) {
      console.error("Error linking data", error);
    }
  }

  const checkReferal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReferalHolder(e.target.value);
    if (e.target.value.length === 20) {
      setValidReferal(true);
    } else {
      setValidReferal(false);
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
          <Text fontWeight={"bold"}> Referal Code </Text>
          <InputGroup>
            <Input
              width={"full"}
              variant="flushed"
              placeholder="Enter your referal code"
              value={referalHolder}
              onChange={(e) => checkReferal(e)}
            />
            <InputRightElement>
              <CheckIcon
                color={"green"}
                display={validReferal ? "block" : "none"}
              />
              <CloseIcon
                color={"red"}
                display={validReferal ? "none" : "block"}
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
              disabled={!validReferal}
            />
          </WrapItem>
        </Wrap>
      </Flex>
    </FullHeightPageWithBackground>
  );
}
