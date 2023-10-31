import React from "react";
import { Route, Routes } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ReferencePage from "./pages/ReferencePage";
import SignupPage from "./pages/SignupPage";
import ErrorPage from "./pages/ErrorPage";
import { Navbar } from "./comps/Navbar";

function App() {
  return (
    <Flex
      maxW={"2560px"}
      w={"full"}
      flexDir={"column"}
      justifyContent={"center"}
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
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Flex>
  );
}

export default App;
