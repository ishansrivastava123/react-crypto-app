import { Badge, HStack, Progress, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const CustomBar = ({ high, low, ratio }) => {
  return (
    <VStack w={"full"}>
        <Progress 
        hasStripe
        value={ratio}
        height={"8"}
        shadow={"0 0 10px"}
        borderRadius={"16"}
        colorScheme={'teal'}
        w={"full"}
        m={"4"} />
        <HStack justifyContent={"space-between"}
        w={"full"}>
            <Badge
            children={low}
            colorScheme='red' />
            <Text fontSize={"sm"}>24 Hrs Range</Text>
            <Badge
            children={high}
            colorScheme='green' />
        </HStack>
    </VStack>
  )
}

export default CustomBar