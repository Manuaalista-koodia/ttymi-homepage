import Image from 'next/image';
import Link from 'next/link';

interface SocialLinkProps {
  href: string;
  iconSrc: string;
  altText: string;
}

const SocialLink = ({ href, iconSrc, altText }: SocialLinkProps) => {
  return (
    <Link href={href} target='_blank'>
      <div className='flex flex-row justify-center items-center bg-white w-12 h-12 rounded-full p-2 hover:bg-gray-200 transition-colors'>
        <div className='relative w-6 h-6'>
          <Image src={iconSrc} alt={altText} fill />
        </div>
      </div>
    </Link>
  );
};

export default SocialLink;
