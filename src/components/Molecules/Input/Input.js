import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import { Field } from 'formik';

const StyledMainWrapper = styled.div`
  width: ${({ width }) => width || '130px'};
  height: ${({ height }) => height || '45px'};
  margin: ${({ margin }) => margin};  
  background: ${({ theme }) => theme.BGblue};;
  border: 1px solid ${({ theme }) => theme.blue};
  border-radius: 5px;
  position: relative;

  ${({ color }) =>
    color &&
    css`
      border: 1px solid ${({ theme }) => theme[color]};
    `};

  ::before,
  ::after {
    position: absolute;
    /* opacity: 0; */
  }

  ::before {
    background: ${({ theme }) => theme.BGblue};;
    height: 10px;
    padding: 0 6px;
    top: -10px;
    left: 12px;
    transform: scaleX(${({ focus }) => (focus ? '1' : '0')});
    transition: transform 0.2s;
    content: '${({ placeholder }) => placeholder}';
    color: transparent;
  }

  ::after {
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    transform: translate(0%, calc(50% - 2px));
    color: rgba(0, 0, 0, 0.6);
    z-index: 0;
    font-size: 2rem;
    content: '${({ placeholder }) => placeholder}';

    

    ${({ focus }) =>
      focus &&
      css`
        color: ${({ theme }) => theme.blue};
        transform: translate(calc(-50% + 39px), -60%);
        font-size: 1.5rem;
        transition: transform 0.2s, color 0.2s, font-size 0.2s;

        ${({ color }) =>
          color &&
          css`
            color: ${({ theme }) => theme[color]};
          `}
      `}
  }
`;

const StyledInput = styled(Field)`
  position: relative;
  background: none;
  z-index: 10;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 5%;
  border: none;
  text-align: ${({ center }) => center && 'center'};
  font-size: 1.8rem;

  :focus {
    outline: 0;
  }
`;

const NewInput = ({
  active,
  placeholder,
  name,
  center,
  margin,
  textarea,
  height,
  width,
  type,
  color,
}) => {
  const [focus, setFocus] = useState(false);

  const chendlechangeFocus = e => {
    setFocus(!focus);
    if (e.target.value.length > 0) {
      setFocus(true);
    }
  };

  return (
    <StyledMainWrapper
      focus={active || focus}
      placeholder={placeholder}
      margin={margin}
      width={width}
      height={height}
      color={color}
    >
      <StyledInput
        component={textarea ? 'textarea' : 'input'}
        name={name}
        onBlur={chendlechangeFocus}
        onFocus={chendlechangeFocus}
        center={center}
        as={Field}
        type={type || ''}
      />
    </StyledMainWrapper>
  );
};

NewInput.propTypes = {
  active: propTypes.bool,
  placeholder: propTypes.string.isRequired,
  name: propTypes.string,
  margin: propTypes.string,
  textarea: propTypes.bool,
  height: propTypes.string,
  width: propTypes.string,
  type: propTypes.string,
  color: propTypes.string,
};

NewInput.defaultProps = {
  active: false,
  name: '',
  margin: '',
  textarea: false,
  height: '',
  width: '',
  type: '',
  color: '',
};

export default NewInput;
