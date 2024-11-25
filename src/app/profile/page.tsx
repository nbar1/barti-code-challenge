'use client';

import ViewProfile from '@/components/ViewProfile';
import { getCookie } from '../../helpers/getCookie';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProfilePage = () => {
  const router = useRouter();

  useEffect(() => {
    const userInfo = getCookie('userProfile');
    if (!userInfo) {
      router.push('/profile/edit');
    }
  }, []);

  return <ViewProfile />;
};

export default ProfilePage;
