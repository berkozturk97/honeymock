import { Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { Navbar, Nav, Icon, Dropdown } from 'rsuite'
import 'rsuite/lib/styles/index.less'

function Navigation() {
  return (
    <Navbar>
      <Navbar.Body>
        <Nav>
          <Nav.Item icon={<Icon icon="home" />}><Link href='/'>
            <a>Home Page</a>
        </Link></Nav.Item>
          <Nav.Item ren>
            <Link href="/loginTalent">
              <a>Login</a>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/signUpTalent">
              <a>Sign Up</a>
            </Link>
          </Nav.Item>
          <Dropdown title="About">
            <Dropdown.Item>Talent</Dropdown.Item>
            <Dropdown.Item>Company</Dropdown.Item>
            <Dropdown.Item>Us</Dropdown.Item>
          </Dropdown>
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
        </Nav>
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
