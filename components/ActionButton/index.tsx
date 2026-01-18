import Link from 'next/link';

interface ActionButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'large' | 'small';
}

const ActionButton = ({ href, children, variant = 'large' }: ActionButtonProps) => {
  const sizeClasses =
    variant === 'large' ? 'px-6 py-0 text-2xl md:text-3xl' : 'px-4 py-0 text-base md:text-xl mt-4 md:mt-0 md:ml-8';

  const triangleClasses =
    variant === 'large'
      ? 'border-t-[1rem] border-b-[1rem] border-l-[1.75rem] mr-3 ml-2 md:border-t-4 md:border-b-4 md:border-l-[1.25rem] md:mr-2 md:ml-1'
      : 'border-t-3 border-b-3 border-l-[1.25rem] mr-2 ml-1 md:border-t-2 md:border-b-2 md:border-l-3';

  return (
    <Link
      href={href}
      className={`flex flex-row items-center bg-white text-ttymi-green rounded-2xl border-2 border-transparent shadow-lg cursor-pointer w-fit transition-all duration-150 hover:bg-ttymi-green hover:text-white hover:border-white group ml-4 ${sizeClasses}`}
    >
      <div
        className={`w-0 h-0 border-t-transparent border-b-transparent border-l-ttymi-green transition-all duration-150 group-hover:border-l-white ${triangleClasses}`}
      />
      <p className='font-semibold tracking-wide my-5 mx-2 md:my-4 md:mx-1'>{children}</p>
    </Link>
  );
};

export default ActionButton;
