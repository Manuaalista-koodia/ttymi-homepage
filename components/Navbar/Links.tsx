import { NavLink } from './NavLink';

type Props = {
  isMobile: boolean;
  menuOpen?: boolean;
  setMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Links = ({ isMobile, menuOpen, setMenuOpen }: Props) => {
  const handleClick = () => {
    if (isMobile && setMenuOpen) {
      setMenuOpen(false);
    }
  };

  if (isMobile) {
    return (
      <div
        className={`flex flex-col justify-start items-end fixed top-12 right-0 w-70 h-screen pt-8 px-5 bg-ttymi-green transform transition-transform duration-250 z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <NavLink href='/about' onClick={handleClick} isMobile>
          TIETOA
        </NavLink>
        <NavLink href='/events' onClick={handleClick} isMobile>
          TAPAHTUMAT
        </NavLink>
        <NavLink href='/visa' onClick={handleClick} isMobile>
          TEEKKARIVISA
        </NavLink>
        <NavLink href='/jaseneksi' onClick={handleClick} isMobile>
          JÄSENEKSI?
        </NavLink>
        <NavLink href='http://uno.ttymi.fi/' onClick={handleClick} isMobile target='_blank'>
          UNO
        </NavLink>
        <NavLink href='/contacts' onClick={handleClick} isMobile>
          YHTEYSTIEDOT
        </NavLink>
      </div>
    );
  }

  return (
    <div className='flex justify-between items-center mr-8'>
      <NavLink href='/about'>TIETOA</NavLink>
      <NavLink href='/events'>TAPAHTUMAT</NavLink>
      <NavLink href='/visa'>TEEKKARIVISA</NavLink>
      <NavLink href='/jaseneksi'>JÄSENEKSI?</NavLink>
      <NavLink href='http://uno.ttymi.fi/' target='_blank'>
        UNO
      </NavLink>
      <NavLink href='/contacts'>YHTEYSTIEDOT</NavLink>
    </div>
  );
};
