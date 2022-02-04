import React from "react";
import { Link } from "react-router-dom";
import styles from '../CSS/ChangingPW.module.css'

function ChangingPW3() {
    return (
    <div>
    <div className={styles.main3}>
        <h1 className={styles.title}>
            유저님, <br />
            비밀번호 변경을 완료했습니다.
        </h1>
        <button className={styles.yellow_btn}>로그인하러 가기</button>
    </div>
    </div>
    );
}

export default ChangingPW3;