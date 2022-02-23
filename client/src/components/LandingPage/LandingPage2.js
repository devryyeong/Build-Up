import React from "react";
import styles from "../CSS/Landingpage2.module.css";
import { Link } from 'react-router-dom';

const LandingPage2 = () => {
  return (
    <div>
      <header className={styles.header}>
        <a href="#diary">다이어리</a>
        <a href="#portfolio">포트폴리오</a>
        <a href="#mypage">마이페이지</a>
      </header>

      <section className={styles.main}>
        <div className={styles.container} id="diary">
          <div className={styles.textContainer}>
            <h2
              style={{
                color: '#FFCC00',
                fontSize: '48px',
                fontWeight: 'bold',
                fontFamily: 's-core dream6',
              }}
            >
              다이어리
            </h2>
            <span className={styles.text}>
              달력 클릭 시에 일정 및 자신의 목표를 입력 가능하며 자신의 목표
              성취율과 출석율을 차트로 확인 가능합니다.
            </span>
          </div>
          <img
            className={styles.img1}
            src={require('../imgs/diary.jpg')}
            alt="diary"
          />
        </div>
        <div className={styles.container} id="buildup">
          <img
            className={styles.img2}
            src={require('../imgs/buildup.jpg')}
            alt="build-up"
          />
          <div className={styles.textContainer}>
            <h2
              style={{
                color: '#FFCC00',
                fontSize: '48px',
                fontWeight: 'bold',
                fontFamily: 's-core dream6',
              }}
            >
              빌드업
            </h2>
            <span className={styles.text}>
              빌드업에선 당신의 커리어와 경력을 더 높은 곳으로 올리기 위해
              필요한 것들을 드릴 수 있습니다.
            </span>
          </div>
        </div>
        <div className={styles.container} id="portfolio">
          <img
            className={styles.img3}
            src={require('../imgs/portfolio.jpg')}
            alt="portfolio"
          />
          <div className={styles.textContainer}>
            <h2
              style={{
                color: '#FFCC00',
                fontSize: '48px',
                fontWeight: 'bold',
                fontFamily: 's-core dream6',
              }}
            >
              포트폴리오
            </h2>
            <span className={styles.text}>
              포트폴리오를 처음에 입력한 후엔 확인 및 수정이 가능합니다. Build
              Up의 제일 중요한 페이지로 취업에도 가장 중요한 페이지라고 할 수
              있습니다.
            </span>
          </div>
        </div>
        <div className={styles.container} id="mypage">
          <div className={styles.textContainer}>
            <h2
              style={{
                color: '#FFCC00',
                fontSize: '48px',
                fontWeight: '800',
                fontFamily: 's-core dream6',
              }}
            >
              마이페이지
            </h2>
            <span className={styles.text}>
              마이페이지에서는 자신의 개인 정보와 포트폴리오를 확인할 수 있으며
              포트폴리오를 pdf로 변환시켜줍니다.
            </span>
          </div>
          <img
            className={styles.img4}
            src={require('../imgs/mypage.jpg')}
            alt="mypage"
          />
        </div>
      </section>

      <footer className={styles.footerArea1}>
        <h3>Team member</h3>
        <div className={styles.teamContainer}>
          <div className={styles.teamContent}>
            <h4>Designer</h4>
            <span className={styles.teamText}>
              피그마를 사용하여 Build Up의 로고, 실제로 볼 수 있는 UI와 유저와의
              상호작용하는 UX, 다양한 스타일 컴포넌트 등을 만들었다.
            </span>
          </div>
          <div className={styles.teamContent}>
            <h4>Front End Programmer</h4>
            <span className={styles.teamText}>
              React와 Bootstrap을 사용하여 Build Up의 UI와 UX를 실제로
              작동하도록 만들었다.
            </span>
          </div>
          <div className={styles.teamContent}>
            <h4>Back End Programmer</h4>
            <span className={styles.teamText}>
              NodeJS와 MySQL을 사용하여 Build Up의 데이터를 저장하고 관리하며
              원활한 웹사이트의 작동을 가능하게 해준다.
            </span>
          </div>
        </div>
      </footer>

      <footer className={styles.footerArea2}>
        <div className={styles.footContainer}>
          <div className={styles.buildupcontainer}>
            <img
              className={styles.footImgLogo}
              src={require('../imgs/buildup.jpg')}
              alt="build-up"
            />
            <img
              className={styles.footImgName}
              src={require('../imgs/buildup-text.png')}
              alt="build-up-text"
            />
            <span className={styles.footSpan}>
              당신의 취업을 옆에서 묵묵히 도와주는 웹, Build Up
              <br />
              <br /> c 2022 Build Up
            </span>
            <a>이용약관 및 개인정보 보호</a>
          </div>
          <div className={styles.ulcontainer}>
            <ul className={styles.ul}>
              <h6>링크</h6>
              <li>
                <Link className={styles.link} to="/diary">
                  다이어리
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/portfolio">
                  포트폴리오
                </Link>
              </li>
              <li>커뮤니티(예정)</li>
              <li>
                <Link className={styles.link} to="/mypage">
                  마이페이지
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/signup">
                  회원가입
                </Link>
              </li>
            </ul>
            <ul className={styles.ul}>
              <h6>가이드</h6>
              <li>
                <a className={styles.link} href="#diary">
                  다이어리
                </a>
              </li>
              <li>
                <a className={styles.link} href="#portfolio">
                  포트폴리오
                </a>
              </li>
              <li>
                <a className={styles.link} href="#mypage">
                  마이페이지
                </a>
              </li>
            </ul>
            <ul className={styles.ul}>
              <h6>회사 소개</h6>
              <li>
                <a className={styles.link} href="#team">
                  Build Up 팀 소개
                </a>
              </li>
              <li>회사 정책</li>
            </ul>
            <ul className={styles.ul}>
              <h6>Build Up 고객센터</h6>
              <li>도움말과 지원</li>
              <li>Build Up에 이메일 보내기</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage2;
