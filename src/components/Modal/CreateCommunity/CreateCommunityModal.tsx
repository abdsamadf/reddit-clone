import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Box, Divider, Text, Input, Stack, Checkbox, Flex, Icon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsFillEyeFill, BsFillPersonFill } from 'react-icons/bs'
import { HiLockClosed } from 'react-icons/hi'

type CreateCommunityModalProps = {
  open: boolean,
  handleClose: () => void,
}

const CreateCommunityModal = ({
  open,
  handleClose,
}: CreateCommunityModalProps) => {

  const [communityName, setCommunityName] = useState('')
  const [characterRemaining, setCharacterRemaining] = useState(21)
  const [communityType, setCommunityType] = useState("public")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 21) return

    setCommunityName(event.target.value)
    // recalculate how many characters we have left in the name
    setCharacterRemaining(21 - event.target.value.length)
  }

  const onCommunityTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommunityType(event.target.name)
  }

  return (
    <>
      <Modal isOpen={open} onClose={handleClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display="flex"
            flexDirection="column"
            fontSize={15}
            padding={3}
          >
            Create a Community
          </ModalHeader>
          <Box
            pl={3}
            pr={3}
          >
            <Divider />
            <ModalCloseButton />
            <ModalBody
              display="flex"
              flexDirection="column"
              padding="10px 0px"
            >
              <Text fontWeight={600} fontSize={15}>
                Name
              </Text>
              <Text fontSize={11} color="gray.500">
                Community names including capitalization cannot be changed.
              </Text>
              <Text
                position="relative"
                top="28px"
                left="10px"
                color="gray.500"
                width="20px"
              >
                r/
              </Text>
              <Input
                position="relative"
                value={communityName}
                pl="22px"
                size="sm"
                onChange={handleChange}
              />
              <Text
                color={characterRemaining === 0 ? 'red' : 'gray.500'}
                fontSize="9pt"
              >
                {characterRemaining} characters remaining
              </Text>
              <Box mt={4} mb={4}>
                <Text fontWeight={600} fontSize={15}>
                  Community Type
                </Text>
                {/* checkbox */}
                <Stack spacing={2}>
                  <Checkbox
                    name="public"
                    isChecked={communityType === "public"}
                    onChange={onCommunityTypeChange}
                  >
                    <Flex align="center">
                      <Icon as={BsFillEyeFill} mr={2} color="gray.500" />
                      <Text fontSize='10pt' mr={1}>Public</Text>
                      <Text fontSize='8pt' color="gray.500" pt={1}>
                        Anyone can view, post, and comment on this community

                      </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    name="restricted"
                    isChecked={communityType === "restricted"}
                    onChange={onCommunityTypeChange}
                  >
                    <Flex align="center">
                      <Icon as={HiLockClosed} mr={2} color="gray.500" />
                      <Text fontSize='10pt' mr={1}>Restricted</Text>
                      <Text fontSize='8pt' color="gray.500" pt={1}>
                        Anyone can view this community, but only approved users can post

                      </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    name="private"
                    isChecked={communityType === "private"}
                    onChange={onCommunityTypeChange}
                  >
                    <Flex align="center">
                      <Icon as={BsFillPersonFill} mr={2} color="gray.500" />
                      <Text fontSize='10pt' mr={1}>Private</Text>
                      <Text fontSize='8pt' color="gray.500" pt={1}>
                        Only approved users can view and submit to this community

                      </Text>
                    </Flex>
                  </Checkbox>
                </Stack>
              </Box>
            </ModalBody>

          </Box>

          <ModalFooter bg="gray.100" borderRadius="0px 0px 10px 10px">
            <Button variant="outline" height="30px" mr={3} onClick={handleClose}>
              Cancel
            </Button>
            <Button
              height="30px"
              onClick={() => { }}
            >
              Create Community
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateCommunityModal



{/* use position relative
              Here are some situations where you might use position: relative:

                To create an offset from an element's normal position: If you want to move an element a certain distance from its original position, you can use position: relative and the top, right, bottom, and left properties to adjust its position.

                To layer elements on top of one another: If you have multiple elements that you want to stack on top of one another, you can use position: relative on each element and adjust the z-index property to control their stacking order.

                To create a reference point for absolutely positioned elements: If you have an element that you want to position absolutely relative to another element, you can use position: relative on the parent element to create a reference point.

              */}