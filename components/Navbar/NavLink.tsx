import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isMobile?: boolean;
  target?: string;
};

export const NavLink = ({ href, children, onClick, isMobile = false, target }: Props) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      target={target}
      className={
        isMobile
          ? 'text-xl m-2 text-white no-underline'
          : 'text-white text-base no-underline px-3 py-2 mx-2 rounded-xl transition-all duration-200 hover:bg-white hover:text-black'
      }
    >
      {children}
    </Link>
  );
};
