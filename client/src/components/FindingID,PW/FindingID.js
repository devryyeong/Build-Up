import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../CSS/FindingID.module.css"
import Layout from '../Layout/Layout';

function FindingID(){
  return (
  <Layout>
    <div>
        <h1 className={styles.title1}>아이디 찾기</h1>
        <form>
            <div className={styles.name_area}>
                <label>이름
                <input type="text" className={styles.name}/></label>
            </div>
            
            <div className={styles.phone_area}>
                <label>전화번호
                <input type="tel" className={styles.phone}/></label>
                <input type="button" className={styles.phone_btn} value="전화번호 인증"/>
                <Link to="/findingid2"><button type="submit" className={styles.finding_id_btn}>아이디 찾기</button></Link>
            </div>
        </form>
    </div>
  </Layout>
  );
};

export default FindingID;
