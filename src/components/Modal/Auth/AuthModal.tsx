import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import React from 'react'
import { authModalAtom } from '@/src/atoms/authModalAtom'
import AuthInput from './AuthInput'
import OAuthButtons from './OAuthButtons'

const AuthModal = () => {
  const [modalState, setModalState] = useRecoilState(authModalAtom)

  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }))
  }

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
              <OAuthButtons />
              <Text
                color={'gray.500'}
                fontWeight={700}
              >OR
              </Text>
              <AuthInput />
              {/* <ResetPassword /> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AuthModal