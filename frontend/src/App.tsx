import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserTasksPage from './components/UserTasksPage';
import './styles.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserTasksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
