import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import { HiOutlineLogout, HiOutlineUserCircle } from "react-icons/hi";
import PopupWithBlackOverlay from "./PopupWithBlackOverlay";

const NavbarLevelHeight = "50px";

const NavbarButtons = ({
  children,
  text,
}: {
  children?: string | JSX.Element | JSX.Element[];
  text: string;
}) => {
  return (
    <Flex
      cursor={"pointer"}
      minHeight={NavbarLevelHeight}
      justifyContent={"center"}
      alignItems={"center"}
      fontWeight={"bold"}
      border={"4px solid transparent"}
      transitionDuration={"0.2s"}
      transitionTimingFunction={"ease-in-out"}
      gap={"5px"}
      _hover={{
        color: "black",
        borderBottom: "4px solid black",
        transitionDuration: "0.2s",
        transitionTimingFunction: "ease-in-out",
      }}
    >
      {children}
      <Text> {text} </Text>
    </Flex>
  );
};

export const Navbar = () => {
  const [navbarPos, setNavbarPos] = useState(0);
  const [logoutPopUp, setLogoutPopup] = useState(false);
  const location = useLocation();
  const parentPath = location.pathname.split('/')[1];

  useEffect(() => {
    let prevScrollPosY = window.scrollY;

    const detectScrollY = () => {
      if (window.scrollY <= prevScrollPosY) {
        setNavbarPos(0);
      } else {
        setNavbarPos(-120);
      }
      prevScrollPosY = window.scrollY;
    };

    window.addEventListener("scroll", detectScrollY);
    return () => {
      window.removeEventListener("scroll", detectScrollY);
    };
  });

  if (parentPath === "signup" || parentPath === "login" || parentPath === "reference") return null;

  return (
    <Flex
      w={"95%"}
      flexDir={"column"}
      position={"sticky"}
      top={navbarPos}
      insetX={0}
      zIndex={2}
      transitionDuration={"0.2s"}
      transitionTimingFunction={"ease-in-out"}
    >
      {/* First Navbar */}
      <Flex
        w="100%"
        backgroundColor={"black_matte"}
        color={"red_orange"}
        fontWeight={"bold"}
        fontSize={"24px"}
        justifyContent={"center"}
        alignItems={"center"}
        paddingY={"10px"}
      >
        <Link to="/">
          <Text cursor={"pointer"} _hover={{ color: "white" }}>
            {" "}
            InfoAnimeMasseForum{" "}
          </Text>
        </Link>
      </Flex>

      {/* Second Navbar */}
      <Flex
        justifyContent={"space-between"}
        backgroundColor={"red_orange"}
        py={"10px"}
        px={"10vw"}
        color={"white"}
        height={NavbarLevelHeight}
        borderBottomRightRadius={"20px"}
        borderBottomLeftRadius={"20px"}
      >
        <Flex justifyContent={"center"} alignItems={"center"} gap={"30px"}>
          <Link to="/">
            {" "}
            <NavbarButtons text="Home" />{" "}
          </Link>
          <Link to="/explore">
            {" "}
            <NavbarButtons text="Explore" />{" "}
          </Link>
        </Flex>

        <Flex justifyContent={"center"} alignItems={"center"} gap={"30px"}>
          <Link to="/profile">
            <NavbarButtons text="Profile">
              <HiOutlineUserCircle size={"30px"} />
            </NavbarButtons>
          </Link>

          <Box onClick={() => setLogoutPopup(true)}>
            <NavbarButtons text="Logout">
              <HiOutlineLogout size={"30px"} />
            </NavbarButtons>
          </Box>
        </Flex>
      </Flex>

      <PopupWithBlackOverlay
        open={logoutPopUp}
        setClose={() => setLogoutPopup(false)}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"light_gray"}
          p={"20px"}
          borderRadius={"10px"}
          gap={"30px"}
          flexDir={"column"}
        >
          <Text fontWeight={"bold"} fontSize={"20px"}>
            {" "}
            Are you sure you want to logout?{" "}
          </Text>
          <Flex justifyContent={"space-between"} w={"60%"}>
            <Flex
              cursor={"pointer"}
              px="20px"
              py={"5px"}
              backgroundColor={"#e05454"}
              borderRadius={"5px"}
              color={"white"}
              fontWeight={"bold"}
              transitionDuration={"0.1s"}
              transitionTimingFunction={"ease-in-out"}
              _hover={{
                opacity: "0.4",
                transitionDuration: "0.1s",
                transitionTimingFunction: "ease-in-out",
              }}
              onClick={() => setLogoutPopup(false)}
            >
              <Text> No </Text>
            </Flex>

            <Link to='/login'>
              <Flex
                cursor={"pointer"}
                px="20px"
                py={"5px"}
                backgroundColor={"#22d458"}
                borderRadius={"5px"}
                color={"white"}
                fontWeight={"bold"}
                transitionDuration={"0.1s"}
                transitionTimingFunction={"ease-in-out"}
                _hover={{
                  opacity: "0.4",
                  transitionDuration: "0.1s",
                  transitionTimingFunction: "ease-in-out",
                }}
                onClick={() => setLogoutPopup(false)}
              >
                <Text> Yes </Text>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </PopupWithBlackOverlay>
    </Flex>
  );
};
