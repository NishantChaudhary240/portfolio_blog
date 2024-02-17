import { Container, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Data } from '../data/Data';

function Footer() {
  return (
    <Box backgroundColor={"#143039"}>
        <Container maxWidth={"100em"}>
            <Box>
                <Text
                    lineHeight={"2em"}
                    color={"#ffffff"}
                    align={"center"}
                    fontWeight={500}
                >
                    &copy; {new Date().getFullYear()}. Designed by {Data.name}
                </Text>
            </Box>
        </Container>
    </Box>
  )
}

export default Footer;