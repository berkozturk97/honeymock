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
  import { useState } from 'react'
  import { ImLinkedin, ImXing, ImGithub, ImStackoverflow } from 'react-icons/im'
  import { useDispatch } from 'react-redux'
import { updateUserData } from '../../../redux/actions/updateAction'
  
  
  import {
    getHeaderFromBase64,
    getFormDataContent,
    base64ToBinary,
    dataURItoBlob
  } from '../../../utils/functions/upload'

  
  function Social({user}) {

    const [cvUrl, setCvUrl] = useState(user.cvUrl)
    const [city, setCity] = useState(user.livingCity)
    const [links, setLinks] = useState({
      linkedInUrl: user.linkedInUrl,
      githubUrl: user.githubUrl,
      sofUrl: user.sofUrl,
      xingUrl: user.xingUrl
    })
    const dispatch = useDispatch()
    const router = useRouter()
  
    
   
  
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
            let updatedData = {
                cvUrl: response.request.responseURL.split('?Con')[0]
                }
              dispatch(updateUserData(updatedData))
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
    const handleOnblur = (e) => {
        let updatedData = {
            livingCity: city,
            linkedInUrl: links.linkedInUrl,
            githubUrl: links.githubUrl,
            sofUrl: links.sofUrl,
            xingUrl: links.xingUrl,
          }
          dispatch(updateUserData(updatedData))
        
    }
   
    return (
      <Box w={[250,400,500,900]}>
       
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
        <Text ml={5} mt={2} fontSize="md">
          Your current cv {cvUrl}
        </Text>
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
            onBlur={handleOnblur}
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
                  onBlur={handleOnblur}
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
                  onBlur={handleOnblur}
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
                  onBlur={handleOnblur}
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
                  onBlur={handleOnblur}
                  onChange={(e) => setLinks({ ...links, sofUrl: e.target.value })}
                />
              </Box>
            </FormControl>
          </form>
        </Flex>
  
       
      </Box>
    )
  }
  
  export default Social
  