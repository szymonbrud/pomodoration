import React from 'react';
import styled, { css } from 'styled-components';
import beHappyAfterFinishWork from 'assets/images/beHappyAfterFinishWork.svg';
import checkTheList from 'assets/images/checkTheList.svg';
import working from 'assets/images/working.svg';
import arrow from 'assets/icons/arrow.svg';
import { Redirect } from 'react-router-dom';
import media from 'assets/styles/media';
import useFirstLoginAnimation from './useFirstLoginAnimation';

const StyledMainTemplate = styled.div`
  width: 100%;
  height: 100vh;
  background: #6762ff;

  ${media.desktop`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

const StyledTopTable = styled.div`
  width: 180px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${media.desktop`
    display: none;
  `}
`;

const StyledOneTable = styled.div`
  width: 26%;
  border-radius: 100px;
  height: 9px;
  background: rgba(255, 255, 255, 0.6);

  transition: background 0.2s;

  ${({ isActive }) =>
    isActive &&
    css`
      background: #403bdb;
    `}
`;

const StyledWrapperForOneSection = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.2s;

  ${({ currentSection, index }) =>
    currentSection === index
      ? css`
          transform: translateX(0);
        `
      : currentSection > index &&
        css`
          transform: translate(-100%);
        `}

  ${media.desktop`
    width: 33%;
    position: relative;
    transform: unset;
    opacity: 0;
    transition: opacity 0.2s;

    ${({ currentSection, index }) =>
      currentSection >= index &&
      css`
        opacity: 1;
      `}
    
  `}
`;

const StyledImageForOneSection = styled.img`
  width: 80%;

  ${media.desktop`
    width: 60%;
  `}
`;

const StyledTextForOneSection = styled.p`
  width: 80%;
  color: white;
  font-weight: 300;
  margin: 0;
  text-align: center;
  font-size: 2.4rem;
  margin-top: 4vh;
`;

const StyledNextButton = styled.button`
  width: 71px;
  height: 71px;
  border: none;
  background: #403bdb;
  border-radius: 20px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const StyledIcon = styled.img`
  width: 25px;
`;

const tabOfTextAndImage = [
  {
    text: 'Wybierz nazwę czynności i pracuj przez wyznaczony czas',
    image: working,
  },
  {
    text: 'Kontroluj wyniki i poprawiaj się',
    image: checkTheList,
  },
  {
    text: 'osiągaj cele',
    image: beHappyAfterFinishWork,
  },
];

const FirstLoginTemplate = () => {
  const { currentSection, nextSection } = useFirstLoginAnimation();

  if (currentSection === 3) {
    return <Redirect to="/timer" />;
  }

  return (
    <StyledMainTemplate>
      <StyledTopTable>
        <StyledOneTable isActive />
        <StyledOneTable isActive={currentSection >= 1} />
        <StyledOneTable isActive={currentSection >= 2} />
      </StyledTopTable>
      {tabOfTextAndImage.map((element, index) => (
        <StyledWrapperForOneSection currentSection={currentSection} index={index}>
          <StyledImageForOneSection src={element.image} />
          <StyledTextForOneSection>{element.text}</StyledTextForOneSection>
        </StyledWrapperForOneSection>
      ))}
      <StyledNextButton onClick={nextSection}>
        <StyledIcon src={arrow} />
      </StyledNextButton>
    </StyledMainTemplate>
  );
};

export default FirstLoginTemplate;
