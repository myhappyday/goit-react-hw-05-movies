import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ImageStyled = styled.img`
  max-width: 360px;
  height: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  text-align: left;
  padding: 15px 20px;
  border-bottom: 2px solid  #3f51b5;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  text-align: left;
  padding: 15px 0;  
`;

export const Title = styled.h2`
margin-bottom: 15px;
font-size: 28px;
line-height: 1.16;
letter-spacing: 0.03em;
color: #3f51b5;
`;

export const SubTitle = styled.h3`
margin-bottom: 15px;
font-size: 20px;
line-height: 1.16;
letter-spacing: 0.03em;
color: #3f51b5;
`;

export const Text = styled.p`
margin-bottom: 15px;
font-size: 18px;
line-height: 1.16;
color: #212121;
`;

export const AdditionalInfo = styled.div`
  border-bottom: 2px solid  #3f51b5;
  padding: 15px 0; 
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  list-style: none; 
  padding: 0;
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  border: 1px solid  #3f51b5;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: white;
    background-color:  #3f51b5;
  }

  :hover,
  :focus {
    color: white;
    background-color:  #3f51b5;
  }
`;