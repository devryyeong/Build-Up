import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS/FindingID.module.css'
import Layout from '../Layout/Layout';

function FindingID2() {
  return (
    <Layout>
      <div className={styles.main}>
        <h1 className={styles.title}>
          유저님의 아이디는 <br />
          user1234 입니다.
        </h1>
        <Link to='/login'><button className={styles.yellow_btn}>로그인하러 가기</button></Link>
        <div className={styles.precaution}>
          비밀번호를 모르세요? <Link to='/changingpw'><span>비밀번호 변경</span></Link>
        </div>
      </div>
    </Layout>
  );
};

export default FindingID2;



