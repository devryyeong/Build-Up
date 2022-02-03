import React, { useState } from 'react'
import './SignUpPage_1.css';
// import Layout from '../Layout/Layout';
import Layout from '../Layout/Header.js';
import { withRouter, Link } from 'react-router-dom'

//이름, 전화번호(인증), 아이디, 비밀번호, 비밀번호확인
function SignUpPage() {
  const [Name, setName] = useState("")
  const [PhoneNum, setPhoneNum] = useState("")
  const [Id, setId] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onNameHandler=(e)=>{
    setName(e.currentTarget.value)
  }

  const onPhoneNumHandler=(e)=>{
    setPhoneNum(e.currentTarget.value)
  }

  const onIdHandler=(e)=>{
    setId(e.currentTarget.value)
  }

  const onPasswordHandler=(e)=>{
    setPassword(e.currentTarget.value)
  }

  const onConfirmPasswordHandler=(e)=>{
    setConfirmPassword(e.currentTarget.value)
  }

  const onSubmit=(e)=>{
    e.preventDefault()
    if(Password!==ConfirmPassword){
      return alert ('비밀번호를 한번 더 확인해주세요!')
    }
  }


  return (
<<<<<<< HEAD
    // <Layout>
    <div>
      <h1 className="title">회원가입</h1>
=======
    <div>
      <h1 class="title">회원가입</h1>
>>>>>>> b3eb913f15933257a31587f6dc47c5c0c99b864a
      <form>
        <div id="name_area">
          <label for="name">이름</label>
          <input type="text" id="name"></input>
        </div>
        <div id="id_area">
          <label for="id">아이디</label>
          <input type="email" id="id"></input>
        </div>
        <div id="phone_area">
          <label for="phone">전화번호</label>
          <input type="tel" id="phone"></input>
          <input type="button" id="phone_btn" value="전화번호 인증"></input>
        </div>
        <div id="password_area">
          <label for="password">비밀번호</label>
          <input
            type="password"
            id="password"
            minlength="8"
            maxlength="16"
          ></input>
          <p>8 ~ 16자 이내, 영문과 숫자 조합</p>
        </div>
        <div id="check_password_area">
          <label for="check_password">비밀번호 확인</label>
          <input
            type="password"
            id="check_password"
            minlength="8"
            maxlength="16"
          ></input>
          <p>비밀번호 일치</p>
        </div>
        <input type="submit" id="sign_up_btn" value="계속하기"></input>
      </form>
      <div id="textbox">
        <p>
          계속하기를 누름으로써 사용자는 빌드업의 <a href="#">사용 약관</a> 및{' '}
          <a href="#">개인 정보 고지 사항</a>에 동의하는 것입니다.
        </p>
        <p>
          계정이 이미 있다면 <a href="../LoginPage/LoginPage.html">로그인</a>{' '}
          하러 가기
        </p>
      </div>
<<<<<<< HEAD
      </div>
    // </Layout>
=======
    </div>
>>>>>>> b3eb913f15933257a31587f6dc47c5c0c99b864a
  );
}

export default SignUpPage
