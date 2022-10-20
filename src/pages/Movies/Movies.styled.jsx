import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  /* box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.3); */
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

export const Form = styled.form`
  padding: 10px;
`;

export const Input = styled.input`
  border: 1px solid orange;
  border-radius: 6px;
  width: 300px;
  height: 30px;

  margin-right: 10px;
`;

export const Search = styled.button`
  border-radius: 6px;
  border: none;

  padding: 5px;
  height: 35px;

  font-size: 16px;
  font-weight: 500;
  color: black;

  :hover,
  :focus-visible {
    color: orange;
  }
`;
