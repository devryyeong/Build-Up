import React from "react";
import {Link} from "react-router-dom";
import "./signup2.css";
import Layout from '../Layout/Header.js';
import profile from "../imgs/Profile.png";

const SignUpPage2 = () => {
  return (
    <div>
      {/* <Layout/> */}
        <div className="main">
          <h1 className="title">회원가입</h1>
          <div className="profile-image">
            <img src={profile} alt="프로필" />
          </div>
          <div className="input-container">
            <div className="input-title">자기소개(선택)</div>
            <div className="input-input">
              <input type="text" placeholder="." />
            </div>
            <div className="precaution">30자 이내</div>
          </div>
          <div className="input-container">
            <div className="input-title">생년 월일</div>
            <div className="input-input">
              <input type="text" placeholder="yyyy/mm/dd" />
            </div>
          </div>
          <Link to="/signup/signup2/signupsucess">
            <button className="yellow-btn signup-btn">가입하기</button>
          </Link>
        </div>
    </div>
  );
};

export default SignUpPage2;
