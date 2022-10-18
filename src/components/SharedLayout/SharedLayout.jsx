import { Outlet, Link } from 'react-router-dom';
import { StyledNav, Header } from './SharedLayout.styles';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <span>Logo</span>
        <nav>
          <StyledNav to="/" end>
            Home
          </StyledNav>
          <StyledNav to="/movies">Movies</StyledNav>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};
