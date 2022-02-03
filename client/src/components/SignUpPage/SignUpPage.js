import React, { useState } from 'react'
import './SignUpPage_1.css';
// import Layout from '../Layout/Layout';
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
    // <Layout>
    <div>
       <h1 class="title">회원가입</h1>
            <form>
            <div id="name_area">
                <label for="name">이름</label>
                <input type="text" id="name"
                value={Name} onChange={onNameHandler} />
            </div>
            <div id="id_area">
                <label for="id">아이디</label>
                <input type="id" id="id"
                value={Id} onChange={onIdHandler} />
            </div> 
            <div id="phone_area">
                <label for="phone">전화번호</label>
                <input type="tel" id="phone"
                value={PhoneNum} onChange={onPhoneNumHandler} />
                <input type="button" id="phone_btn" value="전화번호 인증" />
            </div>
            <div id="password_area">
                <label for="password">비밀번호</label>
                <input type="password" id="password" minlength="8" maxlength="16"
                value={Password} onChange={onPasswordHandler} />
                <p>8 ~ 16자 이내, 영문과 숫자 조합</p>
            </div>
            <div id="check_password_area">
                <label for="check_password">비밀번호 확인</label>
                <input type="password" id="check_password" minlength="8" maxlength="16"
                value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                <p>비밀번호 일치</p>
            </div>
                <input type="submit" id="sign_up_btn" onSubmit={onSubmit} value="계속하기" />
            </form>
            <div id="textbox">
            <p>계속하기를 누름으로써 사용자는 빌드업의 <a href="/">사용 약관</a> 및 <a href="/">개인 정보 고지 사항</a>에 동의하는 것입니다.</p>  
            <p>계정이 이미 있다면 <a href="/login">로그인</a> 하러 가기</p>
            </div>
    </div>
    // </Layout>
  );
}

export default SignUpPage
