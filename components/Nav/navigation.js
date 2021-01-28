import { Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Navbar, Nav, Icon, Dropdown } from 'rsuite'
import 'rsuite/lib/styles/index.less'

function Navigation() {
  const [name, setName] = useState('')
  useEffect(() => {

  },[])
  const getUser = async () => {
    const userInfos = await JSON.parse(localStorage.getItem('userInformations'))
    setName(userInfos.name + ' ' + userInfos.surname)
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
