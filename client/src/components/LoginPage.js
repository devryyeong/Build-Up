import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h1>로그인 페이지</h1>
      <Link to="/">
          <button>뒤로가기</button>
      </Link>
    </div>
  );
};

export default LoginPage;
