import React, { useState } from "react";
import {
  Flex,
  Wrap,
  WrapItem,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ForumData } from "../dummy/AllData";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

const SORT_OPTION = ["Recent Forum", "Most Replies", "Title"];
const OPTION_HEIGHT = "50px";

export default function ForumListPage() {
  const [sortBy, setSortBy] = useState("Recent Forum");

  const handleSortBy = (sort: string) => {
    setSortBy(sort);
  };
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"full"}
      py={"20px"}
    >
      <Flex
        w={"90%"}
        flexDir={{base:"column", lg:"row"}}
        bgColor={"black_matte"}
        minHeight={OPTION_HEIGHT}
        mb={"10px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={"5vh"}
        py={"10px"}
        borderRadius={"10px"}
        gap={"20px"}
      >
        <Flex color={"white"} justifyContent={"center"} alignItems={"center"}>
          <Text fontWeight={"bold"} mr={"10px"}>
            {" "}
            Sorted By :{" "}
          </Text>
          {SORT_OPTION.map((item) => {
            return (
              <Text
                fontWeight={"bold"}
                color={"white"}
                bgColor={item === sortBy ? "red_orange" : "black_matte"}
                height={OPTION_HEIGHT}
                minW={"100px"}
                textAlign={"center"}
                cursor={"pointer"}
                transitionDuration={"0.2s"}
                transitionTimingFunction={"ease-in-out"}
                padding={"10px"}
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

        <Flex >
          <InputGroup>
            <Input
              width={"350px"}
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
      {ForumData.map((data) => {
        return (
          <Link to={data.id.toString()}>
            <Flex
              w={"600px"}
              h={"100px"}
              backgroundColor={"white"}
              cursor={"pointer"}
              border={"2px black solid"}
              transitionDuration={"0.2s"}
              transitionTimingFunction={"ease-in-out"}
              p={"10px"}
              _hover={{
                borderRadius: "15px",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
                shadow: "xl",
                width: "640px",
                height: "120px",
                zIndex : "2",
              }}
            >
              <Text
                w={"full"}
                textAlign={"center"}
                fontWeight={"bold"}
                fontSize={"18px"}
              >
                {" "}
                {data.title}{" "}
              </Text>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
}
