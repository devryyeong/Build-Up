import React, { useState } from 'react'
import './SignUpPage_1.css';
import Layout from '../Layout/Layout';
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
      <h1 className="title">회원가입</h1>
      <form>
        <label>이름</label>
        <input name="name" type="text" value={Name} onChange={onNameHandler}></input>

        <label>전화번호</label>
        <input name="phoneNumber" value={PhoneNum} onChange={onPhoneNumHandler}></input>

        <label>아이디</label>
        <input name="id" value={Id} onChange={onIdHandler}></input>

        <label>비밀번호</label>
        <input name="password" type="password" value={Password} onChange={onPasswordHandler}></input>
        <label>비밀번호 확인</label>
        <input name="confirmPassword" type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}></input>

        <div><button type="submit" onSubmit={onSubmit}>계속하기</button></div>
      </form>
      <div id="textbox">
        <p>
          계속하기를 누름으로써 사용자는 빌드업의 <a href="#">사용 약관</a> 및{" "}
          <a href="#">개인 정보 고지 사항</a>에 동의하는 것입니다.
        </p>
        <p>
          계정이 이미 있다면 <a href="../LoginPage/LoginPage.html">로그인</a>{" "}
          하러 가기
        </p>
      </div>
      </div>
    // </Layout>
  );
}

export default SignUpPage
