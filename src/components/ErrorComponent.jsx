import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({ msg }) => {
  return (
    <Alert
    status={'error'}
    position={"fixed"}
    top={"50%"}
    left={"50%"}
    transform={"translate(-50%, -50%)"}
    w={"container.lg"}
    fontSize={"22px"}
    justifyContent={"center"}
    border={"2px solid red"}
    borderRadius={"10"}>
      <AlertIcon />
      {msg}
    </Alert>
  )
}

export default ErrorComponent