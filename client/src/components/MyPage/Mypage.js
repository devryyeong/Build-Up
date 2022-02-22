import React from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
import styles from '../CSS/Mypage.module.css';

const Mypage = () => {
    return (
      <div className="view">
        <Layout style={{ position: "relative" }}>
          <header className={styles.imgArea}>
            <img src={require("../imgs/Profile.png")} />
          </header>
          <div className={styles.inform}>
            <form>
              {/* css 태그 직계 자손에 적용하고 싶은 style은 부모한테 프로퍼티 부여하기 */}
              <div className={styles.nameArea}>
                <label className={styles.label} for="name">이름</label>
                <input type="text" id="name" value="유저" readOnly />
              </div>
              <div className={styles.numArea}>
                <label className={styles.label} for="number">전화번호</label>
                <input type="number" id="number" value="01012341234" readOnly />
              </div>
              <div className={styles.idArea}>
                <label className={styles.label} for="id">아이디</label>
                <input type="text" id="id" value="user1234" readOnly />
              </div>
              <div className={styles.pwArea}>
                <label className={styles.label} for="pw">비밀번호</label>
                <input type="password" id="pw" value="user1234^^" />
                <button className={styles.yellowBtn}>변경</button>
              </div>
              <div className={styles.introArea}>
                <label className={styles.label} for="intro">자기소개</label>
                <input type="text" id="intro" value="안녕하세요!" />
                <button className={styles.yellowBtn}>수정</button>
              </div>
              {/* 자기소개 최대 몇 줄? 텍스트 글자 밑으로 넘어가면 어떻게 됨? */}
            </form>
          </div>
          <div className={styles.portfolio}>
              <button className={styles.setBtn}>버튼</button>
            <div>
              <h2 className={styles.title}>
                <span>유저의 포트폴리오</span>
              </h2>
              <button className={styles.pdfBtn}>pdf로 변환하기</button>
              <hr style={{ width: "118.1rem", marginBottom: "3.8rem" }} />
            </div>
            <img className={styles.myPhoto} src={require("../imgs/my_photo.png")}/>
            <form>
              <div className={styles.personalArea}>
                <h3 className={styles.title}>
                  <span>인적사항</span>
                </h3>
                <hr style={{ width: "118.1rem", marginBottom: "2.6rem" }}/>
                <div className={styles.nameArea}>
                  <label className={styles.label} for="name">이름</label>
                  <input type="text" id="name" value="유저" readOnly />
                </div>
                <div className={styles.addressArea}>
                  <label className={styles.label} for="address">주소</label>
                  <input
                    type="text"
                    id="address"
                    value="경기도 수원시 영통구 원천동"
                    readOnly
                  />
                </div>
                <div className={styles.birthArea}>
                  <label className={styles.label} for="birth">생년월일</label>
                  <input type="text" id="birth" value="2002/04/02" readOnly />
                </div>
                <div className={styles.numArea}>
                  <label className={styles.label} for="number">연락처</label>
                  <input
                    type="text"
                    id="number"
                    value="010-1234-1234"
                    readOnly
                  />
                </div>
                <div className={styles.emailArea}>
                  <label className={styles.label} for="email">이메일</label>
                  <input
                    type="email"
                    id="email"
                    value="suin10102@mju.ac.kr"
                    readOnly
                  />
                </div>
              </div>

              <div className={styles.educationArea}>
                <h3 className={styles.title}>
                  <span>학력사항</span>
                </h3>
                <hr style={{ width: "118.1rem", marginBottom: "2.6rem" }}/>
                <div className={styles.eduArea}>
                  <label className={styles.label} for="edu">학력</label>
                  <input
                    type="text"
                    id="edu"
                    value="명지대학교 디지털콘텐츠디자인학과 재학 중"
                    readOnly
                  />
                </div>
                <div className={styles.testArea}>
                  <label className={styles.label} for="test">어학시험</label>
                  <input type="text" id="test" list="test" value="" />
                  <datalist id="test">
                    <option>TOEFL</option>
                    <option>TOEIC</option>
                    <option>TOSEL</option>
                    <option>JLPT</option>
                    <option>HSK</option>
                  </datalist>
                </div>
                <div className={styles.certiciArea}>
                  <label className={styles.label} for="certifi">자격증</label>
                  <input
                    type="text"
                    id="certifi"
                    value="피그마 자격증"
                    readOnly
                  />
                </div>
              </div>

              <div className={styles.awardArea}>
                <h3 className={styles.title}>
                  <span>수상경력</span>
                </h3>
                <hr style={{ width: "118.1rem", marginBottom: "2.6rem" }} />
                <div className={styles.contestArea}>
                  <label className={styles.label} for="contest">공모전</label>
                  <input
                    type="text"
                    id="contest"
                    value="명지대 공모전"
                    readOnly
                  />
                </div>
              </div>

              <div className="careerArea">
                <h3 className={styles.title}>
                  <span>경력사항</span>
                </h3>
                <hr style={{ width: "118.1rem", marginBottom: "2.6rem" }}/>
                <div className="linkArea">
                  <label className={styles.label} for="link">링크</label>
                  <input
                    type="text"
                    id="link"
                    value=""
                    readOnly
                  />
                </div>
                <div className="carArea">
                  <label className={styles.label} for="career">경력</label>
                  <input
                    type="text"
                    id="career"
                    value="경력을 입력하세요."
                    readOnly
                  />
                </div>
              </div>
            </form>
          </div>
        </Layout>
      </div>
    );
};

export default Mypage;