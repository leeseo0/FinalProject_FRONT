import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TravelRecordForm({ addTravelRecord }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || !startDate || !endDate || description.trim() === '') {
      return;
    }

    const newRecord = {
      title,
      description,
      startDate,
      endDate,
      image,
    };

    addTravelRecord(newRecord);

    setTitle('');
    setDescription('');
    setStartDate(null);
    setEndDate(null);
    setImage(null);
  };

  return (
    <div className="travel-record-form">
      <h2>여행 기록 작성 폼</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">여행 기록 제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">여행 시작일</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy/MM/dd"
            id="startDate"
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">여행 종료일</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy/MM/dd"
            id="endDate"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">여행 기록 내용</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">사진 첨부</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">추가</button>
      </form>
    </div>
  );
}

export default TravelRecordForm;
