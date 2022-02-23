import React, {useState} from "react";
import Layout from "../Layout/Layout";
import styles from '../CSS/Portfolio.module.css';

function Portfolio() {
    return (
        <div>
          <Layout />
            <div>
            <h1  className={styles.title}>유저의 포트폴리오</h1>
            <hr className={styles.title_line}></hr> 
            </div>
            <div>
                <div>
                    <span className={styles.information}>인적사항</span>
                    <hr className={styles.info_line} />
                </div>
                <label className={styles.name_area}>이름
                    <input type="text"
                    className={styles.name}
                    placeholder="   유저 이름을 입력하세요"></input>
                </label>
                <label className={styles.address_area}>주소지
                    <input type="text"
                    className={styles.address}
                    placeholder="   주소를 입력하세요"></input>
                </label>
                <label className={styles.birth_area}>생년 월일
                    <input type="text"
                    className={styles.birth}
                    placeholder="   ex) 2002/04/02"></input>
                </label>
                <label className={styles.phone_area}>연락처
                    <input type="tel"
                    className={styles.phone}
                    placeholder="   ex) 010-1234-1234"></input>
                </label>
                <label className={styles.email_area}>이메일
                    <input type="email"
                    className={styles.email}
                    placeholder="   이메일을 입력하세요."></input>
                </label>
                <img
                    src={require('../imgs/portfolio_profile.png')}
                    alt="profile"
                    className={styles.img_profile}
                />
                <button className={styles.profile_btn}>업로드</button>
                <div>
                    <span className={styles.educational}>학력사항</span>
                    <hr className={styles.educat_line}/>
                </div>
                <label className={styles.school_area}>학력
                    <input type="text"
                    className={styles.school}
                    placeholder="   최종 학력을 입력하세요."></input>
                </label>
                <label className={styles.test_area}>어학 시험
                <input type="text"
                    placeholder="    시험 종류"
                    list="test"
                    className={styles.test_list}
                    ></input>
                    <datalist id="test">
                        <option>TOEFL</option>
                        <option>TOEIC</option>
                        <option>TOESL</option>
                        <option>JLPT</option>
                        <option>HSK</option>
                    </datalist>
                    <input type="text"
                    className={styles.test_score}
                    placeholder="   자신의 어학 시험 성적을 입력하세요."
                    />
                </label>
                <label className={styles.certificate_area}>자격증
                        <input type="text"
                        className={styles.certificate}
                        placeholder="   ex) OO 자격증"></input>
                    </label>
                <div>
                    <span className={styles.activity}>대외활동</span>
                    <hr className={styles.activity_line}/>
                </div>
                <label className={styles.contest_area}>공모전
                    <input type="text"
                    className={styles.contest}
                    placeholder="   ex) OO 공모전"></input>
                </label>
                <label className={styles.club_area}>동아리
                    <input type="text"
                    className={styles.club}
                    placeholder="   활동 경력이 있는 동아리를 입력하세요."></input>
                </label>
                <div>
                    <span className={styles.experience}>경력사항</span>
                    <hr className={styles.experience_line} />
                </div>
                <label className={styles.link_area}>링크
                    <input type="text"
                    className={styles.link}
                    placeholder="   자신의 피그마 혹은 깃허브 링크를 입력하세요."></input>
                </label>
                <label className={styles.career_area}>경력
                    <input type="text"
                    className={styles.career}
                    placeholder="   경력을 입력하세요"></input>
                </label>
                <input type="submit" className={styles.submit_btn} value="저장"></input>
            </div>
        </div>
    );
}

export default Portfolio; 