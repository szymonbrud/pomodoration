import React from 'react';
import { useSelector } from 'react-redux';
import {
  getDatabaseFormatDate,
  chengeDateToDateWithKoma,
  changeSecoundsToMinAndSec,
} from 'functions';
import {
  StyledPositionWrapperOfNamesSestions,
  StyledNameOfSections,
  StyledNameOfDay,
  StyledParagraphNameOfDay,
  StyledMainWrapperOfSession,
  StyledNameOFSession,
  StyledLine,
  StyledSessionNumber,
  StyledTimeOfSession,
  StyledInsideWrapperOfSession,
  StyledInsideWrapperOfsessionSecound,
} from './PomdoroHistoryContent.style';

const PomdoroHistoryContent = () => {
  const downloadData = useSelector(state => state.historyOfPomodoro.downloadData);
  const data = useSelector(state => state.historyOfPomodoro.pomodoroSessions);
  const allDate = useSelector(state => state.historyOfPomodoro.allDate);

  const changeDataToStringWithDayName = date => {
    if (date === getDatabaseFormatDate()) {
      return 'dziś';
    }
    if (date === getDatabaseFormatDate(1)) {
      return 'wczoraj';
    }
    return chengeDateToDateWithKoma(date);
  };

  // console.log(allDate);
  // console.log(data);
  // TODO: co gdy jeszcze nie będę miał jeszcze żadnych zapisanych pomodoro w histori
  if (downloadData) {
    return (
      <>
        <StyledPositionWrapperOfNamesSestions>
          <StyledNameOfSections>nazwa</StyledNameOfSections>
          <StyledNameOfSections>czas</StyledNameOfSections>
        </StyledPositionWrapperOfNamesSestions>
        {allDate.map((eAllDate, index) => (
          <>
            <StyledNameOfDay first={index === 0 && true}>
              <StyledParagraphNameOfDay data-testid="dataOfPomodoro">
                {changeDataToStringWithDayName(eAllDate)}
              </StyledParagraphNameOfDay>
            </StyledNameOfDay>
            {data.map(eData => {
              if (eAllDate === eData.dateSerch) {
                return (
                  <StyledMainWrapperOfSession>
                    <StyledInsideWrapperOfSession>
                      <StyledNameOFSession>{eData.title}</StyledNameOFSession>
                      <StyledLine />
                    </StyledInsideWrapperOfSession>
                    <StyledSessionNumber>{eData.pomodoro}</StyledSessionNumber>
                    <StyledInsideWrapperOfsessionSecound>
                      <StyledLine />
                      <StyledTimeOfSession>
                        {changeSecoundsToMinAndSec(eData.time)}
                      </StyledTimeOfSession>
                    </StyledInsideWrapperOfsessionSecound>
                  </StyledMainWrapperOfSession>
                );
              }
            })}
          </>
        ))}
      </>
    );
  }

  // TODO: co z tym zrobić, i dla czego to tu dałem (chyba tu powinna być animacja ładowania danych)
  return <p data-testid="patagraph">lol</p>;
};

export default PomdoroHistoryContent;
