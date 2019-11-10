import styled from 'styled-components';
import media from 'assets/styles/media';

const StyledMainWrapper = styled.div`
  width: 45%;
  height: 57px;
  background: ${({ theme }) => theme.red};
  border-radius: 10px;
  position: absolute;
  top: -11px;
  left: 12%;

  ${media.desktop`
    width: 33%;
  `}
`;

export default StyledMainWrapper;
