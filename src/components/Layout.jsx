import { useState } from 'react';

import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Menu } from './Header/Menu/Menu';

export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <Menu onMenuClose={closeMenu} />}
      {!isOpen && (
        <>
          <Header onMenuOpen={openMenu} />
          <Outlet />
        </>
      )}
    </>
  );
};
