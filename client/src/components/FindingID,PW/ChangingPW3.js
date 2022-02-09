import React from "react";
import { Link } from "react-router-dom";
import styles from '../CSS/ChangingPW.module.css'
import Layout from '../Layout/Layout';

function ChangingPW3() {
    return (
      <Layout>
        <div className={styles.main3}>
          <h1 className={styles.title3}>
            유저님, <br />
            비밀번호 변경을 완료했습니다.
          </h1>
          <Link to='/login'><button className={styles.yellow_btn}>로그인하러 가기</button></Link>
        </div>
      </Layout>
    );
}

export default ChangingPW3;