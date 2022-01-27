import React, { useState } from 'react';
import './LandingPage.css'

function LandingPage() {
  return (
    <div>
      <body class="x">


    <div class="main">
        <div class="main-catchphrase">
            <img src="../imgs/CatchPhrase.png" alt="catchPharse"/>
        </div>
        <div class="main-text">
            빌드업은 당신의 포트폴리오를 관리해주고 당신의 취업에 <br/> 필요한 다양한 정보들을 제공해줘요. 혼자보단 둘이 낫잖아요?
        </div>
        <div class="main-signup">
            <button class="yellow-btn">회원가입하러 가기</button>
        </div>
    </div>

    <footer class="footer-area">
        <div class="footer-container">
            <img class="footer-img" src="../imgs/tree.png" alt="나무"/>
            <div class="footer-content">
                <div class="content-title">하루하루 출석율을 높여요</div>
                <div class="content-content">
                    사이트에 들어올 때마다 출석을 할 수 있고 매<br/>
                    일매일 출석율에 따라 자신만의 나무를 키울 수 <br/>
                    있어요
                </div>
            </div>
        </div>  
        <div class="footer-container">
            <img class="footer-img" src="../imgs/portfolio.png" alt="나무"/>
            <div class="footer-content">
                <div class="content-title">포트폴리오를 만들어요</div>
                <div class="content-content">
                    당신이 만든 포트폴리오를 파일로 만드는 대신 <br/>
                    Adobe pdf를 이용하여 pdf로 내보내는 기능<br/>
                    을 제공해요. 훨씬 더 편한 방법으로 포트폴리<br/>
                    오를 받아봐요.
                </div>
            </div>
        </div>  
        <div class="footer-container">
            <img class="footer-img" src="../imgs/mt.png" alt="나무"/>
            <div class="footer-content">
                <div class="content-title">취업할 때까지 함께해요</div>
                <div class="content-content">
                    저희의 목표는 유저들의 원활한 취업 준비를 언 <br/>
                    제든지 도울 준비를 하는 것이에요. 정보가 필 <br/>
                    요하면 언제든지 당신에게 알려줄 준비가 되어 <br/>
                    있어요.
                </div>
            </div>
        </div>       
        
    </footer>
</body>
    </div>
  )
}

export default LandingPage
