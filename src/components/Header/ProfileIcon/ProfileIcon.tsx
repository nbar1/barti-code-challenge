import Image from 'next/image';
import Link from 'next/link';

const ProfileIcon = () => {
  return (
    <div className="profile-icon">
      <Link href="/profile">
        <Image src="/profile.svg" alt="Go To Profile" width={48} height={48} />
      </Link>
    </div>
  );
};

export default ProfileIcon;
