import React, { useState } from 'react'
import LoginForm from '../components/ui/loginForm'
import { useParams } from 'react-router-dom'
import RegisterForm from '../components/ui/registerForm'

const Login = () => {
    const { type } = useParams()
    const [formType, setFormType] = useState(
        type === 'register' ? type : 'login'
    )
    const toggleFormType = () => {
        setFormType((prevState) =>
            prevState === 'register' ? 'login' : 'register'
        )
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 p-4 shadow">
                    {formType === 'login'
                        ? (<>
                            <h3 className="mb-4">Login</h3>
                            <LoginForm />
                            <p>
                                Dont have account?{' '}
                                <a
                                    onClick={toggleFormType}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Sign Up
                                </a>
                            </p>
                        </>
                        )
                        : (
                            <>
                                <h3 className="mb-4">Register form</h3>
                                <RegisterForm />
                                <p>
                                    Already have account?{' '}
                                    <a
                                        onClick={toggleFormType}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Sign in
                                    </a>
                                </p>
                            </>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Login
