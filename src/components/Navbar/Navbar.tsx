import { auth } from '@/src/firebase/clientApp'
import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { RightContent } from './RightContent/RightContent'
import SearchInput from './SearchInput'

const Navbar = () => {

  const [user, loading, error] = useAuthState(auth)

  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" alt="reddit logo" height="30px" />
        <Image src="/images/redditText.svg" alt="reddit logo" height="46px" display={{ base: 'none', md: 'unset' }} />

      </Flex>
      <SearchInput />
      <RightContent user={user} />
      {/* <Directory />
      <SearchInput />
      <RightContent /> */}
    </Flex>
  )
}

export default Navbar