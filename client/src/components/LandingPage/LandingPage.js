import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/landingpage.css";
import catchPhrase from "../imgs/CatchPhrase.png";
import portfolio from "../imgs/portfolio.png";
import tree from "../imgs/tree.png";
import mt from "../imgs/mt.png";
import NavBar from "../NavBar/NavBar";
import Layout from '../Layout/Layout';


function LandingPage() {
  return (
    <div>
      <Layout />
      <NavBar />
      <div className="x">
        <div className="main">
          <div className="main-catchphrase">
            <img src={catchPhrase} alt="catchPharse" />
          </div>
          <div className="main-text">
            빌드업은 당신의 포트폴리오를 관리해주고 당신의 취업에 <br /> 필요한
            다양한 정보들을 제공해줘요. 혼자보단 둘이 낫잖아요?
          </div>

          <div className="main-signup">
            <Link to="/signup">
              <button class="yellow-btn">회원가입하러 가기</button>
            </Link>
          </div>
        </div>

        <div className="footer-area">
          <div className="footer-container">
            <img className="footer-img" src={portfolio} alt="포트폴리오" />
            <div className="footer-content">
              <div className="content-title">포트폴리오를 만들어요</div>
              <div className="content-content">
                저희가 제공하는 여러 폼과 형식으로 자신만
                <br />의 포트폴리오를 만들어요.
              </div>
            </div>
          </div>
          <div className="footer-container">
            <img className="footer-img" src={tree} alt="나무" />
            <div className="footer-content-attend">
              <div className="content-title">하루하루 출석율을 높여요</div>
              <div className="content-content">
                사이트에 들어올 때마다 출석을 할 수 있고
                <br />
                매일매일 출석율에 따라 자신만의 나무를 키울 수 있어요
              </div>
            </div>
          </div>
          <div className="footer-container">
            <img className="footer-img" src={mt} alt="건물" />
            <div className="footer-content">
              <div className="content-title">취업할 때까지 함께해요</div>
              <div className="content-content">
                저희의 목표는 유저들의 원활한 취업 준비를 언 제든지 도울 준비를
                하는 것이에요. 정보가 필요하면 언제든지 당신에게 알려줄 준비가
                되어 있어요.
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
