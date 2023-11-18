import React, { useState, useEffect } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { ImageComps } from "../comps/ImageComps";
import { ButtonComps } from "../comps/ButtonComps";
import { REST_URL, delay } from "../constant/constant";
import { useNavigate, useParams } from "react-router-dom";

const PROFILE_PIC_SIZE = "200px";

interface ClientData {
  id: number;
  username: string;
  email: string;
  password: string;
  image: string;
  linked: boolean;
  follower_count: number;
}

export default function ClientPage() {
  const navigate = useNavigate();
  const id = useParams().id;
  const [isFollowed, setIsFollowed] = useState(false);
  const [clientData, setClientData] = useState<ClientData>();

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
      alert(data.message);
    }
  };

  // useEffect(() => {
  //   getReferenceData();
  // },[])

  const getClientData = async () => {
    try {
      const response = await fetch(REST_URL + "/client/other/" + id, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token") ?? "",
        },
      });

      console.log(id);
      const data = await response.json();
      const clientData = data?.data;

      if (!response.ok) {
        alert(data.message);
      } else {
        setClientData(clientData as ClientData);
      }
    } catch (error) {
      console.error("Error fetching client data: ", error);
    }
  };

  const checkFollowData = async () => {
    try {
      const response = await fetch(REST_URL + "/follow/" + id, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token") ?? "",
        },
      });

      const data = await response.json();
      if (!response.ok) {
        if (data.message === 'Not Acceptable'){
          navigate('/profile');
        } else {
          setIsFollowed(false);
        }
      } else {
        setIsFollowed(true);
      }

    } catch (error) {
      console.error("Error checking Follow data: " + error);
    }
  };

  useEffect(() => {
    getClientData();
    delay(2000);
    checkFollowData();
  }, []);

  const handleFollow = async () => {
    try {
      const response = await fetch(REST_URL+"/follow/"+id, {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token") ?? "",
        },
      });

      // const data = await response.json();
      // alert(data.message);
      window.location.reload();

    } catch (error){
      console.error("Error in doing follow operation: "+error);
    }
  }

  const handleUnfollow = async () => {
    try {
      const response = await fetch(REST_URL+"/follow/"+id,{
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token") ?? "",
        },
      });

      // const data = await response.json();
      // alert(data.message);
      window.location.reload();

    } catch (error){
      console.error("Error in doing unfollow operation: "+error);
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
        url={clientData ? clientData.image : undefined}
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
          {clientData ? clientData.username : `Username`}{" "}
        </Text>

        <Text fontWeight={"bold"}>
          {" "}
          {clientData ? clientData.email : `Username`}{" "}
        </Text>

        <Text>
          {" "}
          {clientData ? `User ID: ` + clientData.id.toString() : `User ID: -`}
        </Text>

        <Text> {`Points: `}</Text>

        <Text>
          {" "}
          {clientData
            ? `Follower Counts: ` + clientData.follower_count.toString()
            : `Follower Counts: -`}
        </Text>

        {isFollowed ? (
          <ButtonComps
            text="Unfollow"
            bgColor="yellow_golden"
            color="white"
            onClick={() => {handleUnfollow()}}
          />
        ) : (
          <ButtonComps
            text="Follow"
            bgColor="blue_cobalt"
            color="white"
            onClick={() => {handleFollow()}}
          />
        )}
      </Flex>
    </Flex>
  );
}
