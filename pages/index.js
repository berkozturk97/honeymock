import { Stack, Button, Spinner } from '@chakra-ui/react'
import MasterPage from '../components/master-page/masterpage'
import React, { useEffect, useState } from 'react'
import { getTalents } from '../api/talentApi'
import Image from 'next/image'
import LinkedInAuth from '../components/LinkedIn/LinkedInLogin'
import { useRouter } from 'next/router'

function HomePage() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    deneme()
  }, [])
 
  const deneme = () => {
    setTimeout(() => {
      setIsVisible(!isVisible)
    }, 1000)
  }
  async function talentDeneme() {
    const data = await getTalents()
    console.log(data)
  }
  
  if(isVisible === true){
    return (
      <Stack spacing={4} direction="row" align="center" justify="center">
        <h1>Home Page</h1>
      </Stack>
  
    )
  } else {
   return <Spinner />
  }
  
}

export default HomePage
