import React from "react";
import { Link } from "react-router-dom";
import styles from '../CSS/ChangingPW.module.css'

function ChangingPW2() {
    return (
    <div className={styles.main2}>
        <h1 className={styles.title}>비밀번호 변경</h1>
        <div className={styles.input_container}>
            <div className={styles.input_title}>비밀번호</div>
            <div className={styles.input_input}>
                <input type="text" placeholder="." />
            </div>
            <div className="precaution">8 ~ 16자 이내, 영문과 숫자, 특수문자 조합</div>
        </div>
        <div className={styles.input_container}>
            <div className={styles.input_title}>비밀번호 확인</div>
            <div className={styles.input_input}>
                <input type="text" placeholder="." />
            </div>
            <div className={styles.precaution}>비밀번호 일치</div>
        </div>
        <button className={styles.yellow_btn}>비밀번호 변경</button>
    </div>
    );
}

export default ChangingPW2;