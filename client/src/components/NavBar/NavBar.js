import React, { useState } from 'react'
import '../NavBar/NavBar.css'

function NavBar() {
  return (
    <div>
          <div class="header-area">
              <div class="place-logo">
                  <img src={require("../imgs/logo.png")} alt="로고" class="logo"/>
              </div>
              <div class="place-tab">
                  <div class="tab-inner">
                      <a href="/" class="tab"><span class="txt">홈</span></a>
                      <a href="/" class="tab"><span class="txt">빌드업 소개</span></a>
                      <a href="/" class="tab"><span class="txt">회사 정책</span></a>
                      <a href="/" class="tab"><span class="txt">고객 센터</span></a>
                  </div>
                  <div class="tab-login">
                      <button class="yellow-btn login-btn" onClick="window.location.href='localhost:3000/login'">로그인</button>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default NavBar
