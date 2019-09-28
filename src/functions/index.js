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
  const { dateDay, dateHours, dateMinutes, dateMonth, dateSecound, dateYear } = getCurrentTime(
    time,
  );

  const date = new Date(dateYear, dateMonth, dateDay - minusDay);
  const currentDay = addZero(date.getDate());
  const currentMonth = addZero(date.getMonth() + 1);
  const currentYear = date.getFullYear();
  const fullDateToDatabase = `${currentDay}|${currentMonth}|${currentYear}`;
  return fullDateToDatabase;
};

export const chengeDateToDateWithKoma = date => {};

// to są funckcje które ze sobą wspógrają
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

const sortFunc = (a, b) => {
  return b - a;
};

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
