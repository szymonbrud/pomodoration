import styled, { css } from 'styled-components';
import media from 'assets/styles/media';

export const StyledPositionWrapperOfNamesSestions = styled.div`
  margin: 4vh 5% 0;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const StyledNameOfSections = styled.p`
  font-size: 1.7rem;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    background: white;
    bottom: -2px;
    width: 100%;
    height: 2px;
    opacity: 0.8;
  }
`;

export const StyledNameOfDay = styled.div`
  height: 42px;
  width: 95px;
  background: ${({ theme }) => theme.red};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 13px 13px 0;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 0.5px;
  padding: 0;
  margin: 41px 0 13px 0;

  ${({ first }) =>
    first &&
    css`
      margin: 23px 0 13px 0;
    `}
`;

export const StyledParagraphNameOfDay = styled.p`
  margin: 2px 0 0 0;
  padding: 0;
`;

export const StyledMainWrapperOfSession = styled.div`
  margin: 9px 3%;
  width: 94%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledInsideWrapperOfSession = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
`;

export const StyledInsideWrapperOfsessionSecound = styled.div`
  display: flex;
  flex-grow: 4;
  align-items: center;
`;

export const StyledSessionNumber = styled.p`
  margin: 0;
  color: white;
  font-size: 1.9rem;
  opacity: 0.7;
`;
export const StyledNameOFSession = styled.p`
  color: white;
  margin: 0;
  max-width: 65%;
  font-size: 1.8rem;
`;

export const StyledLine = styled.div`
  height: 1px;
  background: white;
  flex-grow: 3;
  margin: 0 20px;
`;

export const StyledTimeOfSession = styled.p`
  margin: 0;
  color: white;
`;

export const StyledWrapperForText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100%;
`;

export const STyledInnerWHiteText = styled.p`
  color: white;
  font-size: 1.6rem;
  width: 100%;
  text-align: center;
  width: 70%;
`;

export const StyledMainNameSection = styled.h1`
  display: none;

  ${media.desktop`
    display: inline;
    color: white;
  font-weight: 400;
  font-size: 2.3rem;
  margin-top: -20px;
  `}
`;
