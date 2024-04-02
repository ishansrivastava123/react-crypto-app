import { Box, Spinner, Text, VStack } from '@chakra-ui/react';

const Loader = () => {
  return (
    <VStack
    h={"85vh"}
    justifyContent={"center"}>
      <Box transform={"scale(2.5)"} m={"10"}>
        <Spinner
        size="xl"
        emptyColor='red.500'
        color='blue.500'
        thickness='12px' />
      </Box>
      <Text
      fontSize={"24px"}>Loading...</Text>
    </VStack>
    
  )
}

export default Loader