import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`
  display: flex;
  padding: 8px 16px;
  margin: 20px auto 0 auto;
  text-align: center;
  border-radius: 4px;
  background-color: rgb(243, 243, 243);
  color: #212121;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #3f51b5;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;  
  font-weight: 500;
  
  :hover,
  :focus {
    background-color: #3f51b5;
    color: white;
  }
`;