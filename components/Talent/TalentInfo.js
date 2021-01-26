import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react'

import Image from 'next/image'
import Link from 'next/link'
import { Icon, Uploader } from 'rsuite'

function TalentInfo({user}) {
  return (
    <Flex>
      <Box w={100} h={100} m={5} bg="#FFFFFF" borderRadius={40}>
        <Uploader>
          <button style={{ width: '100px', height: '100px' }}>
            <Icon icon="avatar" size="5x" />
          </button>
        </Uploader>
      </Box>
      <Stack mt={5} ml={10}>
        <Text fontSize="3xl">
          {user[0].name} {user[0].surname}
        </Text>
        <Text fontSize="md">{user[0].livingCity}</Text>
        <Flex float="left">
          <a target="_blank" href={user[0].githubUrl}>
            <Image
              src="/github.png"
              width={30}
              height={30}
              layout="fixed"
              alt="Git Hub"
            />
          </a>

          <a target="_blank" href={user[0].linkedInUrl}>
            <Image
              src="/linkedin.png"
              width={30}
              height={30}
              layout="fixed"
              alt="Git Hub"
            />
          </a>
          <a target="_blank" href={user[0].xingUrl}>
            <Image
              src="/xing.png"
              width={30}
              height={30}
              layout="fixed"
              alt="Git Hub"
            />
          </a>
          <a target="_blank" href={user[0].sofUrl}>
            <Image
              src="/sof.png"
              width={25}
              height={25}
              layout="fixed"
              alt="Git Hub"
            />
          </a>
        </Flex>
      </Stack>
    </Flex>
  )
}

export default TalentInfo
