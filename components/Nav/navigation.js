import { Flex } from '@chakra-ui/react'


import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Icon, Dropdown } from 'rsuite'
import 'rsuite/lib/styles/index.less'
import { setUserData } from '../../redux/actions/userAction'

function Navigation() {
  const [name, setName] = useState('')
  const router = useRouter()
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user)
  useEffect(() => {
      console.log('navbar', userData)
  },[userData])

  const logOut = async () => {
    await localStorage.setItem('userInformations', {})
    await dispatch(setUserData({}))
    router.push('/');

  }

  const renderNav = () => {
    if(userData === undefined || userData === null || Object.values(userData).length === 0 ) {
      console.log('userData.name !== ')
      return(
        <>
        <Nav.Item componentClass='span' >
            <Link href="/loginTalent">
              Login
            </Link>
          </Nav.Item>
          <Nav.Item componentClass='span' > 
            <Link href="/signUpTalent">
              Sign Up
            </Link>
          </Nav.Item>
          </>
      )
    } else {
      return (
        <>
        <Nav.Item componentClass='span' >
            <Link href="/talentProfile">
              {userData.name + ' ' + userData.surname}
            </Link>
          </Nav.Item>
          <Nav.Item componentClass='span' > 
            
              <a onClick={logOut}>
              Logout
              </a>
              
       
          </Nav.Item>
        </>
      )
    }
  }
  return (
    <Navbar appearance='inverse'>
      <Navbar.Body>
        <Nav>
          <Nav.Item componentClass='span' icon={<Icon icon="home" />}>
            <Link href="/">
              Home Page
            </Link>
          </Nav.Item>
          
          {renderNav()}
          {/* <Dropdown title="About">
            <Dropdown.Item>Talent</Dropdown.Item>
            <Dropdown.Item>Company</Dropdown.Item>
            <Dropdown.Item>Us</Dropdown.Item>
          </Dropdown> */}
        </Nav>
        {/* <Nav pullRight>
          <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
        </Nav> */}
      </Navbar.Body>
    </Navbar>
  )
}

export default Navigation

{
  /* <Flex bg='tomato' w='100%' h={50} justify='space-evenly' align='center'>
        <Link href='/'>
            <a>Home Page</a>
        </Link>
        <Link href='/talent'>
            <a>Talent</a>
        </Link>
        <Link href='/login'>
            <a>Login</a>
        </Link>
        <Link href='/signUpTalent'>
            <a>Sign Up</a>
        </Link>
    </Flex> */
}
