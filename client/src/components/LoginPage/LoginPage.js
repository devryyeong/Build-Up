<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import './LoginPage.module.css';
import naver from "../imgs/icon_naver.png";
import google from "../imgs/icon_google.png";

function LoginPage() {
  return (
    <div>
        <h1 className="title">로그인</h1>
        <form>
            <input type="text" id="id" placeholder="  아이디를 입력해 주세요"></input>
            <input type="text" id="password" placeholder="  비밀번호를 입력해 주세요"></input>

            <label id="auto_login_border">
                <input type="checkbox" id="auto_login" name="auto_login" value="y" />
                자동 로그인
            </label>
            
            <a href="/" id="find_id">아이디 찾기</a>
            <p id="bar">ㅣ</p>
            <a href="/" id="find_password">비밀번호 찾기</a>
            <input type="submit" id="login_btn" value="로그인"/>
        </form>
=======
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
>>>>>>> b3eb913f15933257a31587f6dc47c5c0c99b864a

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
