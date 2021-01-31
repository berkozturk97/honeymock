import { Flex } from '@chakra-ui/react'


import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Icon, Dropdown } from 'rsuite'
import 'rsuite/lib/styles/index.less'
import { setUserData } from '../../redux/actions/userAction'

function Navigation() {
  const router = useRouter()
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user)
  useEffect(() => {
    console.log('navbar', userData)
  }, [userData])

  const logOut = async () => {
    await localStorage.setItem('userInformations', null)
    await dispatch(setUserData(null))
    router.push('/');

  }

  const goProfile = () => {
    console.log(JSON.parse(userData))
    if (JSON.parse(userData) !== null) {
      if (JSON.parse(userData).type === 1) {
        return `/talentProfile?id=${JSON.parse(userData) ? JSON.parse(userData)._id : null}`;
      }
      return `/company/companyProfile?id=${JSON.parse(userData) ? JSON.parse(userData)._id : null}`;
    }
    return '/';

  }

  const renderNav = () => {
    if (userData === undefined || userData === null || Object.values(userData).length === 0) {
      return (
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
            <Link href={goProfile()}>
              {`${JSON.parse(userData) ? JSON.parse(userData).name : null} ${JSON.parse(userData) ? JSON.parse(userData).surname : ''}`}
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
        </Nav>
      </Navbar.Body>
    </Navbar>
  )
}

export default Navigation;
