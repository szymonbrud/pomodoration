import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import googleIcon from 'assets/icons/googleIcon.svg';
import PropTypes from 'prop-types';

const StyleButton = styled.button`
  width: 80%;
  height: 6vw;
  max-width: 350px;
  height: 40px;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-left: 5%;
  margin-top: 10px;
`;

const StyledIcon = styled(Icon)`
  width: 6%;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
`;

const LoginButton = ({ textInButton, action, LogoActive }) => (
  <>
    <StyleButton onClick={action} data-test="button">
      {LogoActive && <StyledIcon src={googleIcon} data-test="icon" />}
      {textInButton}
    </StyleButton>
  </>
);

LoginButton.propTypes = {
  textInButton: PropTypes.string,
  action: PropTypes.func.isRequired,
  LogoActive: PropTypes.bool,
};

LoginButton.defaultProps = {
  textInButton: '',
  LogoActive: true,
};

export default LoginButton;
