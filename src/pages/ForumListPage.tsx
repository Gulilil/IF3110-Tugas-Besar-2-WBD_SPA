import React, { useState } from "react";
import {
  Flex,
  Wrap,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ForumData } from "../dummy/AllData";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { ButtonComps } from "../comps/ButtonComps";
import { PostForm } from "../comps/PostForm";

const SORT_OPTION = ["Recent Forum", "Most Replies", "Forum Title"];
const OPTION_HEIGHT = "50px";

export default function ForumListPage() {
  const [sortBy, setSortBy] = useState("Recent Forum");
  const [newForumPopup, setNewForumPopup] = useState(false);

  const handleSortBy = (sort: string) => {
    setSortBy(sort);
  };
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"start"}
      alignItems={"center"}
      w={"90%"}
      py={"20px"}
      gap={"20px"}
    >
      {/* Options */}
      <Flex
        w={"full"}
        flexDir={{ base: "column", lg: "row" }}
        bgColor={"black_matte"}
        minHeight={OPTION_HEIGHT}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={"5vh"}
        py={"10px"}
        borderRadius={"10px"}
        gap={"20px"}
      >
        <Flex
          color={"white"}
          gap={{ base: "10px", md: "0px" }}
          flexDir={{ base: "column", md: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontWeight={"bold"} mr={"10px"}>
            {" "}
            Sorted By :{" "}
          </Text>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            {SORT_OPTION.map((item) => {
              return (
                <Text
                  fontWeight={"bold"}
                  color={"white"}
                  bgColor={item === sortBy ? "red_orange" : "black_matte"}
                  height={OPTION_HEIGHT}
                  minW={{ base: "0px", md: "100px" }}
                  textAlign={"center"}
                  cursor={"pointer"}
                  transitionDuration={"0.2s"}
                  transitionTimingFunction={"ease-in-out"}
                  px={{ base: "5px", md: "10px" }}
                  py={{base: "0px", md: "10px"}}
                  onClick={() => handleSortBy(item)}
                  _hover={{
                    color: item === sortBy ? "white" : "red_orange",
                    transitionDuration: "0.2s",
                    transitionTimingFunction: "ease-in-out",
                  }}
                >
                  {item}
                </Text>
              );
            })}
          </Flex>
        </Flex>

        <Flex>
          <InputGroup>
            <Input
              width={{ base: "300px", md: "350px" }}
              bgColor={"white"}
              borderRadius={"20px"}
              placeholder="Search the forum title..."
            />
            <InputLeftElement>
              <SearchIcon />
            </InputLeftElement>
          </InputGroup>
        </Flex>
      </Flex>

      <Flex
        flexDir={"row"}
        w={"full"}
        justifyContent={"start"}
        alignItems={"center"}
        gap={"30px"}
      >
        <Flex w={"full"} h={"2px"} bgColor={"#787878"} />
        <ButtonComps
          text="New Forum"
          bgColor="red_orange"
          color="white"
          onClick={() => {setNewForumPopup(true)}}
        />
      </Flex>

      <Wrap justify={"center"} spacing={"15px"} w={"full"}>
        {ForumData.map((data) => {
          return (
            <Link to={data.id.toString()}>
              <Flex
                w={{ base: "90vw", md: "40vw" }}
                h={"100px"}
                backgroundColor={"white"}
                cursor={"pointer"}
                border={"2px black solid"}
                transitionDuration={"0.2s"}
                transitionTimingFunction={"ease-in-out"}
                justifyContent={"center"}
                py={"10px"}
                px={"25px"}
                flexDir={"column"}
                _hover={{
                  borderRadius: "15px",
                  transitionDuration: "0.2s",
                  transitionTimingFunction: "ease-in-out",
                  shadow: "xl",
                  zIndex: "2",
                }}
              >
                <Text
                  w={"full"}
                  textAlign={"left"}
                  fontWeight={"bold"}
                  fontSize={"18px"}
                  noOfLines={1}
                >
                  {" "}
                  {data.title}{" "}
                </Text>

                <Text
                  w={"full"}
                  textAlign={"left"}
                  fontWeight={"bold"}
                  fontSize={"16px"}
                  color={"#898989"}
                  noOfLines={1}
                >
                  {`Nama Author - ` + data.created_at}
                </Text>
              </Flex>
            </Link>
          );
        })}
      </Wrap>

      {/* New Forum Popup */}
      <PostForm open={newForumPopup} setClose={() => setNewForumPopup(false)} isForum={true}/>
    </Flex>
  );
}
