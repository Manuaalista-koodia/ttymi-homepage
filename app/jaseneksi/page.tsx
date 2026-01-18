import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TTYMI - Jäseneksi',
};

const JaseneksiPage = () => {
  return (
    <div className='bg-ttymi-green flex flex-col items-center min-h-[70vh]'>
      <Image
        className='absolute left-0 top-0 w-full h-[30rem] object-cover'
        src='/green.jpg'
        alt='background-image'
        width={1920}
        height={1080}
      />
      <div className='bg-white text-black rounded-t-[2rem] p-32 w-4/5 mt-[25rem] max-[960px]:mt-[3rem] overflow-x-hidden z-10 flex flex-col items-start max-[1300px]:w-4/5 max-[1300px]:p-16 max-[650px]:p-8'>
        <div className='flex flex-row'>
          <Image
            className='w-[25rem] h-[25rem] mr-24 max-[1300px]:hidden'
            src='/jaseneksi.jpg'
            alt='jaseneksi'
            width={400}
            height={400}
          />
          <div className='flex flex-col'>
            <h1 className='text-[2.5rem] font-semibold mb-4 max-[960px]:text-[2rem] max-[650px]:text-[1.75rem] max-[500px]:text-[1.5rem]'>
              JÄSENEKSI?
            </h1>
            <p className='text-[1.75rem] leading-[1.5] font-normal max-w-[95%] max-[960px]:text-[1.5rem] max-[650px]:text-[1.25rem] max-[500px]:text-[1rem]'>
              Haluaisitko päästä mukaan tekemään visoja ja muita tapahtumia hyvällä porukalla? Jos vastaus on kyllä,
              voit hakea kerhomme jäsenyyttä hakulomakkeen kautta! Hakulomakkeen ja jäsenkriteerimme löydät alta.
              Valitsemme uusia jäseniä 1-3 kertaa vuodessa 1-4 henkilöä kerrallaan.
            </p>
          </div>
        </div>

        <div className='flex flex-col mt-8 max-[1300px]:mt-0'>
          <h3 className='text-[2rem] font-semibold mb-4 max-[960px]:text-[1.75rem] max-[650px]:text-[1.5rem] max-[500px]:text-[1.25rem]'>
            Jäsenkriteerit:
          </h3>
          <ul className='list-outside pl-4 mr-8'>
            <li className='text-[1.75rem] leading-[1.5] font-normal max-w-[95%] max-[960px]:text-[1.5rem] max-[650px]:text-[1.25rem] max-[500px]:text-[1rem]'>
              Olet vähintään 2. vuoden opiskelija Tamperelaisessa korkeakoulussa
            </li>
            <li className='text-[1.75rem] leading-[1.5] font-normal max-w-[95%] max-[960px]:text-[1.5rem] max-[650px]:text-[1.25rem] max-[500px]:text-[1rem]'>
              Sinulla on sujuvat suomen kielen taidot
            </li>
            <li className='text-[1.75rem] leading-[1.5] font-normal max-w-[95%] max-[960px]:text-[1.5rem] max-[650px]:text-[1.25rem] max-[500px]:text-[1rem]'>
              Olet kiinnostunut opiskelijakulttuurin kehittämisestä ja tykkäät tehdä asioita pilke silmäkulmassa
            </li>
            <li className='text-[1.75rem] leading-[1.5] font-normal max-w-[95%] max-[960px]:text-[1.5rem] max-[650px]:text-[1.25rem] max-[500px]:text-[1rem]'>
              Pystyt sitoutumaan kerhon toimintaan useamman vuoden ajaksi
            </li>
          </ul>

          <h3 className='text-[2rem] font-semibold mb-4 mt-8 max-[960px]:text-[1.75rem] max-[650px]:text-[1.5rem] max-[500px]:text-[1.25rem]'>
            Tämän lisäksi seuraavia asioita voidaan katsoa eduksi:
          </h3>
          <ul className='list-outside pl-4 mr-8'>
            <li className='text-[1.75rem] leading-[1.5] font-normal max-w-[95%] max-[960px]:text-[1.5rem] max-[650px]:text-[1.25rem] max-[500px]:text-[1rem]'>
              Kokemus tapahtumien järjestämisestä
            </li>
            <li className='text-[1.75rem] leading-[1.5] font-normal max-w-[95%] max-[960px]:text-[1.5rem] max-[650px]:text-[1.25rem] max-[500px]:text-[1rem]'>
              Graafinen ja muu visuaalinen osaaminen
            </li>
            <li className='text-[1.75rem] leading-[1.5] font-normal max-w-[95%] max-[960px]:text-[1.5rem] max-[650px]:text-[1.25rem] max-[500px]:text-[1rem]'>
              Olet kiinnostunut esiintymisestä
            </li>
          </ul>

          <p className='text-[1.75rem] leading-[1.5] font-normal max-w-[95%] mt-8 max-[960px]:text-[1.5rem] max-[650px]:text-[1.25rem] max-[500px]:text-[1rem]'>
            Näiden kriteerien lisäksi kahden yhdistyksen jäsenen tulee kannattaa hakemusta ja se vaatii myös jäsenistön
            yksimielisen päätöksen. Olemme sinuun yhteyksissä ainoastaan siinä tapauksessa, että etenet
            jäsenprosessisamme eteenpäin. Säilytämme lomakkeeseen jätettyjä vastauksia 12 kuukauden ajan, jonka jälkeen
            ne poistetaan.
          </p>

          <h3 className='text-[2rem] font-semibold mb-4 mt-8 max-[960px]:text-[1.75rem] max-[650px]:text-[1.5rem] max-[500px]:text-[1.25rem]'>
            Hakulomake (auki 24/7/365)
          </h3>
          <p className='text-[1.75rem] leading-[1.5] font-normal max-w-[95%] max-[960px]:text-[1.5rem] max-[650px]:text-[1.25rem] max-[500px]:text-[1rem]'>
            Voit jättää hakemuksen tämän lomakkeen kautta (vaatii kirjautumisen Google-tilillä):
            <br />
            <a
              className='text-[1.75rem] leading-[1.5] font-semibold text-[#043e18] no-underline max-[960px]:text-[1.5rem] max-[650px]:text-[1.25rem] max-[500px]:text-[1rem]'
              href='https://forms.gle/Ab45ow4vi2DArmCa6'
              target='_blank'
            >
              https://forms.gle/Ab45ow4vi2DArmCa6
            </a>
          </p>

          <h3 className='text-[2rem] font-semibold mb-4 mt-8 max-[960px]:text-[1.75rem] max-[650px]:text-[1.5rem] max-[500px]:text-[1.25rem]'>
            Lisätietoa
          </h3>
          <p className='text-[1.75rem] leading-[1.5] font-normal max-w-[95%] max-[960px]:text-[1.5rem] max-[650px]:text-[1.25rem] max-[500px]:text-[1rem]'>
            Haluatko lisätietoa toiminnastamme tai jäikö jokin mietityttämään? Voit kysyä lisätietoa Telegramissa
            laittamalla viestiä @uimakoulu tai laittamalla mailia ttymi@lists.tuni.fi.
          </p>

          <div className='w-full flex flex-row justify-center items-center mt-4'>
            <Image
              className='w-32 h-32 max-[960px]:w-24 max-[960px]:h-24 max-[650px]:w-20 max-[650px]:h-20'
              src='/logo.png'
              alt='ttymi-logo'
              width={128}
              height={128}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JaseneksiPage;
