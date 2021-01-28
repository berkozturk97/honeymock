import { Stack, Button } from '@chakra-ui/react'
import MasterPage from '../components/master-page/masterpage'
import React, { useEffect } from 'react';
import { getTalents } from '../api/talentApi';
import Image from 'next/image';
import LinkedInAuth from '../components/LinkedIn/LinkedInLogin';
import { useRouter } from 'next/router';



function HomePage() {
   const router = useRouter()
  useEffect(()=> {
  },[]);
  // useEffect(() => {
  //   //talentDeneme();
  //   console.log(process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID)
  // },[])
  async function talentDeneme(){
    const data = await getTalents();
    console.log(data);
  }
  return (
    // <MasterPage>
    <Stack spacing={4} direction="row" align="center" justify='center'>
      <h1>Home Page</h1>
    </Stack>
    // </MasterPage>
  )
}

export default HomePage
