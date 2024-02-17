import React from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import HeroBg from "../../Images/home_hero_section_bg.jpg";
import { Data } from "../../component/data/Data";
import ME from "../../Images/Me.jpg";
// import { chakra } from '@chakra-ui/react';

function Home() {
  return (
    <Box>
      <Flex
        height={"100vh"}
        backgroundImage={HeroBg}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        boxShadow={
          "0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.5)"
        }
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text fontSize={"90px"} fontWeight={600} color="#ffffff" align="center">
          The journey of a thousand miles begins with one step. 
          
        </Text>
      </Flex>
      <Box py={12}>
        <Container maxWidth={"100em"}>
          <Text
            fontSize={"2xl"}
            fontWeight={"700"}
            align={"center"}
            textTransform={"uppercase"}
            color={"#404D49"}
          >
            About Me
          </Text>
          <Flex py={40} justifyContent={"center"}>
            <Box
              backgroundImage={ME}
              backgroundSize={"cover"}
              backgroundPosition={"center"}
              backgroundRepeat={"no-repeat"}
              boxShadow={
                "0px 4px 10px 0px #00555040,inset 0 100 100 1000px rgba(0.5,.5,0.5,.5)"
              }
              height={"300px"}
              width={"300px"}
              borderRadius={"200px"}
              border={"8px solid #525150"}
            ></Box>
          </Flex>
          <Text fontSize={"md"} textAlign={"center"} fontWeight={500} ml="20em" mr="20em">
            {Data.about_me_text}
          </Text>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
