/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { EventType } from '@/types';
import names from './ttymi-name.json';

const NAMES = [
  'Tulevaisuuden Taiteilijat Yhdistävät Materiaalit Inspiraatioksi',
  'Tähtitieteilijät Tutkivat Yllättäviä Maailmoja Innokkaasti',
  'Tampereen Tonnikalan Ystävät Mainiosti Ingognitossa',
  'Totiset Tiedustelijat Yhdessä Maailmalla Iloitsemassa',
  'Tuskallisen Turhauttava Yritys Maksaa Isosti',
  'Tänään Testissä Yleellisiä Makuelämyksiä -Instituutti',
  'Tavataan Teillä Yhdessä Mysteeri-Illallisella',
  'Totaalisesti Turhautuneen Ystävän Murheen Ikuistaminen',
  'Thanks Theresa Your Mother Indefinitely',
  'Terveiden Taaperoiden Yhdistys, Movement ja Ikuisuus',
  'Turhautuneet Tuubassa Yrjöävät Mustekala Ilkiöt',
  'Turmion Tuojat Yksilöllisille Mulkuille Ihmiselijöille',
  'Tampereen TYhmä Manner Ilmasto',
  'Tampereen Tupakan Ystävät Muuan Ihmiset',
  'Todellisuuden Taika Yhdistää Meitä Innokkaasti',
  'Tämä Tarina Yllättää Monia Ihmisiä',
  'Taitavan Työskentelyn Ytimessä Mieli Inspiroituu',
  'Toiminnan Tärkeys Yhdistää Meitä Inspiroivasti',
  'Toimiva Tiimi Yltää Menestykseen Innostavasti',
  'Terribly Tired Yawners Managing Insomnia',
  'Turhautuneet Tieteilijät Ylläpitävät Maailman Ihmeitä',
  'Traktorin Työnnön Yllättävä ManifestI',
  'Three Themed Yearly Menaces Inc.',
  'Tyylikkäät Tuottajat Yhdistämässä Maailmojen Inspiraatioita',
  'They Think Youghurt has Mayo Inside',
  'Tuottavat Työntekijät Yhdistävät Menestyksen Innolla',
  'Tehokkaat Työntekijät Yrittävät Matkia Innovaatioita',
  'Turmiolliset Teekkarit Ylistävät Matematiikkaa Isosti',
  'Toxiset Tupakat Yrittämässä Muuttaa Ilmastoa',
  'Tonnikalan Toukat Maksavat Yritykselle Ihmisistä',
  'Tieteilijät Tietävät Yhteydet Materiaalien Innovointiin',
  'Toimivat Tiimit Ylläpitävät Menestystä Innokkuudella',
  'Tampereen Taikurit Yhdessä Muodostavat Ilotulitteen',
  'Tuskalliset Tarinat Yhdistävät Monia Itämerellä',
  'Turmiolliset Testaajat Yrittävät Muodostaa Illuminatin',
  'Tietotekniset Tupakan Ystävät Menettävät Ilotulitteensa',
  'Todellisuus Tuottaa Ystäviä Mukaan Inventaarioon',
  'Tietokone Tiedustelijat Yrittämässa Moraalisesti Innovoida',
  'Täydelliset Tuubansoittajat Yksinään Matkalla Itämerellä',
  'Totaalisen Tyylikkäät Ystävät Meitä Iskemässä',
];

// Returns either placeholder image or image from pocketbase
export const getImgComponent = (event: EventType) => {
  if (!event.image) {
    return <Image src={require('./public/placeholder.png')} alt={`${event.title}-image`} />;
  }
  return (
    <img
      src={`https://ttymi-homepage.pockethost.io/api/files/events/${event.id}/${event.image}`}
      alt={`${event.title}-image`}
    />
  );
};

/* export const getTTYMIName = (): string => {
  const words: string[] = [];
  Object.values(names).forEach((key: any) => {
    const word = key[Math.floor(Math.random() * key.length)];
    words.push(word);
  });
  return words.join(' ');
}; */

export const getTTYMIName = (): string => {
  return NAMES[Math.floor(Math.random() * NAMES.length)];
};
