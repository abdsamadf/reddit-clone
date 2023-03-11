import { Button } from '@chakra-ui/react'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import { authModalAtom } from '@/src/atoms/authModalAtom'

const AuthButtons = () => {
  const setAuthModalState = useSetRecoilState(authModalAtom)
  return (
    <>
      <Button
        variant="outline"
        height="28px"
        display={{ base: 'none', md: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, view: 'login' })}

      >
        Login
      </Button>
      {/* by default variant is solid */}
      <Button
        height="28px"
        display={{ base: 'none', md: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, view: 'signup' })}
      >
        Sign Up
      </Button>
    </>
  )
}

export default AuthButtons