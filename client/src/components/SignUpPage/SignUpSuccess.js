import React from 'react';
import "./signup_success.css";
import Layout from '../Layout/Header.js';

const SignUpSucess = () => {
    return (
        <div className="main">
          {/* <Layout/> */}
          <h1 className="title">유저님, 가입을 축하드립니다!</h1>
          <button className="yellow-btn">로그인하러 가기</button>
        </div>
    );
};

export default SignUpSucess;