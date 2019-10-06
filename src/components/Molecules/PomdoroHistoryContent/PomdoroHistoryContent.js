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
  const downloadData = useSelector(state => state.downloadData);
  const data = useSelector(state => state.pomodoroSessions);
  const allDate = useSelector(state => state.allDate);

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
        {allDate.map((eAllDate, index) => (
          <>
            <StyledNameOfDay first={index === 0 && true}>
              <StyledParagraphNameOfDay>
                {changeDataToStringWithDayName(eAllDate)}
              </StyledParagraphNameOfDay>
            </StyledNameOfDay>
            {data.map(eData => {
              if (eAllDate === eData.dateSerch) {
                return (
                  <>
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
                  </>
                );
              }
            })}
          </>
        ))}
      </>
    );
  }
  return null;
};

export default PomdoroHistoryContent;
