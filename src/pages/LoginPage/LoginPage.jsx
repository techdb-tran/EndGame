import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.scss'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from '../../constants/formLoginSchema';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchLogin } from '../../redux/features/users/usersSlice';


const initialFormValue = {
  email: '',
  password: ''
}
const LoginPage = () => {
  const navigate = useNavigate()
  const [isShowPass, setIsShowPass] = useState(false)
  const dispatch = useDispatch()
  const {isLoading} = useSelector((state) => state.users) 
  const {isLogged} = useSelector((state) => state.users) 
 
  const {user} = useSelector((state) => state.users)
  const {error} = useSelector((state) => state.users)



  const handlePageRegister = () => {
    navigate("/register")
  }

  //Validate
  const methods = useForm({
    defaultValues: initialFormValue,
    resolver: yupResolver(loginFormSchema)
  })
  const {control, handleSubmit, formState: {errors}} = methods


  useEffect(() => {
    if(isLogged === true) {
      navigate('/')
    }
  },[isLogged, navigate])
 

  const onLogin = (values) => {
    const payload = {
      email: values.email,
      password: values.password,
    }
    dispatch(actFetchLogin(payload))
  }

  return (
    <div className='login-page'>
        <div className='login-container'>
            <div className='login__form'>
                <div className='login__form--heading'>
                    <h3>Login</h3>
                </div>
                <form onSubmit={handleSubmit(onLogin)}>
                    {!!errors.email && <span style={{color: 'red', textAlign:'left'}}>{errors.email.message}</span>}
                    <Controller
                      name='email'
                      control={control}
                      render={({field: {value, onChange}}) => (
                        <input value={value} onChange={onChange} type="email" placeholder='Email'/>
                      )}
                    />
                    {!!errors.password && <span style={{color: 'red', textAlign:'left'}}>{errors.password.message}</span>}
                    <Controller
                      name='password'
                      control={control}
                      render={({field: {value, onChange}}) => (
                        <div className='pass'>
                          <input value={value} onChange={onChange} type={isShowPass ? `text` : 'password'} placeholder='Password'/>
                          <span onClick={() => setIsShowPass(!isShowPass)}>
                            {
                              isShowPass ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>
                            }
                          </span>
                        </div>
                      )}
                    />
                    <span onClick={handlePageRegister}>I don't have an account? Sign Up here.</span>
                    <div className='login__btn'>
                        <button className='login__btn--signin' type='submit' disabled={isLoading}>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage