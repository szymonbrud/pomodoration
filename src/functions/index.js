export const addZero = item => {
  return item < 10 ? `0${item}` : item;
};

export const getCurrentTime = time => {
  let date;
  if (time) {
    date = new Date(time);
  } else {
    date = new Date();
  }
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

export const getDatabaseFormatDate = (minusDay = 0, time) => {
  const { dateDay, dateMonth, dateYear } = getCurrentTime(time);

  const date = new Date(dateYear, dateMonth, dateDay - minusDay);
  const currentDay = addZero(date.getDate());
  const currentMonth = addZero(date.getMonth() + 1);
  const currentYear = date.getFullYear();
  const fullDateToDatabase = `${currentDay}|${currentMonth}|${currentYear}`;
  return fullDateToDatabase;
};

export const chengeDateToDateWithKoma = date => {
  return `${date[0]}${date[1]}.${date[3]}${date[4]}`;
};

const changeDateToNumber = date => {
  let day = date[0] + date[1];
  day = parseInt(day, 10);
  let month = date[3] + date[4];
  month = parseInt(month - 1, 10);
  let year = date[6] + date[7] + date[8] + date[9];
  year = parseInt(year, 10);

  return {
    day,
    month,
    year,
  };
};

const sortFunc = (a, b) => b - a;

export const sortData = date => {
  let dateTab = [];
  const sortedDate = [];

  date.forEach(e => {
    const { day, month, year } = changeDateToNumber(e);
    dateTab.push(new Date(year, month, day).getTime());
  });
  dateTab = dateTab.sort(sortFunc);
  dateTab.forEach(e => {
    sortedDate.push(getDatabaseFormatDate(0, e));
  });

  return sortedDate;
};

export const changeSecoundsToMinAndSec = secounds => {
  let sec = secounds % 60;
  sec = addZero(sec);
  const minutes = Math.floor(secounds / 60);
  const hours = Math.floor(minutes / 60);
  let h = hours % 60;
  let min = minutes % 60;
  if (hours > 0) {
    h = addZero(h);
    return `${hours}h ${min}min`;
  }
  if (min === 0) {
    return `${sec}s`;
  }
  min = addZero(min);
  return `${min}min`;
};
