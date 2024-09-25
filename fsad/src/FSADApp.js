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
            <li> - Application Development</li>
            <li> - Understanding the Basics</li>
            <li> - Web Protocols</li>
            <li> - Server Side:  Implementing Web Services</li>
			<li> - Securing Application</li>
			<li> - Understanding Frontend Development</li>
			<li> - Testing </li>
			<li> - Accessibility and Performance</li>
			<li> - Latest Advancements</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FSADApp;
