import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const WrapperFilm = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  padding: 10px;
  gap: 15px;
`;

export const Params = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  font-size: 18px;
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: 700;
`;

export const Topic = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

export const WrapperOptions = styled.div`
  padding: 10px;
  gap: 15px;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.3);
`;

export const Options = styled.div`
  display: flex;
  padding: 10px;
  gap: 15px;
`;

export const TopicOptions = styled.span`
  padding-left: 10px;
  font-size: 20px;
  font-weight: 500;
`;

export const NavItem = styled(NavLink)`
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
