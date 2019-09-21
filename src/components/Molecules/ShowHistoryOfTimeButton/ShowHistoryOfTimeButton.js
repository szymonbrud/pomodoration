import React, { useState } from 'react';
import styled from 'styled-components';
import ReactSwipe from 'react-swipe';

const Kreska = styled.div`
  width: 60px;
  height: 7px;
  background: ${({ theme }) => theme.BGblue};
  border-radius: 100px;
  position: fixed;
  /* bottom: 5vh; */
  top: ${({ pos }) => pos}px;
  /* top: 0; */
  left: 50%;
  transform: translate(-50%);
`;

// const swipeOptions = {
//   startSlide: 2,
// };

const ShowHistoryOfTimeButton = () => {
  console.log();
  const [pos, setPos] = useState((window.innerHeight / 20) * 19);
  // const [avtive, setActive] = useState(false);

  // const funcMouseLeave = e => {
  //   console.log(e.pageY);
  //   setPos(e.pageY - 115);
  // };

  // const funcMouseMove = e => {
  //   console.log(e);
  // };

  const move = e => {
    console.log(e);
    console.log(e.touches[0].clientY);
    setPos(e.touches[0].clientY);
    // setActive(true);
  };

  // const mouseUp = e => {
  //   if (avtive) {
  //     setActive(false);
  //     console.log(e.pageY);
  //   }
  // };

  // window.addEventListener('mouseup', e => {
  //   mouseUp(e);
  // });

  const startMove = e => {
    console.log(e);
    console.log('start');
    // dadać ze po 1 sekundzie trzymania czyli jeśli nie wykryje stopMove to pokazać kawałek tego tam na dole
  };

  const stopMove = e => {
    console.log(e);
    console.log('stop');
  };

  return (
    <>
      {/* <Kreska onMouseOver={e => funcMouseMove(e)} onMouseLeave={e => funcMouseLeave(e)} pos={pos} /> */}
      {/* <Kreska onMouseDown={e => mouseDown(e)} pos={pos} /> */}
      <Kreska
        onTouchMove={e => move(e)}
        pos={pos}
        onTouchStart={e => startMove(e)}
        onTouchEnd={e => stopMove(e)}
      />
      {/* <Kreska className="kreska" /> */}
    </>
  );
};

export default ShowHistoryOfTimeButton;
