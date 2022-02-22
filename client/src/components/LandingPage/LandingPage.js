import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/Landingpage.module.css";
import NavBar from "../NavBar/NavBar";
import Layout from '../Layout/Layout';
import LandingPage2 from "./LandingPage2";


function LandingPage() {
  return (
    <Fragment>
      <Layout />
      <NavBar />
        <div className={styles.main}>
          <div className="main-catchphrase">
            <img className={styles.mainCatchphrase} src={require("../imgs/CatchPhrase.png")} alt="catchPharse" />
          </div>
          <div className={styles.mainText}>
            빌드업은 당신의 포트폴리오를 관리해주고 당신의 취업에 <br /> 필요한
            다양한 정보들을 제공해줘요. 혼자보단 둘이 낫잖아요?
          </div>

          <div className={styles.mainSignup}>
            <Link to="/signup">
              <button className={styles.yellowBtn}>회원가입하러 가기</button>
            </Link>
          </div>
        </div>

        <div className={styles.footerArea}>
          <div className={styles.footerContainer}>
            <img className={styles.footerImg} src={require("../imgs/portfolio.png")} alt="포트폴리오" />
            <div className={styles.footerContent}>
              <div className={styles.contentTitle}>포트폴리오를 만들어요</div>
              <div className={styles.contentContent}>
                저희가 제공하는 여러 폼과 형식으로 자신만
                의 포트폴리오를 만들어요.
              </div>
            </div>
          </div>
          <div className={styles.footerContainer}>
            <img className={styles.footerImg} src={require("../imgs/tree.png")} alt="나무" />
            <div className={styles.footerContent}>
              <div className={styles.contentTitle}>하루하루 출석율을 높여요</div>
              <div className={styles.contentContent}>
                사이트에 들어올 때마다 출석을 할 수 있고
                매일매일 출석율에 따라 자신만의 나무를 키울 수 있어요
              </div>
            </div>
          </div>
          <div className={styles.footerContainer}>
            <img className={styles.footerImg} src={require("../imgs/mt.png")} alt="건물" />
            <div className={styles.footerContent}>
              <div className={styles.contentTitle}>취업할 때까지 함께해요</div>
              <div className={styles.contentContent}>
                저희의 목표는 유저들의 원활한 취업 준비를 언 제든지 도울 준비를
                하는 것이에요. 정보가 필요하면 언제든지 당신에게 알려줄 준비가
                되어 있어요.
              </div>
            </div>
          </div>
        </div>
      <LandingPage2/>
    </Fragment>
  );
}

export default LandingPage;
