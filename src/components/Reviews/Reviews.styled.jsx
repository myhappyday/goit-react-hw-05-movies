import styled from '@emotion/styled';

export const ListStyled = styled.ul`
  display: grid;
  gap: 20px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 20px 0;
  list-style: none;
`;

export const ItemStyled = styled.li`
  padding: 15px 0;
  border-bottom: 1px solid 3f51b5;
`;

export const Author = styled.h4`
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 1.1;
  letter-spacing: 0.03em;
  color: #3f51b5;
`;

export const Text = styled.p`
  // margin-bottom: 15px;
  font-size: 16px;
  line-height: 1.1;
  color: #212121;
`;

export const Message = styled.p`
  margin: 0 auto;
  padding: 24px;
  text-align: center;
  color: #3f51b5;
  font-size: 28px;
  font-weight: 500;
`;