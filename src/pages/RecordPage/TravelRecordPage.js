import React, { useState } from 'react';
import TravelRecordCard from '../RecordPage/TravelRecordCard';

function TravelRecordPage() {
  const [records, setRecords] = useState([
    { id: 1, title: 'Trip to Paris', content: 'Had a great time in Paris!', date: '2023-01-15' },
    { id: 2, title: 'Beach Vacation', content: 'Enjoyed the sun and surf!', date: '2023-03-10' },
  ]);

  return (
    <div>
      <h2>My Travel Records</h2>
      {records.map((record) => (
        <TravelRecordCard key={record.id} record={record} />
      ))}
    </div>
  );
}

export default TravelRecordPage;
