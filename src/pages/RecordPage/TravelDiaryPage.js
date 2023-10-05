import React, { useState } from 'react';
import TravelRecordList from '../RecordPage/TravelRecordList';
import TravelRecordForm from '../RecordPage/TravelRecordForm';

function TravelDiaryPage() {
    // 여행 기록을 저장할 상태와 기본 값 초기화
    const [travelRecords, setTravelRecords] = useState([]);
    
    // 새로운 여행 기록을 추가하는 함수
    const addTravelRecord = (record) => {
      setTravelRecords([...travelRecords, record]);
    };
  
    // 선택한 여행 기록을 수정하는 함수
    const editTravelRecord = (editedRecord, index) => {
      const updatedRecords = [...travelRecords];
      updatedRecords[index] = editedRecord;
      setTravelRecords(updatedRecords);
    };
  
    // 선택한 여행 기록을 삭제하는 함수
    const deleteTravelRecord = (index) => {
      const updatedRecords = [...travelRecords];
      updatedRecords.splice(index, 1);
      setTravelRecords(updatedRecords);
    };
  
    return (
      <div>
        <h1>여행 기록 페이지</h1>
        <TravelRecordForm addTravelRecord={addTravelRecord} />
        <TravelRecordList
          travelRecords={travelRecords}
          editTravelRecord={editTravelRecord}
          deleteTravelRecord={deleteTravelRecord}
        />
      </div>
    );
  }
  
  export default TravelDiaryPage;