import { auth } from '@/src/firebase/clientApp'
import { Button, Flex } from '@chakra-ui/react'
import { signOut, User } from 'firebase/auth'
import React from 'react'
import AuthModal from '../../Modal/Auth/AuthModal'
import AuthButtons from './AuthButtons'
import Icons from './Icons'
import UserMenu from './UserMenu'

type RightContentProps = {
  user?: User | null; // undefined means optional
}

export const RightContent = ({ user }: RightContentProps) => {
  return (
    <>
      <AuthModal />

      <Flex align="center" justify="center">
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>

    </>
  )
}
