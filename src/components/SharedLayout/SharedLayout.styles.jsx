import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
`;

export const StyledNav = styled(NavLink)`
  text-decoration: none;
  border-radius: 4px;

  margin-left: 10px;
  padding: 5px;

  font-size: 16px;
  font-weight: 500;
  color: black;
  &.active {
    background-color: orange;
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orange;
  }
`;
