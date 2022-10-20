import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoFilmOutline } from 'react-icons/io5';
import { StyledNav, Header } from './SharedLayout.styles';
import { Loader } from '../../components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Link to="/">
          <IoFilmOutline size={24} color={'orange'} />
        </Link>

        <nav>
          <StyledNav to="/" end>
            Home
          </StyledNav>
          <StyledNav to="/movies">Movies</StyledNav>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
