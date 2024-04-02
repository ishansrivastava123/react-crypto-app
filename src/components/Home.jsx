import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import btcSrc from "../assets/Btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box
    w={"full"}
    h={"85vh"}>
      <motion.div
      style={{
        height: "80vh"
      }}
      animate={{
        translateY: "50px"
      }}
      transition={{
        duration: 1.5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
      }}>
        <Image
        w={"full"}
        h={"70vh"}
        objectFit={"contain"}
        src={btcSrc}
        filter={"grayscale(1)"} />
      </motion.div>
      <Text
      h={"10vh"}
      fontSize={"6xl"}
      textAlign={"center"}
      fontWeight={"thin"}
      >Xcrypto</Text>
    </Box>
  )
}

export default Home