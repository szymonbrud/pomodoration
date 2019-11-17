import React from 'react';
import styled from 'styled-components';
import Burger from 'components/Molecules/Burger/Burger';
import media from 'assets/styles/media';
import MenuDesktop from 'components/Molecules/MenuDesktop/MenuDesktop';

const StyledMainWrapper = styled.section`
  width: 100%;
`;

const StyleTopBar = styled.nav`
  z-index: 1000;
  width: 100%;
  height: 8vh;
  background: #6762ff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;

  ${media.desktop`
    display: none;
  `}
`;

const StyledNamePage = styled.p`
  color: white;
  font-size: 2rem;
  margin: 0 0 0 6%;
`;

const StyledPositionGridWrapperForContent = styled.div`
  margin-top: 10vh;
  width: 100%;
  display: grid;
  grid-template-columns: 80%;
  justify-content: center;
  grid-gap: 7vh;

  ${media.desktop`
    min-height: 60vh;
    margin: 20vh 0 0 17%;
    width: 80%;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 7vh;
  `}
`;

const StyledArticle = styled.article``;

const StyledTitleArt = styled.h1`
  color: #6762ff;
  font-size: 2rem;
  font-weight: 300;
  position: relative;

  ::before {
    content: '';
    width: 3px;
    height: 100%;
    background: #6762ff;
    position: absolute;
    top: 0;
    left: -15px;
  }
`;

const StyledContentArt = styled.p`
  font-size: 1.8rem;
`;

const StyledContentListArt = styled.ul`
  padding: 0 0 0 10px;
`;

const StyledContentListItemArt = styled.li`
  font-size: 1.8rem;
  position: relative;
  list-style: none;

  ::before {
    content: '';
    width: 6px;
    height: 6px;
    background: #6762ff;
    border-radius: 100px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -16px;
  }
`;

const AboutInformationToMap = [
  {
    type: 'list',
    title: 'co planuje wprowadzić w przyszłości',
    content: [
      'powiadomienia, sygnał dzwiękowy po upływie czasu',
      'zmiana domyślnie ustawionego czasu',
      'więcej metod logowania się do aplikacji',
    ],
  },
  {
    type: 'article',
    title: 'dlaczego ta aplikacja powstała',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac magna quam. Vivamus ac purus vel eros ultrices placerat eu non felis. Phasellus ullamcorper diam dapibus, viverra nunc et, fermentum sem. Duis dignissim condimentum porta.',
  },
  {
    type: 'article',
    title: 'kim jestem',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac magna quam. Vivamus ac purus vel eros ultrices placerat eu non felis. Phasellus ullamcorper diam dapibus, viverra nunc et, fermentum sem. Duis dignissim condimentum porta.',
  },
  {
    type: 'article',
    title: 'urzyte ikonki',
    content:
      'Ikona google przy logowaniu oraz ikona strzałki do przechodzenia dalej na ekranie powitalnym wykonana przez Freepik z www.flaticon.com ',
  },
];

const AboutTemplate = () => (
  <StyledMainWrapper>
    <MenuDesktop />
    <StyleTopBar>
      <StyledNamePage>O aplikacji</StyledNamePage>
      <Burger />
    </StyleTopBar>
    <StyledPositionGridWrapperForContent>
      {AboutInformationToMap.map(({ type, title, content }) => (
        <StyledArticle>
          <StyledTitleArt>{title}</StyledTitleArt>
          {type === 'article' ? (
            <StyledContentArt>{content}</StyledContentArt>
          ) : (
            <StyledContentListArt>
              {content.map(text => (
                <StyledContentListItemArt>{text}</StyledContentListItemArt>
              ))}
            </StyledContentListArt>
          )}
        </StyledArticle>
      ))}
    </StyledPositionGridWrapperForContent>
  </StyledMainWrapper>
);

export default AboutTemplate;
