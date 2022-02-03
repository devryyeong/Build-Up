import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>로그인</h1>
      <from>
        <input
          type="text"
          className={styles.id}
          placeholder="  아이디를 입력해 주세요"
        ></input>
        <input
          type="password"
          className={styles.password}
          placeholder="  비밀번호를 입력해 주세요"
        ></input>

        <label className={styles.auto_login_border}>
          <input
            type="checkbox"
            className={styles.auto_login}
            name="auto_login"
            value="y"
          />
          자동 로그인
        </label>

        <a href="/findingid" className={styles.find_id}>
          아이디 찾기
        </a>
        <p className={styles.bar}>ㅣ</p>
        <a href="/changingpw" className={styles.find_password}>
          비밀번호 찾기
        </a>

        <input type="submit" className={styles.login_btn} value="로그인" />
      </from>

      <a href="/" className={styles.sns_login}>
        <div className={styles.login_google}>
          <img
            src={require('../imgs/icon_google.png')}
            alt="google"
            className={styles.img_google}
          />
          <span>구글로 계속하기</span>
        </div>
      </a>
      <a href="/" className={styles.sns_login}>
        <div className={styles.login_naver}>
          <img
            src={require('../imgs/icon_naver.png')}
            alt="naver"
            className={styles.img_naver}
          />
          <span>네이버로 계속하기</span>
        </div>
      </a>
    </div>
  );
}

export default LoginPage;
