import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Pages } from './constants/Pages';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './redux/slices/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const navigate = useNavigate(); // Get the navigate function
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const isAuth = localStorage.getItem('isAuth');
    const token_id = localStorage.getItem('token_id');
    if (token && user && isAuth && token_id) {
      dispatch(
        login({
          token,
          user: JSON.parse(user),
          isAuth: JSON.parse(isAuth),
          token_id,
        })
      );
      navigate('/');
    } else {
      // If not authenticated, navigate to the login page
      navigate('/login');
    }
  }, []);

  const { isAuth } = useSelector((state) => state.auth);

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        {Pages.map((page) =>
          isAuth === page.loginRequired ? (
            <Route
              path={page.path}
              element={<page.component />}
              key={page.name}
            />
          ) : (
            <Route
              path={page.path}
              element={<page.component />}
              key={page.name}
            />
          )
        )}
      </Routes>
    </>
  );
};

export default App;
