import React, { Children } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import NavBar from '../NavBar';
import Footer from '../Footer';

const BasicLayout = ({ children }) => {
    return (
      <Flex flexDirection={"column"} minHeight={"100vh"}>
        <NavBar />
        <Box backgroundColor={"#ebedec"} flex={1}>
          {children}
        </Box>
        <Footer />
      </Flex>
    );
  };

export default BasicLayout;