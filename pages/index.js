import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AppFooter from '../components/Nav/footer'
import '../components/home.less'

function HomePage() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  
   return (
    <div>
        <div className={'bg'}>
          
        </div>
        <AppFooter></AppFooter>
    </div>
    )
  
  
}

export default HomePage
