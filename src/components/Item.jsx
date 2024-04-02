import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Item = ({ title, value, dt }) => {
  return (
    <HStack
    justifyContent={"space-between"}
    w={"full"}
    my={"4"}>
        <Text 
        fontFamily={"Bebas Neue"}
        letterSpacing={"2px"}>
        {title} {dt ? `(${dt.split("T")[0].split("-").reverse().join("-")})` : ""}</Text>
        <Text>{value}</Text>
    </HStack>
  )
}

export default Item