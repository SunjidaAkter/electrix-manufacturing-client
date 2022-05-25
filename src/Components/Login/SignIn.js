import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';
import { toast } from 'react-toastify';
import googleIcon from "../../Assets/icons8-google-30.png";
import Loading from '../Shared/Loading';

const SignIn = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, watch, handleSubmit } = useForm();
    const emailRef = useRef('');
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);
    // if (user || gUser) {
    // }

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    const resetPassword = async () => {
        const email = watch("email");
        console.log(email)
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Sent email');
        }
        else {
            toast.error('please enter your email address');
        }
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);

    }

    return (
        <div className="hero min-h-screen" style={{ background: `url("https://html.modernwebtemplates.com/electrix/images/slide03.jpg")` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">SIGN IN</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    ref={emailRef}
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>

                            {signInError}
                            <input className='btn bg-neutral w-full max-w-xs text-white' type="submit" value="SIGN IN" />
                        </form>
                        <p><small>New to ELECTRIX MANUFACTURING. <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                        <p><small>Forget Password? <button className='btn btn-link text-primary no-underline px-0 mx-0' onClick={resetPassword}> Reset Password</button> </small></p>
                        <div className="divider">OR</div>
                        {/* <button
                            onClick={() => signInWithGoogle()}
                            className="btn bg-neutral w-full max-w-xs text-white"
                        >Continue with Google</button> */}
                        <button
                            onClick={() => signInWithGoogle()}
                            className='btn bg-neutral w-full max-w-xs text-white'>
                            <img style={{ width: '30px' }} src={googleIcon} alt="" />
                            <span className='px-2'>Connect With Google</span>
                        </button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default SignIn;