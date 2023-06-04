import React from 'react';
import styles from './Visa.module.scss';

const VisaPage = () => {
  return (
    <div className={styles.visa}>
      <div className={styles.title__container}>
        <h1>TEEKKARIVISA</h1>
        <select>
          <h1>
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
            <option value={2021}>2021</option>
          </h1>
        </select>
      </div>
    </div>
  );
};

export default VisaPage;
