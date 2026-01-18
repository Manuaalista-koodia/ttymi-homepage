'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();
  return (
    <div
      className='absolute top-28 left-20 cursor-pointer max-[1300px]:top-20 max-[1300px]:left-4'
      onClick={() => router.back()}
    >
      <div className='relative w-12 h-12 max-[1300px]:w-8 max-[1300px]:h-8'>
        <Image src='/arrow-left.png' alt='back-arrow' fill />
      </div>
    </div>
  );
};
