import React, { useContext } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import { AuthContext } from '../context';

const Login = () => {
  const{isAuth,setIsAuth} = useContext(AuthContext);

  const login = event => {
    event.preventDefault();
    setIsAuth(true);
  }

  return (
    <div>
        <h1>Сторінка для логіну</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder='Введіть логін' />
        <MyInput type="password" placeholder='Введіть пароль' />
        <MyButton>Увійти</MyButton>
      </form>
    </div>
  );
};

export default Login;