import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ExchangeCard = ({ name, img, rank, url}) => {
  return (
    <a href={url} target={'blank'}>
        <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        m={"4"}
        borderRadius={"lg"}
        transition={"all 0.25s linear"}
        css={{
            "&:hover":{
                transform: "scale(1.1)",
                boxShadow: "0 0 10px #845BB3"}
        }}>
            <Image 
            src={img}
            w={"10"}
            h={"10"}
            objectFit={"contain"}
            alt='Exchanges' />
            <Heading 
            size={"md"}
            noOfLines={"1"}
            >{rank}</Heading>
            <Text noOfLines={"1"}>{name}</Text>
        </VStack>
    </a>
  )
}

export default ExchangeCard