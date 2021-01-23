import {
  Box,
  Button,
  Flex,
  FormControl,
  Icon,
  Input,
  Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ImLinkedin, ImXing, ImGithub, ImStackoverflow } from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { addDeneme } from '../../redux/actions/stepOneAction'

function Step1() {
  const [city, setCity] = useState('')
  const [links, setLinks] = useState({
    linkedInUrl: '',
    githubUrl: '',
    sofUrl: '',
    xingUrl: ''
  })
  const dispatch = useDispatch()
  const router = useRouter()

  const addCity = () => {
    let updatedData = { 
      city, 
      linkedInUrl: links.linkedInUrl,
      githubUrl: links.githubUrl,
      sofUrl: links.sofUrl,
      xingUrl: links.xingUrl,
     }
    dispatch(addDeneme(updatedData))
    router.push('/login/loginStep2')
  }
  return (
    <>
      <Text ml={5} color="#979EA7" fontSize="3xl">
        Hi Berk! Let's start with the basics!{' '}
      </Text>
      <hr />
      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        Let us help you fill in all your professional info with your CV. This
        will speed you up by 50%.
      </Text>
      <Text ml={5} mt={2} fontSize="md">
        You don't have a CV? You can also upload your LinkedIn profile, click
        here to see how. Supported file formats: PDF and DOC(X) with maximum
        file size limit of 20MB
      </Text>

      <Button bg="#7DB0E4" color="white" _hover="none" ml={5} mt={5}>
        Upload Cv
      </Button>

      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        Please let us know where you are located at the moment!
      </Text>

      <FormControl id="city" ml={5} mt={4}>
        <Input
          w
          name="city"
          type="city"
          placeholder="City"
          borderColor="#979EA7"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </FormControl>

      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        Where can we see your work?
      </Text>

      <Flex d="flex" flexWrap="wrap">
        <form>
          <FormControl id="city" ml={5} mt={4}>
            <label
              style={{
                display: 'inline-block',
                fontWeight: 'bold',
                marginBottom: '5px'
              }}
            >
              LinkedIn
            </label>

            <Box flex="50%">
              <span>
                <Icon
                  mr={5}
                  width="40px"
                  height="40px"
                  fontSize="14px"
                  fontWeight="400px"
                  lineHeight="1px"
                  color="#555"
                  textAlign="center"
                  border="1px solid #ccc"
                  borderRadius="4px"
                  as={ImLinkedin}
                />
              </span>
              <Input
                w={340}
                name="linkedIn"
                type="text"
                placeholder="https://www.linkedin.com/in/yourusername"
                borderColor="#979EA7"
                value={links.linkedInUrl}
                onChange={(e) =>
                  setLinks({ ...links, linkedInUrl: e.target.value })
                }
              />
            </Box>
          </FormControl>

          <FormControl id="city" ml={5} mt={4}>
            <label
              style={{
                display: 'inline-block',
                fontWeight: 'bold',
                marginBottom: '5px'
              }}
            >
              Xing
            </label>

            <Box flex="0 50%" w={'100%'}>
              <span>
                <Icon
                  mr={5}
                  width="40px"
                  height="40px"
                  fontSize="14px"
                  fontWeight="400px"
                  lineHeight="1px"
                  color="#555"
                  textAlign="center"
                  border="1px solid #ccc"
                  borderRadius="4px"
                  as={ImXing}
                />
              </span>
              <Input
                w={340}
                name="xing"
                type="text"
                placeholder="https://xing.com/profile/username"
                borderColor="#979EA7"
                value={links.xingUrl}
                onChange={(e) =>
                  setLinks({ ...links, xingUrl: e.target.value })
                }
              />
            </Box>
          </FormControl>

          <FormControl id="city" ml={5} mt={4}>
            <label
              style={{
                display: 'inline-block',
                fontWeight: 'bold',
                marginBottom: '5px'
              }}
            >
              GitHub
            </label>

            <Box w={'100%'}>
              <span>
                <Icon
                  mr={5}
                  width="40px"
                  height="40px"
                  fontSize="14px"
                  fontWeight="400px"
                  lineHeight="1px"
                  color="#555"
                  textAlign="center"
                  border="1px solid #ccc"
                  borderRadius="4px"
                  as={ImGithub}
                />
              </span>
              <Input
                w={340}
                name="github"
                type="text"
                placeholder="https://github.com/yourusername"
                borderColor="#979EA7"
                value={links.githubUrl}
                onChange={(e) =>
                  setLinks({ ...links, githubUrl: e.target.value })
                }
              />
            </Box>
          </FormControl>

          <FormControl id="city" ml={5} mt={4}>
            <label
              style={{
                display: 'inline-block',
                fontWeight: 'bold',
                marginBottom: '5px'
              }}
            >
              StackOverFlow
            </label>

            <Box d="flex" w={'100%'}>
              <span>
                <Icon
                  mr={5}
                  width="40px"
                  height="40px"
                  fontSize="14px"
                  fontWeight="400px"
                  lineHeight="1px"
                  color="#555"
                  textAlign="center"
                  border="1px solid #ccc"
                  borderRadius="4px"
                  as={ImStackoverflow}
                />
              </span>
              <Input
                w={340}
                name="stackOverFlow"
                type="text"
                placeholder="http://stackoverflow.com/users/1234/yourusername"
                borderColor="#979EA7"
                value={links.sofUrl}
                onChange={(e) =>
                  setLinks({ ...links, sofUrl: e.target.value })
                }
              />
            </Box>
          </FormControl>
        </form>
      </Flex>

      <Button
        bg="#7DB0E4"
        color="white"
        _hover="none"
        ml={5}
        mt={5}
        onClick={addCity}
      >
        Click And Save
      </Button>
    </>
  )
}

export default Step1
