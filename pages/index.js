import { Stack, Button } from '@chakra-ui/react'
import MasterPage from '../components/master-page/masterpage'
import React, { useEffect } from 'react';
import { getTalents } from '../api/talentApi';

function HomePage() {
  useEffect(()=> {
    let userInformations = localStorage.getItem('userInformations');
  },[]);
  // useEffect(() => {
  //   talentDeneme();
  // },[])
  // async function talentDeneme(){
  //   const data = await getTalents();
  //   console.log(data);
  // }
  return (
    // <MasterPage>
    <Stack spacing={4} direction="row" align="center" justify='center'>
      <h1>Home Page</h1>
    </Stack>
    // </MasterPage>
  )
}

export default HomePage
