import React, { useContext } from 'react'
import MyInput from '../components/UI/button/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context/context'

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

const login = event => {
  event.preventDefault();
  setIsAuth(true);
  localStorage.setItem('auth', 'true')
}
  return (
    <div>
      <h1>Page of login</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter login"/>
        <MyInput type="password" placeholder="Enter password"/>
        <MyButton>Log In</MyButton>
      </form>
    </div>
  )
}

export default Login
