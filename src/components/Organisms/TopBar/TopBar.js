import React, { useEffect, useState } from 'react';
import Burger from 'components/Molecules/Burger/Burger';
import magnifier from 'assets/icons/magnifier.svg';
import { firebaseApp } from 'firebaseConfig';
import { StyledMainWrapper, StyledH2, StyledName, StyledIcon } from './TopBar.style';

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
        hello,
        <br />
        <StyledName>{userName}</StyledName>
      </StyledH2>
    </StyledMainWrapper>
  );
};

export default TopBar;
