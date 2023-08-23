import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import images from '../constants/images';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/auth';
import { GiHamburgerMenu } from 'react-icons/gi';
import Drawer from '../UI/Drawer';

const menuItems = [
  {
    title: 'Home',
    path: '/',
    loginRequired: true,
  },
  {
    title: 'AddInward',
    path: '/add_inward',
    loginRequired: true,
  },
];

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleButtonClick = () => {
    isAuth ? dispatch(logout()) : navigate('/login');
  };
  const filteredMenuItems = menuItems.filter(
    (menuItem) => !menuItem.loginRequired || isAuth
  );

  return (
    <div className="flex w-full justify-between items-center border-b-2 border-gray-500 bg-black">
      <div className="p-2">
        <NavLink to="/" className='text-white text-xl font-bold'>
          {/* <img
            src={images.logo}
            alt="logo"
            className="h-16 hover:opacity-75 hover:h-20"
          /> */}
          API Integration
        </NavLink>
      </div>
      <div className="hidden md:flex">
        <ul className="flex items-center">
          {filteredMenuItems.map((menuItem) => (
            <li key={menuItem.title} className="mr-4">
              <NavLink
                to={isAuth ? menuItem.path : '/login'} // Redirect to login if not authenticated
                className="text-gray-500 text-xl hover:text-sky-100"
              >
                {menuItem.title}
              </NavLink>
            </li>
          ))}
          <li className="mr-4 flex items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full align-middle"
              onClick={handleButtonClick}
            >
              {isAuth ? 'Logout' : 'Login'}
            </button>
          </li>
        </ul>
      </div>
      <div className="flex xl:hidden lg:hidden md:hidden items-center justify-around p-4">
        <Drawer links={menuItems} />
      </div>
    </div>
  );
};

export default Navbar;
