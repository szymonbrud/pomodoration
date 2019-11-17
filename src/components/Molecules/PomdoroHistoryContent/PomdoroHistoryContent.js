import React from 'react';
import { useSelector } from 'react-redux';
import {
  getDatabaseFormatDate,
  chengeDateToDateWithKoma,
  changeSecoundsToMinAndSec,
} from 'functions';
import LoadingAnimation from 'components/Molecules/LoadingAnimation/LoadingAnimation';
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
  StyledWrapperForText,
  STyledInnerWHiteText,
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
  if (downloadData) {
    return (
      <>
        <StyledPositionWrapperOfNamesSestions>
          <StyledNameOfSections>nazwa</StyledNameOfSections>
          <StyledNameOfSections>czas</StyledNameOfSections>
        </StyledPositionWrapperOfNamesSestions>
        {allDate.length === 0 ? (
          <StyledWrapperForText>
            <STyledInnerWHiteText>tutaj będą zapisywane wszyskie twoje sesje</STyledInnerWHiteText>
          </StyledWrapperForText>
        ) : (
          allDate.map((eAllDate, index) => (
            <div key={`id_${eAllDate}`}>
              <StyledNameOfDay first={index === 0}>
                <StyledParagraphNameOfDay data-testid="dataOfPomodoro">
                  {changeDataToStringWithDayName(eAllDate)}
                </StyledParagraphNameOfDay>
              </StyledNameOfDay>
              {data.map(
                eData =>
                  eAllDate === eData.dateSerch && (
                    <StyledMainWrapperOfSession key={eData.date.toString()}>
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
                  ),
              )}
            </div>
          ))
        )}
      </>
    );
  }

  return <LoadingAnimation data-testid="patagraph" text="ładowanie" />;
};

export default PomdoroHistoryContent;
