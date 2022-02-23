import React, { Fragment } from 'react';
import Layout from '../Layout/Layout';
import styles from '../CSS/Custom.module.css';

const Custom = () => {
    return (
      <Layout>
          <div className={styles.main} style={{paddingTop: "300px", margin: "auto", width: "1200px", height: "900px"}}>
        <div className={styles.container1}>
          <img src={require("../imgs/calling.jpg")} className={styles.img} alt="calling" />
          <div className={styles.textContainer}>
              <span className={styles.text}>Telephone</span>
              <span className={styles.text}>02-1234-1234</span>
              <span className={styles.text}>010-1234-1234</span>
          </div>
        </div>
        <div className={styles.container}>
          <img src={require("../imgs/email.jpg")} className={styles.img} alt="email" />
          <div className={styles.textContainer}>
              <span className={styles.text}>Email</span>
              <span className={styles.text}>suin10102@mju.ac.kr</span>
              <span className={styles.text}>abc1234@abc.abcd</span>
          </div>
        </div>
        </div>
      </Layout>
    );
};

export default Custom;