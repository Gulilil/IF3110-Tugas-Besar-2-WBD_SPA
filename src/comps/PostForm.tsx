import { Flex, Input, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import PopupWithBlackOverlay from "./PopupWithBlackOverlay";
import { ButtonComps } from "./ButtonComps";

export const PostForm = ({
  open,
  setClose,
  isForum,
  initialContent,
}: {
  open: boolean;
  setClose: () => void;
  isForum: boolean;
  initialContent?: string;
}) => {
  const [titleHolder, setTitleHolder] = useState("");
  const [contentHolder, setContentHolder] = useState(initialContent? initialContent : "");

  const handleSubmit = () => {
    console.log("clicked");
  };

  return (
    <PopupWithBlackOverlay open={open} setClose={setClose}>
      <Flex
        bgColor={"light_gray"}
        px={"30px"}
        py={"15px"}
        borderRadius={"10px"}
        flexDir={"column"}
        minW={{ base: "90vw", md: "600px" }}
        gap={"10px"}
      >
        <Text fontWeight={"bold"} textAlign={"center"}>
          {isForum
            ? "Add a New Forum"
            : initialContent 
            ? "Edit a Reply"
            : "Add a New Reply"}
        </Text>

        <Flex
          flexDir={"column"}
          gap={"10px"}
          display={isForum ? "flex" : "none"}
        >
          <Text fontWeight={"bold"}> Title </Text>
          <Input
            placeholder="Type the topic title..."
            variant={"flushed"}
            onChange={(e) => setTitleHolder(e.target.value)}
          />
        </Flex>

        <Flex flexDir={"column"} gap={"10px"}>
          <Text fontWeight={"bold"}> Content </Text>
          <Textarea
            placeholder="Type your topic to be discussed..."
            value={contentHolder}
            fontWeight={600}
            height={"200px"}
            resize={"none"}
            py={3}
            borderWidth={"2.5px"}
            borderRadius={"10px"}
            overflowY="auto"
            onChange={(e) => setContentHolder(e.target.value)}
            sx={{
              "::-webkit-scrollbar": {
                width: "5px",
              },
              "::-webkit-scrollbar-track": {
                background: "rgb(68,70,84)",
              },
              "::-webkit-scrollbar-thumb": {
                background: "rgba(217,217,227,.8)",
              },
            }}
            _focus={{
              borderColor: "#FFFFFF",
              borderWidth: "0",
              outline: "none",
            }}
            id="textarea"
          />
        </Flex>

        <ButtonComps
          text="Add Forum"
          bgColor="red_orange"
          color="white"
          onClick={() => {
            handleSubmit();
          }}
          disabled={
            isForum
              ? titleHolder.length === 0 || contentHolder.length === 0
              : contentHolder.length === 0
          }
        />
      </Flex>
    </PopupWithBlackOverlay>
  );
};
