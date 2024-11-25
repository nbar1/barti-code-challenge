import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <Image src="/logo.svg" alt="Disney Logo" width={96} height={40} />
      </Link>
    </div>
  );
};

export default Logo;
