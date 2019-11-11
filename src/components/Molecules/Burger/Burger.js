import React, { useState } from 'react';
import styled from 'styled-components';
import ContentMenu from 'components/Molecules/ContentMenu/ContentMenu';

const StyledWrapperButton = styled.button`
  width: 29px;
  box-sizing: content-box;
  height: 19px;
  background: none;
  border: none;
  padding: 15px;
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 6000;
`;

const StyledLine = styled.div`
  position: relative;
  width: 100%;
  height: 3px;
  border-radius: 100px;
  background: white;
  margin-top: -10px;

  ::before,
  ::after {
    height: 100%;
    background: white;
    content: '';
    position: absolute;
    left: 0;
    border-radius: 100px;
  }

  ::before {
    top: 8px;
    width: 20px;
  }

  ::after {
    top: 16px;
    width: 12px;
  }
`;

const Burger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(null);
  return (
    <>
      <ContentMenu isMenuOpen={isMenuOpen} />
      <StyledWrapperButton onClick={() => setIsMenuOpen(prev => !prev)}>
        <StyledLine />
      </StyledWrapperButton>
    </>
  );
};

export default Burger;
