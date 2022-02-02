import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FindingID.module.css'

function FindingID2() {
  return (
  <div>
    <div className={styles.main}>
        <h1 className={styles.title}>
        유저님의 아이디는 <br />
        user1234 입니다.</h1>
        <button className={styles.yellow_btn}>로그인하러 가기</button>
        <div className={styles.precaution}>비밀번호를 모르세요? <span>비밀번호 변경</span></div>
    </div>
  </div>
  );
};

export default FindingID2;



