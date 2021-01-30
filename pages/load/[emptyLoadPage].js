import { Spinner } from '@chakra-ui/react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginTalent } from '../../api/talentApi';
import { ID } from '../../constants/header';
import { setUserData } from '../../redux/actions/userAction';

export default function EmptyLoadPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(async () => {
    // let body = {
    //   linkedInId: router.query.emptyLoadPage
    // }
    // const userInformations = await loginTalent({ body: body })
    // localStorage.setItem('userInformations', JSON.stringify(userInformations));
    // dispatch(setUserData(JSON.stringify(userInformations)))
    // axios.defaults.headers.token = userInformations.tokenCode
    // ID._id = userInformations._id
    // console.log(userInformations)
    // router.push({
    //   pathname: '/talentProfile',
    //   query: {
    //     id: userInformations._id,
    //   }
  // });
  },[])
  return (
    <Spinner/>
  )
}
