export const addZero = item => {
  return item < 10 ? `0${item}` : item;
};

export const getCurrentTime = () => {
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
