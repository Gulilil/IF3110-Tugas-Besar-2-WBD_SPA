import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ReferencePage from "./pages/ReferencePage";
import SignupPage from "./pages/SignupPage";
import ErrorPage from "./pages/ErrorPage";
import { Navbar } from "./comps/Navbar";
import ForumListPage from "./pages/ForumListPage";
import ForumDetailPage from "./pages/ForumDetailPage";
import { Footer } from "./comps/Footer";
import ProfilePage from "./pages/ProfilePage";
import { REST_URL } from "./constant/constant";
import NoAuthenticationPage from "./pages/NoAuthenticationPage";
import ClientPage from "./pages/ClientPage";

function App() {
  const [authStatus, setAuthStatus] = useState(false);

  const checkAuth = async () => {
    const response = await fetch(REST_URL + "/client/check", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token") ?? "",
      },
    });

    // alert(localStorage.getItem("token"))

    if (!response.ok) {
      setAuthStatus(false);
    } else {
      setAuthStatus(true);
    }
  };


  useEffect(() => {
    checkAuth();
  });

  if (!authStatus) {
    return (
      <Flex
        maxW={"2560px"}
        minH={"100vh"}
        w={"full"}
        flexDir={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mx={"auto"}
        backgroundColor={"light_gray"}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/*" element={<NoAuthenticationPage />} />
        </Routes>
        <Footer />
      </Flex>
    );
  }

  return (
    <Flex
      maxW={"2560px"}
      minH={"100vh"}
      w={"full"}
      flexDir={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      mx={"auto"}
      backgroundColor={"light_gray"}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/reference" element={<ReferencePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/client/:id" element={<ClientPage />} />
        <Route path="/forum" element={<ForumListPage />} />
        <Route path="/forum/:id" element={<ForumDetailPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Flex>
  );
}

export default App;
