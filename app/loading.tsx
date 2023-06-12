import styles from './Loading.module.scss';

export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#043e18',
        color: 'white',
        fontSize: '0.75rem',
        fontWeight: 400,
      }}
    >
      <div className={styles.loader}></div>
    </div>
  );
}
