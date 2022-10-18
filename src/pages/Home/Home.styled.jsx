import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavItem = styled(NavLink)`
  text-decoration: none;

  font-size: 14px;

  color: black;

  :hover,
  :focus-visible {
    color: orange;
  }
`;
