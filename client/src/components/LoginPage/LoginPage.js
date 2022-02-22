import React from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/LoginPage.module.css";
import Layout from "../Layout/Layout";

function LoginPage() {
  return (
    <Layout>
      <div className={styles.main}>
        <h1 className={styles.title}>로그인</h1>
        <form>
          <input
            type="text"
            className={styles.id}
            placeholder="  아이디를 입력해 주세요"
          />
          <input
            type="password"
            className={styles.password}
            placeholder="  비밀번호를 입력해 주세요"
          />

          <div className={styles.find_auto_container}>
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
            <a href="/changingpw" className={styles.find_password}>
              비밀번호 찾기
            </a>
          </div>

          <input type="submit" className={styles.login_btn} value="로그인" />
        </form>

        <div className={styles.snsLoginContainer}>
          <div className={styles.snslogin}>
            <a href="/" className={styles.snsloginlink}>
              <img
                className={styles.google}
                src={require("../imgs/icon_google.png")}
                alt="google"
              />
              <span>구글로 계속하기</span>
            </a>
          </div>
          <div className={styles.snslogin}>
            <a href="/" className={styles.snsloginlink}>
              <img
                className={styles.naver}
                src={require("../imgs/icon_naver.png")}
                alt="naver"
              />
              <span>네이버로 계속하기</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LoginPage;
