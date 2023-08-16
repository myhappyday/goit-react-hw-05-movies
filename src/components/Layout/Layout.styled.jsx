import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { FiFilm } from 'react-icons/fi';

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 0 15px;
`;

export const Header = styled.header`
  padding: 15px 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background-color: rgb(243, 243, 243);
  border-radius: 4px;
`;

export const Nav = styled.nav`
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;

export const Wrapper = styled.div`
  display: flex;
  grid-gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  width: 60px;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  color: #212121;
  border: 1px solid #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: white;
    background-color: #3f51b5;
  }

  :hover,
  :focus {
    color: white;
    background-color: #3f51b5;
  }
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  grid-gap: 10px;
  align-items: center;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.19;
  color: #3f51b5;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const LogoIcon = styled(FiFilm)`
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    scale: 1.2;
    box-shadow: #3f51b5 0px 0px 5px 2px;
  }
`;
