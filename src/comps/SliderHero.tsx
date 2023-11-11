import React from "react";
import Slider from "react-slick";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ForumData } from "../dummy/AllData";
import { Flex, Icon } from "@chakra-ui/react";
import { SliderCard } from "./SliderCard";
import { LoremIpsum_1Sentence } from "../dummy/LoremIpsum";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <Icon
      as={IoIosArrowForward}
      onClick={onClick}
      cursor={"pointer"}
      boxSize={12}
      display={{ base: "none", lg: "block" }}
      right={"8%"}
      zIndex={1}
      top={"40%"}
      position={"absolute"}
      _hover={{
        opacity: 0.5,
      }}
    />
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <Icon
      as={IoIosArrowBack}
      onClick={onClick}
      cursor={"pointer"}
      boxSize={12}
      display={{ base: "none", lg: "block" }}
      left={"8%"}
      zIndex={1}
      top={"40%"}
      position={"absolute"}
      _hover={{
        opacity: 0.5,
      }}
    />
  );
};

export const SliderHero = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplayspeed: 1500,
    className: "center",
    centerPadding: "150px",
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 720,
        settings: {
          centerPadding: "60px",
          slidesToShow: 1,
          centerMode: false,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {ForumData.map((data) => {
        console.log(data.authorID)
        return <SliderCard title={data.title} text={LoremIpsum_1Sentence} />;
      })}
    </Slider>
  );
};
