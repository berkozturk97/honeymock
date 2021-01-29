import {
  Box,
  Button,
  Flex,
  FormControl,
  Icon,
  Input,
  Text
} from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { loginTalent } from '../../api/talentApi'
import { ImLinkedin, ImXing, ImGithub, ImStackoverflow } from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { addUserData } from '../../redux/actions/stepOneAction'
import { HEADER, ID } from '../../constants/header'
import {
  getHeaderFromBase64,
  getFormDataContent,
  base64ToBinary,
  dataURItoBlob
} from '../../utils/functions/upload'
import { setUserData } from '../../redux/actions/userAction'

function Step1() {
  useEffect(() => {
    console.log()
    getUser()
  }, [])
  const [userDatas, setUserDatas] = useState([]);
  const [cvUrl, setCvUrl] = useState('')
  const [city, setCity] = useState('')
  const [links, setLinks] = useState({
    linkedInUrl: '',
    githubUrl: '',
    sofUrl: '',
    xingUrl: ''
  })
  const dispatch = useDispatch()
  const router = useRouter()

  const getUser = async () => {
    if (router.query.basics !== 'basics') {
      let body = {
        linkedInId: router.query.basics
      }
      const userInformations = await loginTalent({ body: body })
      localStorage.setItem('userInformations', JSON.stringify(userInformations));
      dispatch(setUserData(JSON.stringify(userInformations)))
      axios.defaults.headers.token = userInformations.tokenCode
      ID._id = userInformations._id
      console.log(userInformations)
    } else {
       const userInfos = await JSON.parse(localStorage.getItem('userInformations'))
      //  JSON.parse(userInfos)
       setUserDatas(userInfos);
       console.log('dsaddd',userDatas);
    }
  }
 

  const upload = async (event) => {
    const { url } = await getFormDataContent(event)
    const file = event.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onloadend = async function (e) {
      const data = e.target.result
      await axios
        .put(url, base64ToBinary(data), { headers: getHeaderFromBase64(data) })
        .then((response) => {
          setCvUrl(response.request.responseURL.split('?Con')[0])
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  const goNextPage = () => {
    let updatedData = {
      livingCity: city,
      linkedInUrl: links.linkedInUrl,
      githubUrl: links.githubUrl,
      sofUrl: links.sofUrl,
      xingUrl: links.xingUrl,
      cvUrl: cvUrl
    }
    dispatch(addUserData(updatedData))
    router.push('/talent/employment')
  }
  return (
    <>
      <Text ml={5} color="#979EA7" fontSize="3xl">
        Hi! Let's start with the basics!{' '}
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
      <input style={{marginLeft:20, marginTop:20}} type="file" onChange={upload} multiple />
      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        Please let us know where you are located at the moment!
      </Text>

      <FormControl id="city" ml={5} mt={4}>
        <Input
          w={[250, 300, 340, 340]}
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
          <FormControl id="linkedIn" ml={5} mt={4}>
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
                  w={10}
                  h={10}
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
                w={[200, 300, 340, 340]}
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

          <FormControl id="xing" ml={5} mt={4}>
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
                  w={10}
                  h={10}
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
                w={[200, 300, 340, 340]}
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

          <FormControl id="github" ml={5} mt={4}>
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
                  w={10}
                  h={10}
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
                w={[200, 300, 340, 340]}
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

          <FormControl id="sof" ml={5} mt={4}>
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
                  w={10}
                  h={10}
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
                w={[200, 300, 340, 340]}
                name="stackOverFlow"
                type="text"
                placeholder="http://stackoverflow.com/users/1234/yourusername"
                borderColor="#979EA7"
                value={links.sofUrl}
                onChange={(e) => setLinks({ ...links, sofUrl: e.target.value })}
              />
            </Box>
          </FormControl>
        </form>
      </Flex>

      <Button bg="#7DB0E4" color="white" ml={5} mt={5} onClick={goNextPage}>
        Click And Save
      </Button>
    </>
  )
}

export default Step1
