import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  font-size: 16px;
`;

export const Img = styled.img`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
  }
`;

export const Item = styled.li`
  width: 150px;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export const Character = styled.span`
  font-weight: 700;
`;
