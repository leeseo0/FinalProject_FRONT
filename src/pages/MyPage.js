import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 추가

function MyPage() {
  return (
    <div>
      <h1>마이페이지</h1>
      {/* 마이페이지 내용 */}
      <Link to="/bookmark-page">북마크 페이지로 이동</Link>
      <p></p>
      <Link to="/record-page">여행기록 페이지로 이동</Link>
    </div>
  );
}

export default MyPage;