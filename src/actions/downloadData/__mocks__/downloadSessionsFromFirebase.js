import {
  downloadPomodoroSessions,
  downloadData,
  getDateFromDataAndSort,
} from 'actions/downloadSessionsFromDatabase';

const fakeData = [
  {
    date: 1569575447927,
    dateSerch: '27|09|2019',
    pomodoro: 6,
    time: 8400,
    title: 'programowanie',
  },
  {
    date: 1569575511156,
    dateSerch: '27|09|2019',
    pomodoro: 2,
    time: 181,
    title: 'loki',
  },
  {
    date: 1569602445200,
    dateSerch: '26|09|2019',
    pomodoro: 1,
    time: 3,
    title: 'ramnulus',
  },
  {
    date: 1569672015817,
    dateSerch: '28|09|2019',
    pomodoro: 1,
    time: 1,
    title: 'rabarbar',
  },
  {
    date: 1569678118218,
    dateSerch: '28|09|2019',
    pomodoro: 1,
    time: 5,
    title: 'rekowisko',
  },
  {
    date: 1569678538686,
    dateSerch: '28|09|2019',
    pomodoro: 1,
    time: 4,
    title: 'romakintosz',
  },
  {
    date: 1569678571167,
    dateSerch: '28|09|2019',
    pomodoro: 1,
    time: 2,
    title: 'nie no teraz to juz na serio xd',
  },
  {
    date: 1569849520425,
    dateSerch: '30|09|2019',
    pomodoro: 1,
    time: 4,
    title: 'krokus',
  },
  {
    date: 1569919595720,
    dateSerch: '01|10|2019',
    pomodoro: 1,
    time: 2,
    title: '',
  },
  {
    date: 1569919615821,
    dateSerch: '01|10|2019',
    pomodoro: 1,
    time: 5,
    title: 'testy na fonie',
  },
  {
    date: 1570025481007,
    dateSerch: '02|10|2019',
    pomodoro: 3,
    time: 4701,
    title: 'angielski',
  },
  {
    date: 1570035593309,
    dateSerch: '02|10|2019',
    pomodoro: 1,
    time: 1500,
    title: 'testy NA telefonie',
  },
  {
    date: 1570037812481,
    dateSerch: '02|10|2019',
    pomodoro: 3,
    time: 1728,
    title: '',
  },
  {
    date: 1570114149419,
    dateSerch: '03|10|2019',
    pomodoro: 3,
    time: 4635,
    title: 'angielski',
  },
  {
    date: 1570123289251,
    dateSerch: '03|10|2019',
    pomodoro: 8,
    time: 5467,
    title: '',
  },
  {
    date: 1570201284441,
    dateSerch: '04|10|2019',
    pomodoro: 2,
    time: 3473,
    title: 'angielski',
  },
  {
    date: 1570360478987,
    dateSerch: '06|10|2019',
    pomodoro: 1,
    time: 1065,
    title: 'angielski',
  },
  {
    date: 1570366505871,
    dateSerch: '06|10|2019',
    pomodoro: 1,
    time: 1,
    title: '',
  },
  {
    date: 1571069316650,
    dateSerch: '14|10|2019',
    pomodoro: 1,
    time: 6,
    title: 'angielski',
  },
  {
    date: 1571153089173,
    dateSerch: '15|10|2019',
    pomodoro: 1,
    time: 1,
    title: '',
  },
  {
    date: 1571337410022,
    dateSerch: '17|10|2019',
    pomodoro: 1,
    time: 1,
    title: '',
  },
];

export default () => {
  return dispatch => {
    const getData = new Promise(resolve => {
      resolve();
    });

    getData
      .then(() => {
        return dispatch(downloadPomodoroSessions(fakeData));
      })
      .then(() => {
        return dispatch(getDateFromDataAndSort(fakeData));
      })
      .then(() => {
        return dispatch(downloadData(true));
      });
  };
};
