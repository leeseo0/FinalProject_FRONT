import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

function TravelRecordList({ travelRecords, editTravelRecord, deleteTravelRecord }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false); // 수정 폼을 나타내는 상태 변수
  const [editedRecord, setEditedRecord] = useState(null); // 수정할 여행 기록

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const openEditForm = (record) => {
    setEditedRecord(record);
    setIsEditFormOpen(true);
  };

  const closeEditForm = () => {
    setEditedRecord(null);
    setIsEditFormOpen(false);
  };

  const handleEdit = () => {
    if (editedRecord) {
      editTravelRecord(editedRecord, expandedIndex);
      closeEditForm();
    }
  };

  const summarizeText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div>
      <h2>여행 기록 목록</h2>
      <div className="travel-record-container">
        {travelRecords.map((record, index) => (
          <div className="travel-record-item" key={index}>
            <img src={record.image} alt={record.title} />
            <h3>{record.title}</h3>
            <p>{`${formatDate(record.startDate)} ~ ${formatDate(record.endDate)}`}</p>
            <p>{summarizeText(record.description, 100)}</p>
            {expandedIndex === index ? (
              <div>
                <p>{record.description}</p>
                <button onClick={() => toggleExpand(index)}>접기</button>
              </div>
            ) : (
              <button onClick={() => toggleExpand(index)}>더 보기</button>
            )}
            <button onClick={() => editTravelRecord(record, index)}>수정</button>
            <button onClick={() => deleteTravelRecord(index)}>삭제</button>
          </div>
        ))}
        {/* 수정 폼 */}
        {isEditFormOpen && (
        <div className="edit-form">
          <h3>여행 기록 수정</h3>
          <div className="form-group">
            <label htmlFor="editTitle">여행 기록 제목</label>
            <input
              type="text"
              id="editTitle"
              value={editedRecord.title}
              onChange={(e) => setEditedRecord({ ...editedRecord, title: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="editStartDate">여행 시작일</label>
            <DatePicker
              selected={editedRecord.startDate}
              onChange={(date) => setEditedRecord({ ...editedRecord, startDate: date })}
              dateFormat="yyyy/MM/dd"
              id="editStartDate"
            />
          </div>
          <div className="form-group">
            <label htmlFor="editEndDate">여행 종료일</label>
            <DatePicker
              selected={editedRecord.endDate}
              onChange={(date) => setEditedRecord({ ...editedRecord, endDate: date })}
              dateFormat="yyyy/MM/dd"
              id="editEndDate"
            />
          </div>
          <div className="form-group">
            <label htmlFor="editDescription">여행 기록 내용</label>
            <textarea
              id="editDescription"
              value={editedRecord.description}
              onChange={(e) => setEditedRecord({ ...editedRecord, description: e.target.value })}
            />
          </div>
          <button onClick={handleEdit}>저장</button>
          <button onClick={closeEditForm}>취소</button>
        </div>
      )}
      </div>
    </div>
  );
}

export default TravelRecordList;
