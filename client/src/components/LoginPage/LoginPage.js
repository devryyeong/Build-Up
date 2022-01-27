import React from "react";
import { Link } from "react-router-dom";
import './LoginPage.css';

function LoginPage() {
  return (
    <div>
        <h1 class="title">로그인</h1>
        <from>
            <input type="text" id="id" placeholder="  아이디를 입력해 주세요"></input>
            <input type="text" id="password" placeholder="  비밀번호를 입력해 주세요"></input>

            <label id="auto_login_border">
                <input type="checkbox" id="auto_login" name="auto_login" value="y" />
                자동 로그인
            </label>
            
            <a href="/" id="find_id">아이디 찾기</a>
            <p id="bar">ㅣ</p>
            <a href="/" id="find_password">비밀번호 찾기</a>

            <input type="submit" id="login_btn" value="로그인"/>
        </from>

        <a href="/">
            <div id="login_google">
            <img src="../imgs/icon_google.png" alt="google" id="img_google"/><span>구글로 계속하기</span>
            </div>
        </a>
        <a href="/">
            <div id="login_naver">
            <img src="../imgs/icon_naver.png" alt="naver" id="img_naver"/><span>네이버로 계속하기</span>
            </div>
        </a>
    </div>
  )
};

export default LoginPage;
