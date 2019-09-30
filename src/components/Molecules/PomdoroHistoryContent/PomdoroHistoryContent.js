import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getDatabaseFormatDate } from 'functions';

const PomdoroHistoryContent = () => {
  const downloadData = useSelector(state => state.downloadData);
  const data = useSelector(state => state.pomodoroSessions);
  const allDate = useSelector(state => state.allDate);

  const changeDataToStringWithDayName = date => {
    if (date === getDatabaseFormatDate()) {
      return 'dzisiaj';
    }
    if (date === getDatabaseFormatDate(1)) {
      return 'wczoraj';
    }
    return date;
  };

  if (downloadData) {
    return (
      <>
        {allDate.map(eAllDate => (
          <>
            <h1>{changeDataToStringWithDayName(eAllDate)}</h1>
            {data.map(eData => {
              if (eAllDate === eData.dateSerch) {
                return <p>{eData.title}</p>;
              }
            })}
          </>
        ))}
      </>
    );

    // return (
    //   <>
    //     {/* {data.map(e => (
    //       <h1>
    //         {e.dateSerch === getDatabaseFormatDate()
    //           ? 'dzis'
    //           : e.dateSerch === getDatabaseFormatDate(1)
    //           ? 'wczoraj'
    //           : e.dateSerch}
    //       </h1>
    //     ))} */}
    //   </>
    // );
  }
  return null;
};

export default PomdoroHistoryContent;
