import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import Navbar from './Navbar/Navbar';

const OutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 1000px;

  @media only screen and (max-width: 1032px) {
    padding: 0 16px;
  }

  @media only screen and (min-width: 1032px) {
    width: 1000px;
  }
`;

export const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </>
  );
};
