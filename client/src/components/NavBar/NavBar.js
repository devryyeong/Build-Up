import React, { useState } from 'react'

import {Link} from 'react-router-dom';
import '../CSS/NavBar.css'
import logo from "../imgs/logo.png"

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

                      <Link to='/login'>
                        <button class="login-btn">로그인</button>
                      </Link>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default NavBar
