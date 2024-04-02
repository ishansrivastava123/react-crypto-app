import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack
    py={"4"}
    px={["12", "4"]}
    shadow={"dark-lg"}
    justifyContent={["space-evenly", "flex-start"]}>
      <Button
      variant={"unstyled"}>
        <Link to="/">Home</Link>
      </Button>
      <Button
      variant={"unstyled"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button
      variant={"unstyled"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  )
}

export default Header