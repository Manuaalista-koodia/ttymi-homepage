import styles from './Loading.module.scss';

export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#043e18',
        color: 'white',
        fontSize: '0.75rem',
        fontWeight: 400,
        paddingTop: '6rem',
      }}
      className={styles.loading}
    >
      <svg width='100px' height='100px' viewBox='-4 -1 38 28'>
        <polygon fill='transparent' stroke='#FFFF' stroke-width='2' points='15,0 30,30 0,30'></polygon>
      </svg>
    </div>
  );
}
