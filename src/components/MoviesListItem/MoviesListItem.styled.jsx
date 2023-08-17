import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ItemStyled = styled.li`
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: rgb(158, 158, 158) 0px 4px 10px 4px;
  }
`;

export const LinkStyled = styled(Link)`
  color: #3f51b5;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  text-decoration: none;
  color: #212121;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #3f51b5;
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 440px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Title = styled.p`
  margin: 0 auto;
  padding: 30px 15px;
  text-align: center;
`;
