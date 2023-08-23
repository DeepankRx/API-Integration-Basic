import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import images from '../constants/images';
import { login } from '../redux/slices/auth';
import { login as loginApi } from '../services/api';
import { toast } from 'react-toastify';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { isAuth } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isAuth) {
      navigate('/dashboard');
    }
  }, [isAuth]);
  const initialValues = {
    user_code: '',
    user_pass: '',
    auth_type: 'profile_type',
  };
  const validationSchema = Yup.object({
    user_code: Yup.string().required('Username is required'),
    user_pass: Yup.string().required('Password is required'),
  });
  const onSubmit = (values) => {
    loginApi(values)
      .then((res) => {
        const { token_data, token_id } = res.data.authToken;
        const { user } = res.data;
        dispatch(
          login({
            token: token_data,
            token_id,
            user,
            isAuth: true,
          })
        );
        toast.success('Login Successful!');
        navigate('/dashboard');
      })
      .catch((err) => {
        setError(err.response);
      });
  };

  return (
    <div className="flex  items-center  ">
      <div className="flex items-center lg:flex-row flex-col justify-center w-full  gap-10 ">
        <div className="flex flex-col items-center justify-center lg:w-1/2 w-full ">
          <img
            src={images.login}
            alt="login"
            className="h-96 w-96 lg:h-full lg:w-full md:h-full md:w-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center lg:w-1/2  w-full h-1/2 gap-4">
          <div className="flex flex-col items-center justify-center w-full h-1/2">
            <h1 className="text-5xl font-bold underline text-blue-800 p-5 tracking-wide hover:tracking-widest hover:cursor-pointer">
              Login
            </h1>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="flex flex-col items-center justify-center w-full h-1/2 gap-5">
              <div className="flex flex-col items-center justify-center w-full h-1/2">
                <label
                  htmlFor="user_code"
                  className="text-gray-500 text-3xl text-bold text-blue-500"
                >
                  Username
                </label>
                <Field
                  type="text"
                  name="user_code"
                  placeholder="Username"
                  className="w-1/2 h-1/2 border-2 border-gray-500 rounded-lg p-2"
                />
                <ErrorMessage
                  name="user_code"
                  component="div"
                  className="text-red-500 text-xl"
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full h-1/2">
                <label
                  htmlFor="user_pass"
                  className="text-gray-500 text-3xl text-bold text-blue-500"
                >
                  Password
                </label>
                <Field
                  type="user_pass"
                  name="user_pass"
                  placeholder="Password"
                  className="w-1/2 h-1/2 border-2 border-gray-500 rounded-lg p-2"
                />
                <ErrorMessage
                  name="user_pass"
                  component="div"
                  className="text-red-500 text-xl"
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full h-1/2">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-1/2 align-middle"
                >
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
