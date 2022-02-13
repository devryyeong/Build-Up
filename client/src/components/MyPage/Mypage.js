import React from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
import '../CSS/Mypage.css';

const Mypage = () => {
    return (
      <div className="view">
        <Layout style={{ position: "relative" }}>
          <header className="imgArea">
            <img src={require("../imgs/Profile.png")} />
          </header>
          <div className="inform">
            <form>
              {/* css 태그 직계 자손에 적용하고 싶은 style은 부모한테 프로퍼티 부여하기 */}
              <div className="nameArea">
                <label for="name">이름</label>
                <input type="text" id="name" value="유저" readOnly />
              </div>
              <div className="numArea">
                <label for="number">전화번호</label>
                <input type="number" id="number" value="01012341234" readOnly />
              </div>
              <div className="idArea">
                <label for="id">아이디</label>
                <input type="text" id="id" value="user1234" readOnly />
              </div>
              <div className="pwArea">
                <label for="pw">비밀번호</label>
                <input type="password" id="pw" value="user1234^^" />
                <button className="yellowBtn">변경</button>
              </div>
              <div className="introArea">
                <label for="intro">자기소개</label>
                <input type="text" id="intro" value="안녕하세요!" />
                <button className="yellowBtn">수정</button>
              </div>
              {/* 자기소개 최대 몇 줄? 텍스트 글자 밑으로 넘어가면 어떻게 됨? */}
            </form>
          </div>
          <div className="portpoilio">
              <button className="setBtn">버튼</button>
            <div>
              <h2>
                <span>유저의 포트폴리오</span>
              </h2>
              <button className="pdfBtn">pdf로 변환하기</button>
              <hr style={{ width: "118.1rem", marginBottom: "3.8rem" }} />
            </div>
            <img className="myPhoto" src={require("../imgs/my_photo.png")}/>
            <form>
              <div className="personalArea">
                <h3>
                  <span>인적사항</span>
                </h3>
                <hr style={{ width: "118.1rem", marginBottom: "2.6rem" }}/>
                <div className="nameArea">
                  <label for="name">이름</label>
                  <input type="text" id="name" value="유저" readOnly />
                </div>
                <div className="addressArea">
                  <label for="address">주소</label>
                  <input
                    type="text"
                    id="address"
                    value="경기도 수원시 영통구 원천동"
                    readOnly
                  />
                </div>
                <div className="birthArea">
                  <label for="birth">생년월일</label>
                  <input type="text" id="birth" value="2002/04/02" readOnly />
                </div>
                <div className="numArea">
                  <label for="number">연락처</label>
                  <input
                    type="text"
                    id="number"
                    value="010-1234-1234"
                    readOnly
                  />
                </div>
                <div className="emailArea">
                  <label for="email">이메일</label>
                  <input
                    type="email"
                    id="email"
                    value="suin10102@mju.ac.kr"
                    readOnly
                  />
                </div>
              </div>

              <div className="educationArea">
                <h3>
                  <span>학력사항</span>
                </h3>
                <hr style={{ width: "118.1rem", marginBottom: "2.6rem" }}/>
                <div className="eduArea">
                  <label for="edu">학력</label>
                  <input
                    type="text"
                    id="edu"
                    value="명지대학교 디지털콘텐츠디자인학과 재학 중"
                    readOnly
                  />
                </div>
                <div className="testArea">
                  <label for="test">어학시험</label>
                  <input type="text" id="test" list="test" value="" />
                  <datalist id="test">
                    <option>TOEFL</option>
                    <option>TOEIC</option>
                    <option>TOSEL</option>
                    <option>JLPT</option>
                    <option>HSK</option>
                  </datalist>
                </div>
                <div className="certiciArea">
                  <label for="certifi">자격증</label>
                  <input
                    type="text"
                    id="certifi"
                    value="피그마 자격증"
                    readOnly
                  />
                </div>
              </div>

              <div className="awardArea">
                <h3>
                  <span>수상경력</span>
                </h3>
                <hr style={{ width: "118.1rem", marginBottom: "2.6rem" }} />
                <div className="contestArea">
                  <label for="contest">공모전</label>
                  <input
                    type="text"
                    id="contest"
                    value="명지대 공모전"
                    readOnly
                  />
                </div>
              </div>

              <div className="careerArea">
                <h3>
                  <span>경력사항</span>
                </h3>
                <hr style={{ width: "118.1rem", marginBottom: "2.6rem" }}/>
                <div className="linkArea">
                  <label for="link">링크</label>
                  <input
                    type="text"
                    id="link"
                    value=""
                    readOnly
                  />
                </div>
                <div className="carArea">
                  <label for="career">경력</label>
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