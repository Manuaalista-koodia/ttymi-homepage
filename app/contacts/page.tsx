import Image from 'next/image';
import Link from 'next/link';
import styles from './Contacts.module.scss';

const ContactsPage = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__container}>
        <h1 className={styles.contacts__title}>TTYMI</h1>
        <Image className={styles.contacts__image} src={require('../../public/logo.png')} alt='TTYMI' />
        <p className={styles.contacts__social__text}>ttymi@lists.tuni.fi</p>
        <Link className={styles.contacts__social} href='https://www.instagram.com/ttymi_ry/' target='_blank'>
          <Image src={require('../../public/insta.svg')} alt='instagram' />
          <p className={styles.contacts__social__text}>Instagram</p>
        </Link>
        <Link className={styles.contacts__social} href='https://www.facebook.com/Teekkarivisa3/' target='_blank'>
          <Image src={require('../../public/face.svg')} alt='facebook' />
          <p className={styles.contacts__social__text}>Facebook</p>
        </Link>
      </div>
    </div>
  );
};

export default ContactsPage;
