import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <footer className='bg-ttymi-dark text-white px-4 py-6 z-50 flex flex-row justify-between items-center gap-4'>
      <div className='flex flex-col items-start gap-1'>
        <p className='text-sm m-0'>Manuaalista menoa jo vuodesta 2015!</p>
        <p className='text-sm m-0 hover:underline cursor-text'>ttymi@lists.tuni.fi</p>
        <p className='text-sm m-0'>© 2023 TTYMI</p>
      </div>

      <div className='flex flex-row gap-4'>
        <SocialLink href='https://www.instagram.com/ttymi_ry/' iconSrc='/insta.svg' altText='instagram' />
        <SocialLink href='https://www.facebook.com/Teekkarvisa3/' iconSrc='/face.svg' altText='facebook' />
      </div>
    </footer>
  );
};

export default Footer;
