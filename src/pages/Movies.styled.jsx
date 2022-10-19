import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.3);
`;

export const Buttom = styled(NavLink)`
  display: flex;
  gap: 5px;
  align-items: center;
  text-decoration: none;
  border-radius: 4px;

  padding: 5px;

  font-size: 16px;
  font-weight: 500;
  color: black;

  :hover,
  :focus-visible {
    color: orange;
  }
`;
