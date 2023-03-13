import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '@/src/firebase/clientApp'

const OAuthButtons = () => {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

  return (
    <Flex
      direction="column"
      width="100%"
      mb={4}
    >
      <Button
        variant={'oauth'}
        mb={2}
        onClick={() => signInWithGoogle()}
      >
        <Image
          src="/images/googlelogo.png"
          alt="google logo"
          height="20px"
          mr={4}
        />
        Continue with Google
      </Button>
      <Button
        variant={'oauth'}
      >
        Some other OAuth
      </Button>
      {error &&
        <Text
          textAlign="center"
          color="red"
          fontSize="10pt"
        >
          {error.message}
        </Text>
      }
    </Flex>
  )
}

export default OAuthButtons