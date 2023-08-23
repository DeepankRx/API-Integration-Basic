import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import images from '../constants/images';
export default function TemporaryDrawer({ links }) {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,

        backgroundColor: 'black',
        position: 'relative',
      }}
      onClick={toggleDrawer(anchor, false)}
    >
      <div className="flex flex-col justify-center items-center bg-[#dbeafe]">
        <div className="flex w-full justify-evenly items-center">
          {/* <img src={images.logo} alt="Logo" border="0" className="w-30 h-20" /> */}
        </div>
        <div className="flex flex-col justify-center items-center">
          <NavLink
            to="/"
            className="text-blue-900 text-2xl p-2 hover:text-red hover:underline"
          >
            Home
          </NavLink>

          {/* <NavLink
            to="/movies"
            className="text-blue-900 text-2xl p-2 hover:text-red hover:underline"
          >
            Movies
          </NavLink>
          <NavLink
            to="/gallery"
            className="text-blue-900 text-2xl p-2 hover:text-red hover:underline"
          >
            Gallery
          </NavLink>
          <NavLink
            to="/businessmodel"
            className="text-blue-900 text-2xl p-2 hover:text-red hover:underline"
          >
            Business Model
          </NavLink> */}
        </div>
      </div>
    </Box>
  );

  return (
    <div className="">
      <GiHamburgerMenu
        color="white"
        className="text-3xl"
        onClick={toggleDrawer('top', true)}
      />
      <Drawer
        anchor={'top'}
        open={state['top']}
        className="bg-[#dbeafe]"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {list('top')}
        {/* <div className=" bg-black">
          <div className="flex  justify-center items-center mb-5 mt-2 bg-black">
            <input
              autoFocus
              className=" flex bg-black text-blue-900 border-2 border-white rounded-lg p-1 w-4/5 h-10"
              type="text"
              id="search"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <BsSearch
              className=" flex text-blue-900 text-2xl ml-2 border-2 border-white h-10 w-10 p-2 rounded-lg"
              scale={20}
            />
          </div>
          <div className=" w-full overflow-y-auto">
            {search.length > 0 && filteredMovies.length > 0 ? (
              <FilteredMovies filteredMovies={filteredMovies} />
            ) : null}
          </div>
        </div> */}
      </Drawer>
    </div>
  );
}
