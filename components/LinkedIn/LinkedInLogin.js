import { useRouter } from 'next/router';
import React from 'react';
import { LINKEDIN_URL_LOGIN } from '../../helpers/auth';


export default function LinkedInLogin() {
  const router = useRouter();
  const handleLinkedInLogin = async () => {
    
  }
  return (
    <a href={LINKEDIN_URL_LOGIN}>
    <div
      onClick={handleLinkedInLogin}
      type="submit"
      style={{ height: '40px', width: '215px' }}
    >
      <img
        style={{ height: '100%', width: '100%' }}
        src={
          'https://taggbox.com/blog/wp-content/uploads/2018/09/Signin-with-LinkedIn.png'
        }
        alt={'LinkedIn authentification'}
      />
    </div>
    </a>
  )
}
