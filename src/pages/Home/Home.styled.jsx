import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavItem = styled(NavLink)`
  text-decoration: none;

  font-size: 16px;

  color: black;

  :hover,
  :focus-visible {
    color: orange;
  }
`;

export const Wrapper = styled.div`
  padding: 10px;
`;

export const Imem = styled.ul`
  padding-top: 10px;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const Options = styled.span`
  margin-left: 5px;
`;
