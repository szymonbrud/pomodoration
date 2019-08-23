import React, { useEffect, useState } from 'react';
import Burger from 'components/Molecules/Burger/Burger';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import magnifier from 'assets/icons/magnifier.svg';
import { firebaseApp } from 'firebaseConfig';

const StyledMainWrapper = styled.nav`
  background: ${({ theme }) => theme.BGblue};
  height: 20vh;
  width: 100%;
`;

const StyledH2 = styled.h2`
  color: white;
  font-size: 2.4rem;
  position: absolute;
  top: 20px;
  left: 27px;
  font-weight: 300;
  margin: 0;
`;

const StyledName = styled.span`
  font-size: 3rem;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 19px;
  right: 65px;
`;

const TopBar = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const user = firebaseApp.auth().currentUser.displayName;

    if (user !== null) {
      setUserName(user);
    }
  }, []);

  return (
    <StyledMainWrapper data-test="TopBarWrapper">
      <Burger data-test="burger" />
      <StyledIcon src={magnifier} data-test="icon" />
      <StyledH2 data-test="Text">
        hello
        <br />
        <StyledName>{userName}</StyledName>
      </StyledH2>
    </StyledMainWrapper>
  );
};

export default TopBar;
