import React from 'react';
import styled, { keyframes } from 'styled-components';
import propTypes from 'prop-types';

const StyledMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const slide = keyframes`
  0% {
    transform: translateX(-50%) scaleX(0);
  }

  70%{
    transform: translateX(150%) scaleX(4);
  }

  100%{
    transform: translateX(350%) scaleX(0);
  }
`;

const StyledText = styled.p`
  color: ${({ theme }) => theme.red};
  font-size: 20px;
  text-align: center;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 25%;
    height: 2px;
    background: ${({ theme }) => theme.red};
    animation: ${slide} 2s ease-in-out infinite;
  }
`;

const LoadingAnimation = ({ text }) => (
  <StyledMainWrapper>
    <StyledText>{text}</StyledText>
  </StyledMainWrapper>
);

LoadingAnimation.propTypes = {
  text: propTypes.string,
};

LoadingAnimation.defaultProps = {
  text: '',
};

export default LoadingAnimation;
