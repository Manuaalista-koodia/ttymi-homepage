'use client';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className='absolute top-0 left-0 overflow-hidden z-[1] w-full' ref={emblaRef}>
      <div className='flex'>
        <div className='flex-[0_0_100%] min-w-0'>
          <Image
            className='w-full h-screen object-cover'
            src='/mansikkapojat.jpg'
            alt='1'
            width={2048}
            height={2048}
            priority
          />
        </div>
        <div className='flex-[0_0_100%] min-w-0'>
          <Image className='w-full h-screen object-cover' src='/excu.jpg' alt='2' width={2048} height={2048} />
        </div>
        <div className='flex-[0_0_100%] min-w-0'>
          <Image className='w-full h-screen object-cover' src='/IMG_1558.jpg' alt='3' width={2048} height={2048} />
        </div>
        <div className='flex-[0_0_100%] min-w-0'>
          <Image className='w-full h-screen object-cover' src='/vuju.jpg' alt='4' width={2048} height={2048} />
        </div>
        <div className='flex-[0_0_100%] min-w-0'>
          <Image className='w-full h-screen object-cover' src='/IMG_8503.jpg' alt='5' width={2048} height={2048} />
        </div>
        <div className='flex-[0_0_100%] min-w-0'>
          <Image className='w-full h-screen object-cover' src='/grilli.jpg' alt='7' width={2048} height={2048} />
        </div>
        <div className='flex-[0_0_100%] min-w-0'>
          <Image className='w-full h-screen object-cover' src='/IMG_6150.jpg' alt='6' width={2048} height={2048} />
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className='bg-ttymi-gradient overflow-x-hidden min-h-screen'>
      <Carousel />
      <div className='relative z-[5] my-[19rem] mx-[10rem] w-[45rem] max-[1300px]:my-[19rem] max-[1300px]:mx-[5rem] max-[1300px]:w-[35rem] max-[768px]:my-[16rem] max-[768px]:mx-[2rem] max-[768px]:w-[25rem] max-[540px]:my-[13rem] max-[540px]:mx-[1rem] max-[540px]:w-[20rem]'>
        <h1 className='text-[#fdfdfd] text-[3.5rem] font-semibold tracking-[0.1rem] drop-shadow-[2px_2px_5px_rgba(0,0,0,1)] max-[1300px]:text-[2rem] max-[768px]:text-[1.5rem]'>
          MANUAALISTA MENOA JO VUODESTA 2015!
        </h1>
      </div>

      <div className='flex flex-col items-center'>
        <div className='bg-white text-black rounded-t-[2rem] p-4 pb-16 w-full relative z-10 md:p-[3rem_6rem] md:w-[80%] overflow-x-hidden'>
          <div className='flex flex-row pb-12 overflow-hidden max-[1300px]:flex-col max-[1300px]:items-center max-[1300px]:p-4 max-[768px]:p-0'>
            <div className='flex flex-col mt-4'>
              <h1 className='text-3xl font-semibold mb-4'>MIKÄ IHMEEN TTYMI?</h1>
              <p className='text-xl mt-8 leading-relaxed font-normal'>
                TTYMI ry on Hervannasta lähtöinen opiskelijakerho. TTYMI on mukana tekemässä Tamperelaista opiskelija
                yhteisöä mm. järjestämällä erilaisia tapahtumia. Ydintoimintaamme onkin kaikille avoimien Teekkarivisan
                järjestäminen. TTYMI osallistuu ahkerasti myös ylioppilaskunnan ja teekkariyhdistyksen tapahtumiin,
                kuten erilaisiin rastikierroksiin ja tietenkin Wappuun! Teemme toimintaamme rennolla otteella ja pilke
                silmäkulmassa. Jäsenemme voit tunnistaa vihreistä liiveistä ja manuaalisesta menosta.
              </p>
              <p className='text-xl mt-8 leading-relaxed font-normal'>
                Voit seurata toimintaamme parhaiten Instagramista!
              </p>
            </div>
            <Image
              className='ml-16 mt-20 w-[25rem] h-[25rem] max-[1300px]:m-4 max-[768px]:-m-8 max-[768px]:scale-75'
              src={require('../../public/patch.jpg')}
              alt='logo'
              width={2048}
              height={2048}
            />
          </div>

          <div className='flex flex-row-reverse pb-12 overflow-hidden max-[1300px]:flex-col max-[1300px]:items-center'>
            <div className='flex flex-col mt-4'>
              <div className='flex flex-row'>
                <h1 className='text-3xl font-semibold mb-4'>TEEKKARIVISAT</h1>
              </div>
              <p className='text-xl mt-8 leading-relaxed font-normal'>
                Teekkarivisa on TTYMIn perinteinen noin kuukausittain järjestettävät pubivisa/tietokilpailu
                Teekkari-twistillä! Teekkarivisaan voi osallistua yksin tai parhaan kokemuksen takaamiseksi 4 henkilön
                joukkueella. Teekkarivisaan osallistuminen on ilmaista ja kaikille avointa. Teekkarivisojen ajankohdista
                tiedotetaan TTYMIn someissa sekä muissa tiedotuskanavissa.
              </p>

              <p className='text-xl mt-8 leading-relaxed font-normal'>
                Haluatko Teekkarivisan myös omaan tapahtumaasi? TTYMI tekee myös visoja räätälöitynä sinun
                tapahtumakonseptiin! Pyydä tarjous osoitteessa{' '}
                <span className='text-ttymi-green font-bold underline'>ttymi@lists.tuni.fi</span>
                {` `}tai vedä TTYMIläistä <del>hihasta</del> liivistä.
              </p>
              <Link
                className='flex flex-row items-center text-white bg-[#0a7a2f] rounded-2xl border-2 border-transparent px-6 shadow-md cursor-pointer w-fit transition-all duration-150 hover:bg-ttymi-dark max-[768px]:px-4 mt-8'
                href={'/visa'}
              >
                <div className='w-0 h-0 border-t-[1rem] border-t-transparent border-b-[1rem] border-b-transparent border-l-[1.5rem] border-l-white mr-3 ml-2 max-[768px]:border-t-[0.75rem] max-[768px]:border-b-[0.75rem] max-[768px]:border-l-[1.25rem] max-[768px]:mr-2 max-[768px]:ml-1' />
                <p className='text-xl font-semibold tracking-wide m-[1.25rem_0.5rem] max-[768px]:text-base'>TILASTOT</p>
              </Link>
            </div>
            <Image
              className='mr-16 mt-4 w-[25rem] h-[25rem] max-[1300px]:m-4 max-[768px]:w-[25rem] max-[768px]:h-[25rem] max-[768px]:-m-8 max-[768px]:scale-75'
              src='/visa.png'
              alt='visa'
              width={2048}
              height={2048}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
