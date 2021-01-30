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
    //deneme()
  }, [])
 
  async function talentDeneme() {
    const data = await getTalents()
    console.log(data)
  }
  
  
   return <h1>Home Page</h1>
  
  
}

export default HomePage
