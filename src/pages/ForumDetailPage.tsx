import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";
import ErrorPage from "./ErrorPage";
import { ForumPost } from "../comps/ForumPost";
import { PostData } from "../dummy/AllData";
import { ButtonComps } from "../comps/ButtonComps";
import { PostForm } from "../comps/PostForm";

export default function ForumDetailPage() {
  const id = useParams().id;

  const [newReplyPopup, setNewReplyPopup]= useState(false);

  // if (!id not found) {
  //   return (<ErrorPage/>)
  // }

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      w={"90%"}
      py={"20px"}
    >
      <Text fontWeight={"bold"} fontSize={"24"}>
        {" "}
        {`ForumDetailPage with ID : ${id}`}{" "}
      </Text>

      {/* Main Content */}
      {PostData.map((data) => {
        if (data.forum_id.toString() === id && data.post_id === 1) {
          return (
            <ForumPost
              width={"full"}
              headerBgColor="red_orange"
              text={data.content}
              date={data.created_at}
              authorName={"aa"}
              post_id={data.post_id}
            />
          );
        }
      })}
 
      <Flex flexDir={"row"} w={"full"} justifyContent={"start"} alignItems={"center"} gap={"30px"} >
        <ButtonComps text="New Reply" bgColor="red_orange" color="white" onClick={() => {setNewReplyPopup(true)}}/>
        <Flex w={"full"} h={"2px"} bgColor={"#787878"} />
      </Flex>

      {/* Reply Content */}
      {PostData.map((data) => {
        if (data.forum_id.toString() === id && data.post_id !== 1) {
          return (
            <ForumPost
              width={"90%"}
              headerBgColor="blue_cobalt"
              text={data.content}
              date={data.created_at}
              authorName={"aa"}
              post_id={data.post_id}
            />
          );
        }
      })}

      {/* New Reply Popup */}
      <PostForm open={newReplyPopup} setClose={() => setNewReplyPopup(false)} isForum={false}/>
    </Flex>    
  );
}
