import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinCards = ({ name, img, symbol, price, id, currencySymbol = "₹"}) => {
  return (
    <Link to={`/coins/${id}`}>
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
            alt='Coins' />
            <Heading 
            size={"md"}
            noOfLines={"1"}
            >{symbol}</Heading>
            <Text noOfLines={"1"}>{name}</Text>
            <Text noOfLines={"1"}>{price ? `${currencySymbol} ${price}` : "N/A"}</Text>
        </VStack>
    </Link>
  )
}

export default CoinCards