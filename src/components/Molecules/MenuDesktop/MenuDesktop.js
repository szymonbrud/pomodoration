import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import { NavLink } from 'react-router-dom';
import media from 'assets/styles/media';

const StyledMainWrapper = styled.nav`
  display: none;

  ${media.desktop`
    position: fixed;
    left: 0;
    top: 0;
    width: 14vw;
    max-width: 185px;
    min-width: 170px;
    height: 100vh;
    background: ${({ theme }) => theme.BGblue};
    border-radius: 0 15px 15px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
  `}
`;

const StyledUserName = styled.p`
  margin: 15% 0 0 10%;
  color: white;
  width: 80%;
  overflow: hidden;
`;

const StyledListOfelement = styled.ul`
  width: 100%;
  /* background: red; */
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10vh;
  padding: 0;
`;

const StyledElementOfList = styled.li`
  color: white;
  margin-top: 5vh;
  background: #474e8f;
  width: 80%;
  height: 60px;
  border-radius: 15px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: color 0.2s;

  &.active {
    margin-left: 20%;
    border-radius: 15px 0 0 15px;
  }

  :hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const StyledLogOutbutton = styled.button`
  position: absolute;
  bottom: 5vh;
  color: ${({ theme }) => theme.red};
  font-size: 2rem;
  left: 0;
  background: none;
  border: none;
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

const menuConfig = [
  {
    title: 'czasomierz',
    link: '/timer',
  },
  {
    title: 'o aplikacji',
    link: '/aboutApp',
  },
];

const MenuDesktop = () => {
  const user = firebase.auth().currentUser.displayName;

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
    <StyledMainWrapper>
      <StyledUserName>
        Hello, <br /> {user}
      </StyledUserName>
      <StyledListOfelement>
        {menuConfig.map(element => (
          <StyledElementOfList as={NavLink} to={element.link} activeclass="active">
            {element.title}
          </StyledElementOfList>
        ))}
      </StyledListOfelement>
      <StyledLogOutbutton onClick={logOutUser}>wyloguj mnie</StyledLogOutbutton>
    </StyledMainWrapper>
  );
};

export default MenuDesktop;
