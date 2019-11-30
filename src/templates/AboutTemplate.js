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
  min-height: 60px;
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

const StyledBoldText = styled.span`
  font-weight: bold;
`;

const StyledLinkTo = styled.a`
  color: #6762ff;
`;

const AboutInformationToMap = [
  {
    type: 'list',
    title: 'Co planuję wprowadzić w przyszłości',
    content: [
      'powiadomienia, alarm po upływie wyznaczonego czasu',
      'zmiana domyślnego czasu',
      'więcej metod logowania się do aplikacji',
      'ciemny motyw aplikacji',
    ],
  },
  {
    type: 'article',
    title: 'Dlaczego stworzyłem tą aplikację',
    content:
      'Moim głównym celem było aby pisząc tą aplikację nauczyć się jak najwięcej. Głównie celowałem w naukę (testów, TDD, react hooks, firebase, uwierzytelniania użytkowników, PWA, wzorców projektowych). Oczywiście przy tworzeniu aplikacji nauczyłem się znacznie więcej jestem z tego powodu bardzo zadowolony.',
  },
  {
    type: 'article',
    title: 'Kim jestem?',
    content: (
      <>
        Mam 16 i moją pasją jest programowanie. Cały czas chcę się uczyć, i poprawiać to co już
        umiem.
        <br />
        <br />
        <StyledBoldText>Odwiedź mnie na linkedin: </StyledBoldText>
        <StyledLinkTo href="https://www.linkedin.com/in/szymon-brud-119253189" target="blank">
          linkedin-Szymon Brud
        </StyledLinkTo>
        <br />
        <StyledBoldText>Zobacz projekt na github: </StyledBoldText>
        <StyledLinkTo href="https://github.com/szymonqqaz" target="blank">
          https://github.com/szymonqqaz
        </StyledLinkTo>
        <br />
        <br />
        Jestem otwarty na współpracę.
      </>
    ),
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
        <StyledArticle key={title}>
          <StyledTitleArt>{title}</StyledTitleArt>
          {type === 'article' ? (
            <StyledContentArt>{content}</StyledContentArt>
          ) : (
            <StyledContentListArt>
              {content.map(text => (
                <StyledContentListItemArt key={text}>{text}</StyledContentListItemArt>
              ))}
            </StyledContentListArt>
          )}
        </StyledArticle>
      ))}
    </StyledPositionGridWrapperForContent>
  </StyledMainWrapper>
);

export default AboutTemplate;
