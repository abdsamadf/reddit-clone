import { Flex, Icon, MenuItem, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import CreateCommunityModal from '../../Modal/CreateCommunity/CreateCommunityModal'
import { GrAdd } from 'react-icons/gr'

const Communities = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <CreateCommunityModal
        open={open}
        handleClose={() => { setOpen(false) }}
      />
      <MenuItem
        width="100%"
        fontSize="10pt"
        _hover={{ bg: 'gray.100' }}
        onClick={() => { setOpen(true) }}
      >
        <Flex align="center" >
          <Icon fontSize={20} mr={2} as={GrAdd} />
          <Text>Create Community</Text>
        </Flex>
      </MenuItem>
    </>
  )
}

export default Communities