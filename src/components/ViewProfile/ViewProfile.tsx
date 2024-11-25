'use client';

import { getCookie } from '@/helpers/getCookie';
import './ViewProfile.css';
import { format } from 'date-fns';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { UserProfile } from '@/types/UserProfile';
import { getAge } from '@/helpers/getAge';

const ViewProfile = () => {
  const [userProfile, setuserProfile] = useState<UserProfile | null>(null);
  useEffect(() => {
    setuserProfile(getCookie('userProfile'));
  }, []);

  if (!userProfile) {
    return null;
  }

  return (
    <div className="view-profile">
      <h1>
        {userProfile.firstName} {userProfile.lastName}
      </h1>
      <div className="last-update">
        Last Updated: {format(new Date(userProfile.updatedAt), 'MMMM do, yyyy')}
      </div>
      <div className="profile-field">
        <div>Age: {getAge(new Date(userProfile.dateOfBirth))}</div>
      </div>
      <div className="profile-field">
        <div>
          Location: {userProfile.city}, {userProfile.state}
        </div>
      </div>
      <div className="profile-field">
        <div>Favorite Character: {userProfile.favoriteCharacter}</div>
      </div>
      <div className="profile-field">
        <div>Favorite Disney Ride: {userProfile.favoriteRide}</div>
      </div>
      <div className="profile-field">
        <div>Favorite Disney Movie: {userProfile.favoriteMovie}</div>
      </div>
      <div className="profile-field">
        <div>Favorite DisneyLand: {userProfile.favoritePark}</div>
      </div>

      <Link href="/profile/edit" className="button">
        Edit Profile
      </Link>
    </div>
  );
};

export default ViewProfile;
