import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react'

import Image from 'next/image'
import Link from 'next/link'

function TalentInfo({ user }) {
  return (
    <Flex>
      <Box w={150} h={150} m={5} bg="tomato" borderRadius={40}>
        {/* <Image src="/berk.jpg" width='140px' height='140px' /> */}
        <h4 style={{ marginTop: '60px', marginLeft: '25px' }}>Place Holder</h4>
      </Box>
      <Stack mt={5} ml={150}>
        <Text fontSize="3xl">
          {user[0].name} {user[0].surname}
        </Text>
        <Text fontSize="md">{user[0].livingCity}</Text>
        <Flex float="left">
          <Image
            src="/github.png"
            width={30}
            height={30}
            layout="fixed"
            alt="Git Hub"
          />

          <Image
            src="/linkedin.png"
            width={30}
            height={30}
            layout="fixed"
            alt="Git Hub"
          />
          <Image
            src="/xing.png"
            width={30}
            height={30}
            layout="fixed"
            alt="Git Hub"
          />
          <Image
            src="/sof.png"
            width={25}
            height={25}
            layout="fixed"
            alt="Git Hub"
          />
        </Flex>
      </Stack>
    </Flex>
  )
}

export default TalentInfo
