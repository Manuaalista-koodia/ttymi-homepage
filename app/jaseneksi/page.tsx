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
        fill
      />
      <div className='bg-white text-black rounded-t-[2rem] p-32 w-4/5 mt-[25rem] max-[960px]:mt-[3rem] overflow-x-hidden z-10 flex flex-col items-start max-[1300px]:w-4/5 max-[1300px]:p-16 max-[650px]:p-8'>
        <div className='flex flex-row'>
          <Image
            className='w-[20rem] h-[20rem] mr-12 max-[1300px]:hidden'
            src='/jaseneksi.jpg'
            alt='jaseneksi'
            width={400}
            height={400}
          />
          <div className='flex flex-col'>
            <h1 className='text-3xl font-semibold mb-4'>JÄSENEKSI?</h1>
            <p className='text-xl leading-relaxed font-normal max-w-[95%]'>
              Haluaisitko päästä mukaan tekemään visoja ja muita tapahtumia hyvällä porukalla? Jos vastaus on kyllä,
              voit hakea kerhomme jäsenyyttä hakulomakkeen kautta! Hakulomakkeen ja jäsenkriteerimme löydät alta.
              Valitsemme uusia jäseniä 1-3 kertaa vuodessa 1-4 henkilöä kerrallaan.
            </p>
          </div>
        </div>

        <div className='flex flex-col mt-8 max-[1300px]:mt-0'>
          <h3 className='text-2xl font-semibold mb-4'>Jäsenkriteerit:</h3>
          <ul className='list-outside pl-4 mr-8'>
            <li className='text-xl leading-relaxed font-normal max-w-[95%]'>
              Olet vähintään 2. vuoden opiskelija Tamperelaisessa korkeakoulussa
            </li>
            <li className='text-xl leading-relaxed font-normal max-w-[95%]'>Sinulla on sujuvat suomen kielen taidot</li>
            <li className='text-xl leading-relaxed font-normal max-w-[95%]'>
              Olet kiinnostunut opiskelijakulttuurin kehittämisestä ja tykkäät tehdä asioita pilke silmäkulmassa
            </li>
            <li className='text-xl leading-relaxed font-normal max-w-[95%]'>
              Pystyt sitoutumaan kerhon toimintaan useamman vuoden ajaksi
            </li>
          </ul>

          <h3 className='text-2xl font-semibold mb-4 mt-8'>Tämän lisäksi seuraavia asioita voidaan katsoa eduksi:</h3>
          <ul className='list-outside pl-4 mr-8'>
            <li className='text-xl leading-relaxed font-normal max-w-[95%]'>Kokemus tapahtumien järjestämisestä</li>
            <li className='text-xl leading-relaxed font-normal max-w-[95%]'>Graafinen ja muu visuaalinen osaaminen</li>
            <li className='text-xl leading-relaxed font-normal max-w-[95%]'>Olet kiinnostunut esiintymisestä</li>
          </ul>

          <p className='text-xl leading-relaxed font-normal max-w-[95%] mt-8'>
            Näiden kriteerien lisäksi kahden yhdistyksen jäsenen tulee kannattaa hakemusta ja se vaatii myös jäsenistön
            yksimielisen päätöksen. Olemme sinuun yhteyksissä ainoastaan siinä tapauksessa, että etenet
            jäsenprosessisamme eteenpäin. Säilytämme lomakkeeseen jätettyjä vastauksia 12 kuukauden ajan, jonka jälkeen
            ne poistetaan.
          </p>

          <h3 className='text-2xl font-semibold mb-4 mt-8'>Hakulomake (auki 24/7/365)</h3>
          <p className='text-xl leading-relaxed font-normal max-w-[95%]'>
            Voit jättää hakemuksen tämän lomakkeen kautta (vaatii kirjautumisen Google-tilillä):
            <br />
            <a
              className='text-xl leading-relaxed font-semibold text-ttymi-green no-underline'
              href='https://forms.gle/Ab45ow4vi2DArmCa6'
              target='_blank'
            >
              https://forms.gle/Ab45ow4vi2DArmCa6
            </a>
          </p>

          <h3 className='text-2xl font-semibold mb-4 mt-8'>Lisätietoa</h3>
          <p className='text-xl leading-relaxed font-normal max-w-[95%]'>
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
