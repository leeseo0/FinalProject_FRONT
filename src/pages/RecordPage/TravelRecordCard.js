import React from 'react';
import '../RecordPage/RecordList.css';

function TravelRecordCard({ record }) {
    return (
      <div className="record_container">
        <h3>{record.title}</h3>
        <p>Date: {record.date}</p>
        <p>{record.content}</p>
        {/* 수정 및 삭제 버튼을 추가할 수 있습니다 */}
      </div>
    );
  }
  
  export default TravelRecordCard;
