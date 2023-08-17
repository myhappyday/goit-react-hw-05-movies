import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  margin: 20px 0;
  padding: 20px;
  justify-content: space-between;
  background-color: #fff;
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border-left: 1px solid #3f51b5;
  border-top: 1px solid #3f51b5;
  border-bottom: 1px solid #3f51b5;
  border-right: 0;
  border-radius: 4px 0 0 4px;
  outline: none;
  padding: 0 16px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  border: 1px solid #3f51b5;
  border-radius: 0 4px 4px 0;
  font-size: 16px;
  font-weight: 500;
  background-color: rgb(243, 243, 243);
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  // opacity: 0.6;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover,
  :focus {
    background-color: #3f51b5;
    color: white;
    // opacity: 1;
  }
`;
