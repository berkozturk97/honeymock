import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AppFooter from '../components/Nav/footer'
import '../components/home.less'
import { Text } from '@chakra-ui/react'
import { Button } from '@material-ui/core'

function HomePage() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
      <div className={'bg'}>
        <div className="initialText">
          <Text fontSize="6xl">Choose a job love</Text>
          <Text mt={10} fontSize="3xl">Join the employment marketplace for tech professionals where you're matched with companies that apply to you. </Text>
        </div>
        <div className="buttons">
            <Button variant="contained" color="primary" fullWidth>Find me a job</Button>
            <Button variant="outlined" fullWidth>I'm hiring</Button>
        </div>
      </div>
      <AppFooter></AppFooter>
    </div>
  )
}

export default HomePage
