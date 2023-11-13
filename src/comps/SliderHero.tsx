import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Flex } from "@chakra-ui/react";

import { ForumData } from "../dummy/AllData";
import { SliderCard } from "./SliderCard";
import { LoremIpsum_1Sentence } from "../dummy/LoremIpsum";

const responsive = {
  768: {
    items: 2,
    itemsFit: "contain",
  },
  1024: {
    items: 3,
    itemsFit: "contain",
  },
};

export const SliderHero = () => {
  return (
    <Flex w={"full"} display={"relative"}>
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={2500}
        animationDuration={1000}
        animationType={"slide"}
        responsive={responsive}
        infinite
        touchTracking={false}
        disableButtonsControls
        items={ForumData.map((data) => {
          return <SliderCard title={data.title} text={LoremIpsum_1Sentence} />;
        })}
      />
    </Flex>
  );
};
