import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import React, { useEffect } from 'react'
import { authModalState } from '@/src/atoms/authModalAtom'
import AuthInput from './AuthInput'
import OAuthButtons from './OAuthButtons'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/src/firebase/clientApp'
import ResetPassword from './ResetPassword'

const AuthModal = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);

  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }))
  }

  useEffect(() => {
    if (user) handleClose();

    console.log('user', user)
  }, [user])

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {modalState.view === 'login' && 'Login'}
            {modalState.view === 'signup' && 'Sign Up'}
            {modalState.view === 'resetPassword' && 'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            pb={6}
          >
            <Flex
              flexDirection="column"
              justify="center"
              align="center"
              width="70%"
            >
              {
                modalState.view === 'login' || modalState.view === 'signup' ?
                  <>
                    <OAuthButtons />
                    <Text
                      color={'gray.500'}
                      fontWeight={700}
                    >OR
                    </Text>
                    <AuthInput />
                  </>
                  :
                  <ResetPassword />
              }
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AuthModal