import React, { useState } from 'react';
import './FSADApp.css';  // Import CSS for styling

const FSADApp = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="syllabus-container">
      <h2 onClick={toggleCollapse} className="syllabus-header">
        FSAD Syllabus {isCollapsed ? '+' : '-'}
      </h2>
      {!isCollapsed && (
        <div className="syllabus-content">
          <p>Full Stack App Development course content includes...</p>
          <ul>
            <li>HTML/CSS/JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Database Management</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FSADApp;
