import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BtnLink = styled(Link)`
  display: flex;
  width: 90px;
  gap: 8px;
  padding: 8px 16px;
  margin: 20px 0;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid #3f51b5;
  border-radius: 4px;
  color: #212121;
  background-color: rgb(243, 243, 243);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: white;
    background-color: #3f51b5;
  }
`;
