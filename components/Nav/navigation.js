import { Flex } from '@chakra-ui/react';
import Link from 'next/link';


function Navigation() {
    return <Flex bg='tomato' w='100%' h={50} justify='space-evenly' align='center'>
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
    </Flex>
}

export default Navigation;