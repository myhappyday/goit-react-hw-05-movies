import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Container,
  StyledLink,
  Header,
  Nav,
  Wrapper,
  LogoLink,
  LogoIcon,
} from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <LogoLink to="/">
            <LogoIcon />
            MovieQuest
          </LogoLink>
          <Wrapper>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </Wrapper>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        pauseOnHover
      />
    </Container>
  );
};

export default Layout;
