import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

//이름, 전화번호(인증), 아이디, 비밀번호, 비밀번호확인(?)
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
    <div>
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
    </div>
  )
}

export default SignUpPage
