import styled from '@emotion/styled';

export const ListStyled = styled.ul`
  display: grid;
  max-width: calc(100vw - 20px);
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-gap: 16px;  
  padding: 20px 0;  
  `;

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

export const ImageStyled = styled.img`
  width: 100%;
  height: 210px;
  object-fit: cover;
`;

export const Name = styled.h4`
  margin: 5px 15px;
  text-align: center;
  font-size: 16px;
  line-height: 1.1;
  letter-spacing: 0.03em;
  color: #3f51b5;
`;

export const Character = styled.p`
  margin: 5px;
  text-align: center;
  font-size: 14px;
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