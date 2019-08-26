const addZeroToNumber = number => {
  return number < 10 ? `0${number}` : number;
};

// let secounds;
// let minutes;

// const getNowTime = () => {
//   const date = new Date();
//   const dateMonth = date.getMonth();
//   const dateDay = date.getDate();
//   const dateYear = date.getFullYear();
//   const dateHours = date.getHours();
//   const dateMinutes = date.getMinutes();
//   const dateSecound = date.getSeconds();

//   return {
//     dateMonth,
//     dateDay,
//     dateYear,
//     dateHours,
//     dateMinutes,
//     dateSecound,
//   };
// };

// const calculate = (datePlus, startMinutes, startSecounds) => {
//   const date = new Date();

//   const timePlus = datePlus.getTime();
//   const time = date.getTime();
//   const clearTime = timePlus - time;
//   let s = Math.floor(clearTime / 1000);
//   let m = Math.floor(s / 60);
//   let h = Math.floor(m / 60);
//   s %= 60;
//   m %= 60;
//   h %= 24;

//   h = addZeroToNumber(h);
//   m = addZeroToNumber(m);
//   s = addZeroToNumber(s);

//   if (m <= 0 && s <= 0) {
//     console.log('tak');
//     const sec = addZeroToNumber(startSecounds);
//     const min = addZeroToNumber(startMinutes);
//     return { sec, min };
//   }
//   console.log('nie');

//   const sec = addZeroToNumber(s);
//   const min = addZeroToNumber(m);
//   return { sec, min };
// };

// const clicked = (startMinutes, startSecounds) => {
//   let datePlus;

//   if (!datePlus) {
//     const nowTime = getNowTime();

//     datePlus = new Date(
//       nowTime.dateYear,
//       nowTime.dateMonth,
//       nowTime.dateDay,
//       nowTime.dateHours,
//       nowTime.dateMinutes + startMinutes,
//       nowTime.dateSecound + startSecounds,
//     );
//   }

//   let lol = calculate(datePlus, startMinutes, startSecounds);

//   if (lol.min <= 0 && lol.sec <= 0) {
//     return lol;
//   }
//   setTimeout(() => {
//     lol = clicked(datePlus, startMinutes, startSecounds);
//   }, 1000);
//   return lol;
// };

// export default clicked;

const getCurrentTime = () => {
  const date = new Date();
  const dateMonth = date.getMonth();
  const dateDay = date.getDate();
  const dateYear = date.getFullYear();
  const dateHours = date.getHours();
  const dateMinutes = date.getMinutes();
  const dateSecound = date.getSeconds();

  return {
    dateMonth,
    dateDay,
    dateYear,
    dateHours,
    dateMinutes,
    dateSecound,
  };
};

const calculate = datePlus => {
  const date = new Date();

  const timePlus = datePlus.getTime();
  const time = date.getTime();
  const clearTime = timePlus - time;
  let s = Math.floor(clearTime / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  s %= 60;
  m %= 60;
  h %= 24;

  h = addZeroToNumber(h);
  m = addZeroToNumber(m);
  s = addZeroToNumber(s);

  return { s, m };
};

const sendData = (startMinutes, startSecounds) => {
  const nowTime = getCurrentTime();
  const datePlus = new Date(
    nowTime.dateYear,
    nowTime.dateMonth,
    nowTime.dateDay,
    nowTime.dateHours,
    nowTime.dateMinutes + startMinutes,
    nowTime.dateSecound + startSecounds,
  );
  return datePlus;
};
const mainActive = (startMinutes, startSecounds) => {
  // let i = 0;
  // const dataPlus = sendData(startMinutes, startSecounds);
  // const time = calculate(dataPlus);
  // // console.log(i);
  // if (time.m <= 0 && time.s <= 0) {
  //   // jeśli timer zakończył działanie
  // } else {
  //   // jeśli timer NIE zakończył działania
  //   // setTimeout(() => {
  //   //   mainActive(startMinutes, startSecounds);
  //   // }, 1000);
  //   return time;
  // }
  let i;
  while (i < 20) {
    i += 1;
    console.log('i');
    console.log(i);
    return i;
  }
};

export default mainActive;
