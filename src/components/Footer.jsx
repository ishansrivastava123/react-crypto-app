import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import avtPic from "../assets/ProfilePic.jpg";

const Footer = () => {
  return (
    <Box
    minH={"48"}
    px={"16"}
    py={["16", "8"]}>
      <Stack
      direction={["column", "row"]}
      align={"center"}
      h={"full"}>
        <VStack
        w={"full"}
        alignItems={["center", "flex-start"]}>
          <Text
          fontWeight={"bold"}>About Us</Text>
          <Text
          fontSize={"sm"}
          letterSpacing={"widest"}
          textAlign={["center", "left"]}>We're the best Crypto Trading app in India. We provide guidance at a very reasonable price!</Text>
        </VStack>
        <VStack>
          <Avatar
          boxSize={"28"}
          mt={["4", "0"]}
          src={avtPic} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer