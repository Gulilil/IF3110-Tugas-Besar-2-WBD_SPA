import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";
import ErrorPage from "./ErrorPage";
import { ForumPost } from "../comps/ForumPost";
// import { PostData } from "../dummy/AllData";
import { ButtonComps } from "../comps/ButtonComps";
import { PostForm } from "../comps/PostForm";
import { REST_URL } from "../constant/constant";

interface ClientName {
  username: string;
  image: string;
}

interface PostData {
  id: number;
  post_id: number;
  forum_id: number;
  author_id: number;
  created_at: string;
  updated_at: string;
  content: string;
  client: ClientName;
}

interface ApiResponse {
  message: string;
  data: PostData[];
}

interface UserData {
  id: number;
  username: string;
  email: string;
  password: string;
  linked: boolean;
  follower_count: number;
}

interface UserResponse {
  message: string;
  data: UserData;
}

export default function ForumDetailPage() {
  const id = useParams().id;

  const [newReplyPopup, setNewReplyPopup]= useState(false);
  const [apiResponse, setApiResponse] = useState<ApiResponse>();
  const [userResponse, setUserResponse] = useState<UserResponse>();

  const getUserResponse = async () => {
    try {
      const response = await fetch(`${REST_URL}/client/user`, {
        method: "GET",
        headers: {
          "Authorization": localStorage.getItem("token") ?? "",
          "Content-Type": "application/json",
        },
      });
  
      const userResponse = await response.json();
  
      if (!response.ok) {
        alert(userResponse.message);
      } else {
        setUserResponse(userResponse as UserResponse);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  

  useEffect(() => {
    getUserResponse();
  }, [])

  const userData = userResponse?.data;

  const getApiResponse = async () => {
    try {
      const response = await fetch(`${REST_URL}/post/forum/${id}`, {
        method: "GET",
        headers: {
          "Authorization": localStorage.getItem("token") ?? "",
          "Content-Type": "application/json",
        },
      });
  
      const apiResponse = await response.json();
  
      if (!response.ok) {
        alert(apiResponse.message);
      } else {
        setApiResponse(apiResponse as ApiResponse);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  

  useEffect(() => {
    getApiResponse();
  }, []);

  const postDatas: PostData[] = apiResponse?.data ?? [];
  console.log(postDatas);

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
        {`Forum ${id}`}{" "}
      </Text>

      {/* Main Content */}
      {postDatas.map((data) => {
        if (data.forum_id.toString() === id && data.post_id === 1) {
          return (
            <ForumPost
              width={"full"}
              headerBgColor="red_orange"
              text={data.content}
              date={data.created_at.slice(0,10) + " " + data.created_at.slice(11,19)}
              authorName={data.client.username}
              authorImage={data.client.image}
              post_id={data.post_id}
              author_id={data.author_id}
              user_id={userData?.id ?? 0}
              forum_id={data.forum_id}
            />
          );
        }
      })}
 
      <Flex flexDir={"row"} w={"full"} justifyContent={"start"} alignItems={"center"} gap={"30px"} >
        <ButtonComps text="New Reply" bgColor="red_orange" color="white" onClick={() => {setNewReplyPopup(true)}}/>
        <Flex w={"full"} h={"2px"} bgColor={"#787878"} />
      </Flex>

      {/* Reply Content */}
      {postDatas.map((data) => {
        if (data.forum_id.toString() === id && data.post_id !== 1) {
          return (
            <ForumPost
              width={"90%"}
              headerBgColor="blue_cobalt"
              text={data.content}
              date={data.created_at.slice(0,10) + " " + data.created_at.slice(11,19)}
              authorName={data.client.username}
              authorImage={data.client.image}
              post_id={data.post_id}
              author_id={data.author_id}
              user_id={userData?.id ?? 0}
              forum_id={data.forum_id}
            />
          );
        }
      })}

      {/* New Reply Popup */}
      <PostForm open={newReplyPopup} setClose={() => setNewReplyPopup(false)} isForum={false}/>
    </Flex>    
  );
}
