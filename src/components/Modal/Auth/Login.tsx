import { authModalState } from '@/src/atoms/authModalAtom'
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/src/firebase/clientApp'
import { useSetRecoilState } from 'recoil'
import { FIREBASE_ERRORS } from '@/src/firebase/errors'

type LoginProps = {}

const Login = (props: LoginProps) => {
  const setModalState = useSetRecoilState(authModalState)
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  })

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  // Firebase logic
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signInWithEmailAndPassword(loginForm.email, loginForm.password)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // update form state
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }
  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name='email'
        type='email'
        placeholder='email'
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg="gray.50"
      />
      <Input
        required
        name='password'
        type='password'
        placeholder='password'
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg="gray.50"
      />
      <Text
        color="red.500"
        fontSize="9pt"
        textAlign="center"
      >
        {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
      </Text>
      <Button
        width="100%"
        height="36px"
        mt={2}
        mb={2}
        type='submit'
        isLoading={loading}
      >
        Login
      </Button>
      <Flex fontSize="9pt" justifyContent={'center'} mb={2}>
        <Text
          fontSize="9pt"
          mr={1}
        >
          Forgot your password?
        </Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => setModalState((prev) => ({
            ...prev,
            view: 'resetPassword',
          }))}
        >
          RESET
        </Text>
      </Flex>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>New here?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => setModalState((prev) => ({
            ...prev,
            view: 'signup',
          }))}
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  )
}


export default Login