import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS/ChangingPW.module.css';

function ChangingPW() {
  return (
    <div>
    <div>
        <h1 className={styles.title}>비밀번호 찾기</h1>
        <form>
            <div className={styles.name_area}>
                <label>이름
                <input type="text" className={styles.name} /></label>
            </div>
            <div className={styles.id_area}>
                <label>아이디
                <input type="text" className={styles.id} /></label>
            </div> 
            <div className={styles.phone_area}>
                <label>전화번호
                <input type="tel" className={styles.phone} /></label>
                <input type="button" className={styles.phone_btn} value="전화번호 인증" />
            </div>
            <input type="submit" className={styles.finding_pw_btn} value="계속하기" />
        </form>
    </div>
</div>
  );
}

export default ChangingPW;