import React from "react";
import styles from "../CSS/SignUpSuccess.module.css";
import Layout from "../Layout/Layout";
import {Link} from 'react-router-dom';

const SignUpSucess = () => {
  return (
    <Layout>
      <div className={styles.main}>
        <h1 className={styles.title}>유저님, 가입을 축하드립니다!</h1>
        <Link to='/login'><button className={styles.yellowBtn}>로그인하러 가기</button></Link>
      </div>
    </Layout>
  );
};

export default SignUpSucess;
