import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import propTypes from 'prop-types';

const openAnimation = keyframes`
  0%{
    transform: translateX(100%);
  }

  100%{
    transform: translateX(0);
  }
`;

const closeAnimation = keyframes`
  0%{
    transform: translateY(0);
  }

  100%{
    transform: translateY(100%);
  }
`;

const ManuStyledViews = {
  closed: css`
    transform: translateY(100%);
  `,
  opening: css`
    animation-name: ${openAnimation};
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
  `,
  closing: css`
    animation-name: ${closeAnimation};
    animation-duration: 1.2s;
    animation-fill-mode: forwards;
  `,
  checkTheView(open) {
    if (open === null) {
      return this.closed;
    }
    if (open) {
      return this.opening;
    }

    return this.closing;
  },
};

const StyledMainWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.blue};
  z-index: 9500;

  ${({ isMenuOpen }) => ManuStyledViews.checkTheView(isMenuOpen)};
`;

const StyledListOfMenu = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
`;

const StyledElementOfMenu = styled(Link)`
  color: white;
  font-size: 2.8rem;
  margin-top: ${({ isfirst }) => (isfirst === 'true' ? '20vh' : '7vh')};
  text-decoration: none;
`;

const StyledLogOutButton = styled.button`
  width: 100%;
  height: 14vh;
  background: ${({ theme }) => theme.red};
  border: none;
  color: white;
  font-size: 2.8rem;
  margin: auto 0 2vh 0;
  padding: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const menuConfig = [
  {
    title: 'czasomierz',
    link: '/timer',
  },
  {
    title: 'o aplikacji',
    link: '/about',
  },
];

const ContentMenu = ({ isMenuOpen }) => {
  const logOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          console.log('wylogowano poprawnie');
        },
        () => {
          console.log('Błąd podczas wylogowywania');
        },
      );
  };

  return (
    <>
      <StyledMainWrapper isMenuOpen={isMenuOpen}>
        <StyledListOfMenu>
          {menuConfig.map((element, index) => (
            <StyledElementOfMenu
              isfirst={index === 0 ? 'true' : 'false'}
              to={element.link}
              key={element.title}
            >
              {element.title}
            </StyledElementOfMenu>
          ))}
          <StyledLogOutButton onClick={logOutUser}>wyloguj mnie</StyledLogOutButton>
        </StyledListOfMenu>
      </StyledMainWrapper>
    </>
  );
};

export default ContentMenu;

ContentMenu.propTypes = {
  isMenuOpen: propTypes.bool,
};

ContentMenu.defaultProps = {
  isMenuOpen: false,
};
