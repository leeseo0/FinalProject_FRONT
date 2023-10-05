import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';
import MyPage from './pages/MyPage';
import Navbar from "./components/Navbar";
import Bookmark from './pages/Bookmark';
import Record from './pages/RecordPage/TravelRecordPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} /> {/* 메인페이지 */}
          <Route path="/my-page" element={<MyPage />} /> {/* 마이페이지 */}
          <Route path="/bookmark-page" element={<Bookmark />} /> {/* 북마크 페이지 */}
          <Route path="/record-page" element={<Record />} /> {/* 여행기록 페이지 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
