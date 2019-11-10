import Icon from 'components/Icon/Icon';
import styled from 'styled-components';
import media from 'assets/styles/media';

export const StyledMainWrapper = styled.nav`
  background: ${({ theme }) => theme.BGblue};
  min-height: 15vh;
  width: 100%;

  ${media.desktop`
    display: none;
  `}
`;

export const StyledH2 = styled.h2`
  color: white;
  font-size: 2.4rem;
  font-weight: 300;
  position: relative;
  overflow: hidden;
  margin: 20px 0 0 27px;
  max-width: 85%;
  padding-bottom: 60px;
`;

export const StyledName = styled.span`
  font-size: 3rem;
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  top: 19px;
  right: 65px;
`;
