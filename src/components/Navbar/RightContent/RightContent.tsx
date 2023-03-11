import { Flex } from '@chakra-ui/react'
import React from 'react'
import AuthModal from '../../Modal/Auth/AuthModal'
import AuthButtons from './AuthButtons'

type RightContentProps = {
  // user: any
}

export const RightContent = (props: RightContentProps) => {
  return (
    <>
      <AuthModal />

      <Flex align="center" justify="center">
        <AuthButtons />
      </Flex>

    </>
  )
}
