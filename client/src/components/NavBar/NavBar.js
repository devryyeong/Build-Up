import React, { useState } from 'react'
<<<<<<< HEAD
import '../NavBar/NavBar.css'
=======
import {Link} from 'react-router-dom';
import './NavBar.css'
import logo from "../imgs/logo.png"
>>>>>>> db67f82 (img css 수정, Route 추가)

function NavBar() {
  return (
    <div>
          <div class="header-area">
              <div class="place-logo">
                  <img src={logo} alt="로고" class="logo"/>
              </div>
              <div class="place-tab">
                  <div class="tab-inner">
                      <a href="/" class="tab"><span class="txt">홈</span></a>
                      <a href="/" class="tab"><span class="txt">빌드업 소개</span></a>
                      <a href="/" class="tab"><span class="txt">회사 정책</span></a>
                      <a href="/" class="tab"><span class="txt">고객 센터</span></a>
                  </div>
                  <div class="tab-login">
<<<<<<< HEAD
                      <button class="yellow-btn login-btn" onClick="window.location.href='localhost:3000/login'">로그인</button>
=======
                      <Link to='/login'>
                         <button class="login-btn">로그인</button>
                      </Link>
>>>>>>> db67f82 (img css 수정, Route 추가)
                  </div>
              </div>
        </div>
    </div>
  )
}

export default NavBar
