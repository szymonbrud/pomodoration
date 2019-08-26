import { useState, useEffect } from 'react';

const addZeroToNumber = number => {
  return number < 10 ? `0${number}` : number;
};

const GetTimerMain = (startMinutes, startSecounds) => {
  const [secounds, setSecounds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const getNowTime = () => {
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
    // @TODO: zmienić to na funkcję
    h = addZeroToNumber(h);
    m = addZeroToNumber(m);
    s = addZeroToNumber(s);

    if (m <= 0 && s <= 0) {
      setSecounds(addZeroToNumber(startSecounds));
      setMinutes(addZeroToNumber(startMinutes));
    } else {
      setTimeout(() => {
        calculate(datePlus);
      }, 1000);
      setSecounds(s);
      setMinutes(m);
    }
  };

  const clicked = () => {
    const nowTime = getNowTime();

    const datePlus = new Date(
      nowTime.dateYear,
      nowTime.dateMonth,
      nowTime.dateDay,
      nowTime.dateHours,
      nowTime.dateMinutes,
      nowTime.dateSecound + 20,
    );

    calculate(datePlus);
  };

  useEffect(() => {
    clicked();
  }, []);

  return {
    secounds,
    minutes,
  };
};

export default GetTimerMain;
