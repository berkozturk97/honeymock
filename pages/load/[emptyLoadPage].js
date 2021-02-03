import { Spinner } from '@chakra-ui/react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginTalent } from '../../api/talentApi';
import Loading from '../../components/Loading/Loading';
import { ID } from '../../constants/header';
import { setUserData } from '../../redux/actions/userAction';

export default function EmptyLoadPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(async() => {
    const userInformations = await load();
    setTimeout(() => {
        router.push({
      pathname: '/talentProfile',
      query: {
        id: userInformations._id,
      }
  });
    }, 2000);
  
  },[])

  const load = async () => {
    let body = {
      linkedInId: router.query.emptyLoadPage
    }
    const userInformations = await loginTalent({ body: body })
    await localStorage.setItem('userInformations', JSON.stringify(userInformations));
    await dispatch(setUserData(JSON.stringify(userInformations)))
    ID._id = userInformations._id;
    
    return userInformations;
  }

  return (
    <Loading/>
  )
}
